import { Express } from "express";
import { makeUserRouter } from "../user.router";
import { IUserServices } from "../../service/user.service";
import { User } from "../../model/user.interface";
import supertest,{Test, SuperTest} from "supertest";

test("A post request to/ create a new user",()=>{
    const listOfUser : User[]=[
        {id:24,email:"vale@gmail",password:"vv",username:"faith",
        liked:[],disliked:[],friends:[45]}
        ];
    class MockUserService implements IUserServices{
        
        getFriends = async (): Promise<Array<number>> =>{
            return listOfUser[24].friends;
        }
       
        addUser (email:string, password:string, username:string): Promise<User> {
            throw new Error ("method not implemented");
        }
        addFriend (friendID:number, userID:number): Promise<Array<number>>{
            throw new Error ("method not implemented");
        }
    }
    const us = new MockUserService();
    const router = makeUserRouter(us);

    const request:SuperTest<Test> = supertest(router);

    request.get("/users").then((res)=>{
        expect(res.statusCode).toBe(200);
        expect(res.body.length) .toBe(1);
        expect(res.body[0].friends). toEqual([45]);
    })

});