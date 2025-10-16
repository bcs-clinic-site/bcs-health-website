import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();
const app = express();
app.use(cors());

app.get("/images", async (req, res) => {
  const { type } = req.query;

  // Validate type
  const validTypes = ["outreach", "education", "symposium"];
  if (!type || !validTypes.includes(type)) {
    return res.status(400).json({
      error: `Invalid type. Must be one of: ${validTypes.join(", ")}`,
    });
  }

  // Map type to folderId
  const folderMap = {
    outreach: process.env.GOOGLE_FOLDER_OUTREACH,
    education: process.env.GOOGLE_FOLDER_EDUCATION,
    symposium: process.env.GOOGLE_FOLDER_SYMPOSIUM,
  };

  const folderId = folderMap[type];
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!folderId || !apiKey) {
    return res.status(500).json({
      error: "Missing folder ID or GOOGLE_API_KEY in environment variables.",
    });
  }
  try {
    // 1. Fetch all subfolders
    const folderQuery = encodeURIComponent(
      `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.folder'`
    );
    const folderUrl = `https://www.googleapis.com/drive/v3/files?q=${folderQuery}&fields=files(id,name)&key=${apiKey}`;

    const folderResponse = await fetch(folderUrl);
    const folderData = await folderResponse.json();

    if (!folderData.files || folderData.files.length === 0) {
      return res.json({});
    }

    //  Sort folders numerically (DESCENDING) based on the leading number
    const subfolders = folderData.files.sort((a, b) => {
      const numA = parseInt(a.name.match(/^\d+/)?.[0] ?? "0", 10);
      const numB = parseInt(b.name.match(/^\d+/)?.[0] ?? "0", 10);
      // Descending: larger number first
      return numB - numA;
    });

    const categorizedImages = {};

    // 2. Fetch images for each subfolder
    const imageFetchPromises = subfolders.map(async (folder) => {
      const subfolderId = folder.id;

      // Remove leading "number. " prefix (e.g., "3. Example" → "Example")
      const cleanedName = folder.name.replace(/^\d+\.\s*/, "");

      const imageQuery = encodeURIComponent(
        `'${subfolderId}' in parents and mimeType contains 'image/'`
      );
      const imageUrl = `https://www.googleapis.com/drive/v3/files?q=${imageQuery}&fields=files(id,name)&key=${apiKey}`;

      const imageResponse = await fetch(imageUrl);
      const imageData = await imageResponse.json();

      const images =
        imageData.files?.map((file) => ({
          id: file.id,
          name: file.name,
          //url: `https://lh3.googleusercontent.com/d/${file.id}=w1000`,
          url: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`
        })) ?? [];

      categorizedImages[cleanedName] = images;
    });

    await Promise.all(imageFetchPromises);

    console.log(categorizedImages)
    res.json(categorizedImages);
  } catch (err) {
    console.error("Google Drive API Error:", err);
    res.status(500).json({ error: "Failed to fetch categorized images from Google Drive." });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
