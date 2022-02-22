

import { User } from "../../model/user.interface";

import * as US from "../../service/user.service";

//test the router layer

test("Add friend to empty friends list", () => {
const UserService = new US.UserServices({});

 UserService.addUser("ermin@gmail.com","9999","ermino").then((user : User) => {
 const usertest : User = {id:user.id, email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]};
 expect(user).toEqual(usertest);

 }).catch((e : any) => fail(e.message));

});


test("Get empty friends list", () => {
    
    const id : number = new Date().valueOf();
    const UserService = new US.UserServices(
        {25 : {id:25,email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]}});
    //const usertest : User = {id:id, email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]};
    UserService.getFriends(25).then((friends : number[]) => {
    expect(friends).toEqual([]);
   
    }).catch((e : any) => fail(e.message));
   
   });