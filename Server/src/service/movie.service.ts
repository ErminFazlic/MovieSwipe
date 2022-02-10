import {Movie} from "../model/movie.interface"

const liked : number[] = [];

export const addLike = async (id: number, userID: number) : Promise<Movie> => {
    liked.push(userID);
    const movie : Movie = {id : new Date().valueOf(), likes : liked};
    return movie
}

