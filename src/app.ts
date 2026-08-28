import express, { Application } from "express";
import process = require("process");
import swaggerUi from "swagger-ui-express";
// import { swaggerSpec } from "./config/swagger";

export const createApp = (): Application => {
    const app = express();

    //Middleware para poder leer Json en el body de las peticiones
    app.use(express.json());
    //Ruta de salud: confirmar que el servidor esta arriba
    app.get("/health",(req,res) => {
        res.json({status: "ok", uptime: process.uptime()});
    });
    // // Swagger va aquí, junto a las demás rutas
    // app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // // Rutas reales de la API
    // app.use("/api", apiRoutes);

    return app;
};