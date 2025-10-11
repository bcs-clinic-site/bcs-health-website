import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.get("/images", async (req, res) => {
  const { letter } = req.query;
  const folderId = process.env.GOOGLE_FOLDER_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!["A", "B", "C"].includes(letter)) {
    return res.status(400).json({ error: "letter must be A, B, or C" });
  }

  try {
    // Fetch files from the public folder
    const q = encodeURIComponent(`'${folderId}' in parents and name contains '${letter}' and mimeType contains 'image/'`);
    const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name)&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const images = data.files.map(file => ({
      id: file.id,
      name: file.name,
      url: `https://lh3.googleusercontent.com/d/${file.id}`,
    }));


    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));