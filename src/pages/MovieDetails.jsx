import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getAPI} from '../utils/httpClient';
import { Spinner } from '../components/Spinner';

import styles from './MovieDetails.module.css';
import { getMovieImg } from '../utils/getMovieImg';

export function MovieDetails(){
    const { movieId } = useParams();
    const [ isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    //se dispara cuando se actualiza el movieID
    useEffect(()=>{
        getAPI("/movie/" + movieId).then((data) => {
            setMovie(data);
            //Si carga la api no se muestra el spinner
            setIsLoading(false);
        });
    },[movieId]);

    //spinner para la carga
    if(isLoading){
        return <Spinner />;
    }

    //Si no cambia el movie, no retorna nada
    if(!movie){
        return null;
    }

    const imgURL = getMovieImg(movie.poster_path, 500)
    return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imgURL} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title: </strong> {movie.title}
            </p>
            <p>
                <strong>Genres: </strong>
                {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description: </strong> {movie.overview}
            </p>
        </div>
    </div>
    )
}