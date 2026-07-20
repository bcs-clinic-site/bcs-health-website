# BCS Free Health Clinic Website

Welcome to the **BCS Free Health Clinic** website! This website helps our community find information about clinic schedules, health education, outreach events, and our services.

---

## 🚀 Getting Started

If you are just helping to run the website, here is how to get set up:

### Prerequisites
1. **Node.js:** Download and install [Node.js](https://nodejs.org/) (use the "LTS" version).
2. **Visual Studio Code:** Download and install [VS Code](https://code.visualstudio.com/).
3. **GitHub Desktop:** Download and install [GitHub Desktop](https://desktop.github.com/).
4. **GitHub Copilot (Optional):** You can use [GitHub Copilot](https://github.com/features/copilot) inside VS Code for intelligent code assistance.

### Getting the Code (Cloning)
1. Open **GitHub Desktop** and log in.
2. Click **File** > **Clone repository**.
3. Select the repository from the list (or enter the URL) and choose a folder on your computer to save it.

### Running the Website
1. Open the project folder in **VS Code**.
2. Open the built-in terminal (**Terminal > New Terminal**).
3. Run `npm install` to prepare the website.
4. Run `npm run dev` to start the website locally.
5. Open your web browser and go to `http://localhost:5173`.

---

## ✍️ Simple Updates (No Code Needed)

You can easily update the clinic date and reviews without changing any technical code.

*Note: To ensure these updates are reflected on the live website, please remember to deploy your changes after saving. Refer to the [Putting the Website on Production (Bluehost)](#-putting-the-website-on-production-bluehost) section for instructions.*

*You can also edit the Clinic Date and Community Reviews straight from the file manager on BlueHost*

### 1. Update the Upcoming Clinic Date
* **File:** `public/content/clinic_date.txt`
* **Instructions:** Open this file, type the new date, and save.

### 2. Update Community Reviews
* **File:** `public/content/reviews.txt`
* **Instructions:** Open this file. Each line is one review. Add or edit them, then save.

### 3. Add Photos to Gallery
* **Location:** `app/images/gallery/`
* **Instructions:** 
  1. Find the folder for your event (e.g., `clinic/`).
  2. Create a new folder named `##. (YYYY_M_DD) Name of Event` (Example: `15. (2026_07_12) July Clinic`). The number ensures they stay in order.
  3. Drag your photos into that folder.

---

## 🆕 How to Add a New Page

You can add new pages using one of the following methods:

### Option 1: Using GitHub Copilot in VS Code (Recommended)
GitHub Copilot provides intelligent, file-aware coding assistance directly in your editor.

1. **Setup:** Ensure you have [GitHub Copilot](https://github.com/features/copilot) installed and active in your VS Code.
2. **Chat/Prompt:** Open the Copilot Chat window in VS Code, reference the `app/routes/services/feedback.tsx` file (you can type `@workspace /file:app/routes/services/feedback.tsx`), and prompt:
   > "Using the provided feedback file as a template, create a new page for [Name of Page]. Here is what I want on the page: [Describe text, images, and links]. Please give me the code for the new file and tell me how to add it to `app/routes.ts`."
3. **Apply:** Create the file and register the route as instructed by Copilot.

### Option 2: Using Gemini CLI
The Gemini CLI can directly access your files and create pages for you.

1. **Install:** Run `npm install -g @google/gemini-cli` in your terminal.
2. **Set Model:** Run `gemini config set model gemini-3.1-flash-lite` to ensure the best performance.
3. **Create Page:** Run the following command in your terminal (replace the bracketed text):
   `gemini run "Create a new page for [Name of Page] based on app/routes/services/feedback.tsx. [Add details here about text, images, and links]."`
4. **Register:** The CLI will provide the code and tell you exactly how to register it in `app/routes.ts`.

### Option 3: Using Web-based AI (ChatGPT, Claude, etc.)
If you prefer to use a web browser:

1. Open `app/routes/services/feedback.tsx` and copy its code.
2. Paste it into your AI of choice along with these instructions:
   > "I want to create a new page for [Name of Page]. Please use the code I provided as a template. Here is what I want on the page: [Describe text, images, and links]. Please give me the updated code and tell me how to add it to `app/routes.ts`."
3. Create the new file, paste the AI-generated code, and register it in `app/routes.ts` as instructed.

### Tips for All Methods
* **Canva:** If you design visuals in Canva, download them as a PNG or JPG.
* **Images:** Place your images into the `app/images/` folder and make sure to import them at the top of your new file (e.g., `import myImage from "../../images/folder/my-photo.png"`).

---

## ⚠️ Important: Testing
Before putting anything on the live website, **always make sure everything works perfectly on your machine** by running `npm run dev` and checking your browser.

---

## 🌐 Putting the Website on Production (Bluehost)
Follow these steps to update the live website:

1. **Build the website:** Open your terminal in the project folder and run:
   ```bash
   npm run build
   ```
   This will create a new `build` folder in your project.
2. **Log in to Bluehost:** Go to [Bluehost.com](https://www.bluehost.com) and log in to your account.
3. **Open File Manager:** Go to the [Sites page](https://www.bluehost.com/my-account/hosting/details/sites), find **BCS-Clinic**, and click **File Manager**.
4. **Upload files:**
   * Go to `/assets` on BlueHost
   * Click **Upload**.
   * Check the box for **"Overwrite existing files"**.
   * Click **Select File**.
   * Select every file and folder located *inside* your local `build/client/assets` folder (you can use Shift+Click to select them all) and upload them (Only if any pictures were changed/uploaded).
   * Do the same thing for `/content` on bluehost from your local `build/client/content`

---

## 💾 Pushing Your Code (GitHub Desktop)
If you are working on the code and want to save your changes to GitHub:

1. **Install:** Download and install [GitHub Desktop](https://desktop.github.com/).
2. **Set up:** Open GitHub Desktop and log in to your GitHub account.
3. **Add Repository:** Click **File** > **Add Local Repository** and select the folder where this project is saved.
4. **Commit Changes:**
   * In the left panel, you will see your changed files.
   * Enter a short summary of your changes in the **Summary** box at the bottom-left.
   * Click **Commit to main**.
5. **Push:** Click the **Push origin** button at the top to send your changes to GitHub.
