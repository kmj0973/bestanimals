import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// JSON 파싱 미들웨어y
app.use(express.json());

// Example API route
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the server!" });
});

// Serve static files from the Next.js client build
app.use(express.static(path.join(__dirname, "../client/.next")));

// All other requests serve the client application
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../client/.next", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
