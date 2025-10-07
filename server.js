import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

app.post("/api/tiktok", async (req, res) => {
  try {
    const { url } = req.body;
    const response = await fetch("https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index?url=" + encodeURIComponent(url), {
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
