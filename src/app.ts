import express, { Application } from "express";
import process = require("process");

export const createApp = (): Application => {
    const app = express();

    //Middleware para poder leer Json en el body de las peticiones
    app.use(express.json());
    //Ruta de salud: confirmar que el servidor esta arriba
    app.get("/health",(req,res) => {
        res.json({status: "ok", uptime: process.uptime()});
    });
    return app;
};