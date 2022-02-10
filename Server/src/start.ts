/**

 * Required External Modules

 */



 import express from "express";

 import { userRouter } from "./router/user.router";
 
 
 
 /**
 
  * App Variables
 
  */
 
 
 
 
 export const app = express();
 
 
 
 /**
 
  * App Configuration
 
  */
 
 
 
 app.use(express.json());
 
 app.use("/users", userRouter);