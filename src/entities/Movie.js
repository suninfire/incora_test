import Show from "./Show";

export class Movie extends Show{
    constructor(name, genre, releaseDate) {
    super(name, genre, releaseDate);
}
getDuration(){return this.duration}
}