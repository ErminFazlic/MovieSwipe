import {Movie} from "../model/movie.interface"


// In-Memory Store
const movies : { [key: number]: Movie } = {};

export const addLike = async (id: number, userID: number) : Promise<Array<number>> => {
    if(!(id in movies)){
        const newID = new Date().valueOf();
        movies[newID] = { id : newID, likes : []};
        id = newID;
        }
    const movie :Movie = movies[id];
    movie.likes.push(userID);
    movies[id] = movie;
    return movie.likes;
}

