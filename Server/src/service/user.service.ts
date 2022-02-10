import { User } from "../model/user.interface";


// In-Memory Store
const users : { [key: number]: User } = {};

export const addUser = async (email:string, password:string, username:string): Promise<User> => {
    const id = new Date().valueOf();
    users[id] = 
    {email : email,
    password:password,
    username:username,
    id:id,
    liked:[],
    disliked:[],
    friends:[]};
    return users[id];
}

export const addFriend = async (friendID:number, userID:number): Promise<Array<User>> =>{

    if (!(friendID in users)){
        throw new Error("User does not exist.");

    }

}