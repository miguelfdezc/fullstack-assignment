import { Request, Response, Router } from "express";
import { CurrencyController } from "@app/currency";

const currencyRouter: Router = Router();
const currencyController = new CurrencyController();

currencyRouter.post("/api/currency", async (req: Request, res: Response) => {
  currencyController.subscribe(req, res);
});

currencyRouter.put(
  "/api/currency/:currencyCode",
  async (req: Request, res: Response) => {
    currencyController.unsubscribe(req, res);
  }
);

export default currencyRouter;
