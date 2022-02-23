/**
 * Required External Modules
 */

 import express from "express";
 import { makeDefaultUserRouter } from "./router/user.router"; 

 /**
  * App Variables
  */
 
 export const app = express();
 
 /**
  * App Configuration
  */
 
 app.use(express.json());
 app.use("/users", makeDefaultUserRouter());
