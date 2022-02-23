import * as Supertest from "supertest";
import { User } from "./model/user.interface";
import { app } from "./start";

const request : Supertest.SuperTest<Supertest.Test> = Supertest.default
(app);


test("get empty friends list", async () => {
 const usertest : User = {id:new Date().valueOf(), email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]};

 const res = await request.get('/users/'+ usertest.id.toString+'/friends');
 expect(res.statusCode).toEqual(200);

 expect(res.body).toEqual([]);
 

});