import exp from "constants";
import Express from "express";
import { userRouter } from "./router/user.router";
import cors from "cors";


const app : Express.Express = Express();

app.use(Express.json());
app.use(cors());
app.use("/task", userRouter);
app.listen(8080);
