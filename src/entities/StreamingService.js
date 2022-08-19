export class StreamingService {

    constructor(name, shows,viewsByShowName) {
        this.name = name;
        this.shows = shows;
        this.viewsByShowName = viewsByShowName;
}

addShow(show,shows){
    for (let item of shows){
       if (show.name === item.name && show.genre === item.genre && show.releaseDate === item.releaseDate) {
         alert('you have this show');
         return shows;
  }
    }
      shows.push({...show});
      return shows;
}

getMostViewedShowsOfYear(year,shows) {

    const showsOfYear = shows.filter(value => value.releaseDate === year);

    const sortedViews = showsOfYear.sort((a,b) => a.views - b.views);

    return sortedViews;

    if (sortedViews.length <=10){
        return sortedViews
    } else {
        return sortedViews.slice(0,10)
    }
}

getMostViewedShowsOfGenre(genre,shows) {

    const showsOfGenre = shows.filter(value => value.genre === genre);

    const sortedByViews = showsOfGenre.sort((a,b) => a.views - b.views);

    return sortedByViews;


    if (sortedByViews.length <=10){
        return sortedByViews
    } else {
        return sortedByViews.slice(0,10)
    }
}

}