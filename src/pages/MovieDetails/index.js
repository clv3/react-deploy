import { useParams } from "react-router-dom";
import MovieData from "../../components/MovieData";
import useFetch from "../../components/UseFetch";
import './styles.scss';

const MovieDetails = () => {
    const {id} = useParams();
    const {data: movie, isPending, error} = useFetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=f65bcf9b927ed1509f15aedff2b0187f&append_to_response=videos,release_dates,credits");

    return (
        <div className="movie_content">
        <div className="movie-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {movie && <MovieData movie={movie} />}
        </div>
        </div>
    );
}
 
export default MovieDetails;