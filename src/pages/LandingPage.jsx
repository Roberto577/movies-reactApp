import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    //Aca nos traemos el parametro de la url
    const query = useQuery();
    const search = query.get("search");
    //usamos el debounce con milisegundos
    const debouncedSearch = useDebounce(search, 800)

    return <div>
        <Search/>
        {/* al darle una clave a la etiqueta resetea los estados cuando se ejecuta el search */}
        {/* search={search} le pasamos el search a traves de una props */}
        <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div> 
}