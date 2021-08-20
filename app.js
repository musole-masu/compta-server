import express, { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoute from "./src/routes/adminRoute";
export class App {
  static app;
  constructor() {
    this.app = express();
    this.initialMiddlewares();
    this.initializeRoutes();
    this.initailizeDefaultRoute();
  }
  initialMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }
  initializeRoutes() {
    this.app.use("/api/v1/", adminRoute);
  }
  initailizeDefaultRoute() {
    this.app.get("/", (req, res) => {
      return res.status(200).json({
        statusCode: "200",
        message: "Bienvenue sur la Compta",
      });
    });

    this.app.all("/", (req, res) => {
      return res.status(400).json({
        statusCode: "400",
        message: "Invalid route",
      });
    });

    this.app.use("*", (req, res) => {
      return res.status(403).json({
        statusCode: "403",
        message: "Invalid route",
      });
    });
  }
  listen() {
    const port = process.env.PORT || 4000;
    this.app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  }
}
