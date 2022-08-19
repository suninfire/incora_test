import Show from "./Show";

export class Series extends Show {
    constructor(name, genre, releaseDate,episodes) {
    super(name, genre, releaseDate);
}
getDuration() {return this.duration}
}