import { useEffect, useState } from "react";
import { getAPI } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

//tomamos el valor ingresado en el landingPage
export function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    //Si hay una busqueda pasamos la ruta de la api con el search del input
    //Agregamos el &page + page en la url parwa llamar la nueva pag por la api
    const searchUrl = search ? '/search/movie?query=' + search + '&page=' + page
    //de lo contrario ... 
    : '/discover/movie?page=' + page; 
    getAPI(searchUrl).then((data) => {
      //concatenamos una funcion prevMovies para mantener la pagina anterior juntos con la nueva
      setMovies((prevMovies) => prevMovies.concat(data.results));
      //si la pagina es menor a las paginasTotales se ejecuta
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);


  //Si no estan cargadas y hay 0
  if(!isLoading && movies.length === 0){
    return <Empty />
  }

  // //spinner para la carga
  // //Lo comento por que ahora se lo paso al loader del infiniteScroll
  // if(isLoading){
  //   return <Spinner />;
  // }

  return (
    <InfiniteScroll 
      dataLength={movies.length} 
      //le pasamos un hasMore definido arriba, solo se ejecutara cuando la pagina sea menor a las totales
      hasMore={hasMore} 
      //setPage aumenta en 1, es decir cambia la pagina por la siguiente
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}