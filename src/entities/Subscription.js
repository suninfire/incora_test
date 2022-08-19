import {StreamingService} from "./StreamingService";

export default class Subscription {

    constructor(streamingService) {
}

watch(showName,shows){
    const result = shows.find(value => value.name === showName);
    return result;
}

getRecommendationTrending(year,shows) {
    const mostViewedShowsOfYear = StreamingService.prototype.getMostViewedShowsOfYear(year,shows);
    let trendResult =  mostViewedShowsOfYear[Math.floor(Math.random() * mostViewedShowsOfYear.length)];
    return trendResult;
}

getRecommendationByGenre(genre,shows) {
     const mostViewedShowsOfGenre = StreamingService.prototype.getMostViewedShowsOfGenre(genre,shows);
     let genreResult = mostViewedShowsOfGenre[Math.floor(Math.random() * mostViewedShowsOfGenre.length)];
  return genreResult;

 }

}

