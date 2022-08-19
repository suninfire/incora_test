import {useState} from "react";
import {useForm} from "react-hook-form";

import {genres} from "../arrays/Arrays";
import Show from "../entities/Show";
import {StreamingService} from "../entities";
import {User} from "../entities";
import Subscription from "../entities/Subscription";


const ApplicationPage = () => {

        const {register,handleSubmit} = useForm();

        const [subscriptions,setSubscriptions] = useState([]);

        const [disabled, setDisabled] = useState(false);

        const [view,setView] = useState(0);

        const show1 = new Show('show1',genres[2],'2022',view);
        const show2 = new Show('show2',genres[4],'2019',view);
        const show3 = new Show('show3',genres[2],'2020',view);
        const show4 = new Show('show4',genres[4],'2022',view);

        const [shows,setShows] = useState([show1,show2,show3,show4]);


        const [genre,setGenre]=useState({});

        const [year,setYear]=useState({});

        const [showsByGenre,setShowsByGenre] = useState([]);

        const [showByGenre,setShowByGenre] = useState([]);

        const [showsByYear,setShowsByYear] = useState([]);

        const [showByYear,setShowByYear] = useState([]);

        const streamingService1 = new StreamingService('service-1', shows);

    const count = () => {
            const res = view+1
        setView(()=>res);
    }

      const submit = (data) =>{
      const res = StreamingService.prototype.addShow(data,shows);
       return setShows(()=>res);

    }

    return (
        <div >

            <h2>user subscriptions:</h2>  <h3>{subscriptions}</h3>
            <hr/>

            <h2>streaming services:</h2>
            <h3>
           <div>
               {streamingService1.name}
               <button disabled={disabled} onClick={()=>setSubscriptions(User.prototype.subscribe(subscriptions,streamingService1))+setDisabled(true)}>subscribe</button>
           </div>
            </h3>

            <hr/>
            <hr/>


            <h2>Shows:</h2>



            {shows?.map(show =>
                <h3>{show.name+'___'+show.genre+'___'+show.releaseDate+'___'+view+'   '}
                    <button onClick={count}>watch</button>
                </h3>
            )}

            <hr/>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} defaultValue={'show1'} {...register('name')}/>
                <select defaultValue={'Drama'}{...register('genre')}>
                    <option value='Action'>Action</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Drama'>Drama</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Horror'>Horror</option>
                    <option value='Thriller'>Thriller</option>
                    <option value='Mystery'>Mystery</option>
                    <option value='Romance'>Romance</option>
                </select>
                <input type="text" placeholder={'release date (year)'} defaultValue={'2022'} {...register('releaseDate')}/>
                <select {...register('views')}><option value={Number(0)}>0</option></select>
                <button>{'add show'}</button>
            </form>

            <hr/>

            <form onSubmit={handleSubmit(()=>setShowsByGenre(StreamingService.prototype.getMostViewedShowsOfGenre(genre,shows)))}>
                <label>
                    get most viewed shows of genre:
                    <select id={'sgenre'} value={genre}
                            onChange={(event => setGenre(event.target.value))}>
                        <option value='Action'>Action</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Drama'>Drama</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Horror'>Horror</option>
                        <option value='Thriller'>Thriller</option>
                        <option value='Mystery'>Mystery</option>
                        <option value='Romance'>Romance</option>
                    </select>
                </label>
                <input type={"submit"} value={'get shows'}/>
            </form>


            {showsByGenre?.map(show =>
                <h3>{show.name+'___'+show.genre+'___'+show.releaseDate+'___'+view+'   '}
                    <button onClick={count}>watch</button>
                </h3>
            )}

            <hr/>

            <button onClick={()=>setShowByGenre(Subscription.prototype.getRecommendationByGenre('Drama',shows))}>get one recommendation by genre</button>

            <h3>{'   '+showByGenre.name+'___'+showByGenre.genre+'___'+showByGenre.releaseDate+'___'+view+'   '}</h3>

            <hr/>

            <form onSubmit={handleSubmit(()=>setShowsByYear(StreamingService.prototype.getMostViewedShowsOfYear(year,shows)))}>
                <label>
                    get most viewed shows of year:
                    <select id={'year'} value={year}
                            onChange={(event => setYear(event.target.value))}>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </label>
                <input type={"submit"} value={'get shows'}/>
            </form>

            {showsByYear?.map(show =>
                <h3>{show.name+'___'+show.genre+'___'+show.releaseDate+'___'+view+'   '}
                    <button onClick={count}>watch</button>
                </h3>
            )}

            <hr/>

            <h3><button onClick={()=>setShowByYear(Subscription.prototype.getRecommendationTrending('2022',shows))}>get one recommendation trending</button></h3>

            <h3>{'   '+showByYear?.name+'___'+showByYear?.genre+'___'+showByYear?.releaseDate+'___'+view+'   '}</h3>

        </div>
    );
}

export {ApplicationPage};