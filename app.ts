import { Request, Response, Express } from "express";
import express from 'express'
import env from 'dotenv'
import AppDataSource from "./db/dbConfig.js";
import router from "./routes/cus_routes.js";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";


const app : Express = express();
env.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(customErrorHandler)
app.use(DefaultErrorHandler)


app.get("/" , (req: Request, res: Response) => {

    res.send("Hello World");
})
app.use("/customer", router)


AppDataSource.initialize()
.then(() => {
    console.log("Database connection successful")
})
.catch((err) => {
    console.log("Database connection failed" + err) 
})


let Server = app.listen(PORT, () => {

    console.log("port is running on the " + PORT);
});





