import express, { Request, Response} from "express";

import * as UserService from "../service/user.service";

import { User } from "../model/user.interface";
import { request } from "http";



export const userRouter = express.Router();


//create user
userRouter.post("/", async (req: Request, res: Response) => {

 try {  

 const email : string = req.body.email;
 const password : string = req.body.password;
 const username : string = req.body.username;

 const user : User = await UserService.addUser(email, password, username);

 res.status(201).send(user);

 } catch (e : any) {

 res.status(500).send(e.message);

 }

});

//add friend
userRouter.put("/:userID/friends/:friendID", async (req: Request, res:Response)=> {
    try{
        
        const userID : number = parseInt(req.params.userID, 10);
        const friendID : number = parseInt(req.params.friendID, 10);

        const friends : number[] = await UserService.addFriend(friendID, userID);
        res.status(200).send(friends);
    } catch (e : any) {

        res.status(500).send(e.message);
       
        }
});

// Get friends
userRouter.get("/:userID/friends", async (req: Request, res:Response)=> {

    try{
        
        const userID : number = parseInt(req.params.userID, 10);

        const friends : number[] = await UserService.getFriends(userID);
        res.status(200).send(friends);
    } catch (e : any) {

        res.status(500).send(e.message);
       
        }
});