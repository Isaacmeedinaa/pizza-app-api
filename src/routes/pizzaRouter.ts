import { Router } from "express";
import pizzas from "../data/pizzas.json" with { type: "json" };

const pizzaRouter = Router();

pizzaRouter.get("/", (_req, res) => {
  res.status(200).send({ data: { pizzas: pizzas } });
});

export default pizzaRouter;
