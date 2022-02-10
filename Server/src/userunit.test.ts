

import { User } from "./model/user.interface";

import * as UserService from "./service/user.service"



test("Add friend to empty friends list", () => {

 UserService.addUser("ermin@gmail.com","9999","ermino").then((user : User) => {
 const usertest : User = {id:user.id, email:"ermin@gmail.com", password:"9999", username:"ermino", liked:[], disliked:[], friends:[]};
 expect(user).toEqual(usertest);

 }).catch((e : any) => fail(e.message));

});