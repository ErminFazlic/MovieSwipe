import { User } from "../model/user.interface";


// In-Memory Store
export interface IUserServices {
    addUser(email:string, password:string, username:string):Promise<User>
    addFriend (friendID:number, userID:number): Promise<Array<number>>
    getFriends (userID:number): Promise<Array<number>>
}
export class UserServices implements IUserServices{
    public users:{[key: number]:User}={
        0:{id:24,email:"vale@gmail",password:"vv",username:"faith",
        liked:[],disliked:[],friends:[45]}
    }

    constructor(users:{[key:number] : User}){
        this.users=users;
    }

addUser = async (email:string, password:string, username:string): Promise<User> => {
        const id = new Date().valueOf();
        this.users[id] = 
        {
        id:id,
        email : email,
        password:password,
        username:username,
        liked:[],
        disliked:[],
        friends:[]};
        return this.users[id];
    }
    
    addFriend = async (friendID:number, userID:number): Promise<Array<number>> =>{
    
        if (!(friendID in this.users)){
            throw new Error("User does not exist.");
        }
    
        const user = this.users[userID];
        const friend = this.users[friendID];
    
        user.friends.push(friendID);
        friend.friends.push(userID);
    
        this.users[userID] = user;
        this.users[friendID] = friend;
    
        return user.friends;
    }
    
    getFriends = async (userID:number): Promise<Array<number>> =>{
        try{
            if (!(userID in this.users)){
            throw new Error("User does not exist.");
           
        }
        return this.users[userID].friends;
        }catch(e:any){
            return [];
        }
        
    }
}

export function makeUserServices():UserServices{
    return new UserServices({});
}

