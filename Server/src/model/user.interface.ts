export interface User {
    id: number;
    email: string;
    password: string;
    username: string;
    liked: number[];
    disliked: number[];
    friends: number[];
  }