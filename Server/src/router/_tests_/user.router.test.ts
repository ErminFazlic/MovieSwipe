import { makeUserRouter } from "../user.router";
import { UserServices } from "../../service/user.service";
import { User } from "../../model/user.interface";
test("A post request to/ create a new user",()=>{
    class MockUserService extends UserServices{
        const users:{[key: number]:User};
        constructor(){
            super({});
        }

        addUser: (email:"ermin@gmail.com" , password: "9999", username: "ermino") => Promise<User> =async() =>{
            this.calledAddUser = true;
            return null;
        }
    }
    const us = new MockUserService();
    const router = makeUserRouter(us);

    const request = Supertest(router);
    request.put("/").then((res)=>{
        expect(res.statusCode).toBe(201);
    })

});