import { Router } from "express";
import pizzas from "../data/pizzas.json" with { type: "json" };

const pizzaRouter = Router();

pizzaRouter.get("/", (_req, res) => {
  res.json(pizzas);
});

export default pizzaRouter;
