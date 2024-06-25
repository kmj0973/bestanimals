import express, { Request, Response } from 'express';
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!111');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});