

import { User } from "./model/user.interface";

import * as UserService from "./service/user.service"



test("Add friend to empty friends list", () => {

 UserService.addUser("ermin@gmail.com","9999","ermino").then((user : User) => {
 const usertest : User = {id:user.id, email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]};
 expect(user).toEqual(usertest);

 }).catch((e : any) => fail(e.message));

});


test("Get empty friends list", () => {
    const id : number = new Date().valueOf();
    const usertest : User = {id:id, email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]};
    UserService.getFriends(id).then((friends : number[]) => {
    expect(friends).toEqual([]);
   
    }).catch((e : any) => fail(e.message));
   
   });