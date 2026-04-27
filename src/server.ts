import express from "express";
import cors from "cors";
import pizzaRouter from "./routes/pizzaRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (_req, res) => {
  res.json({
    message: "Pizza App API is running",
  });
});

app.use("/api/pizzas", pizzaRouter);

const PORT = 7100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
