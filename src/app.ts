import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route

type Request = express.Request;
type Response = express.Response;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.get("/solana", (req: Request, res: Response) => {
  res.send("Hello, Solana!");
});
console.log("Hello, Solana!");

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
