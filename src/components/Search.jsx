import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery';

export function Search() {
    
    //Aca nos traemos el parametro de la url
    const query = useQuery();
    const search = query.get("search");

    // // se borra por que ya no se usa, por el cambio del debounce en el search
    // const [searchText, setSearchText] = useState("");

    // useHistory Nos permite modificar la url
    const history = useHistory();

    // //si hay un cambio en el search cambia el texto del input por el de la url
    // //se borra por el debounce
    // useEffect(() => {
    //     setSearchText(search || "");
    // }, [search]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        // // se borra por el debounce
        // history.push("/?search=" + searchText);
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                
                <input className={styles.searchInput} 
                    type="text" 
                    // El valor de este input lo tendra el stateText
                    value={search}
                    placeholder="Title"
                    //indicar para que es el input como el alt
                    aria-label="Search Movies"
                    // por cada cambio en el input cambia el estado, lo cambia por el nuevo valor
                    onChange={(e) => {
                        //Agregamos dos funciones al onChance
                        const value = e.target.value;
                        // // se borra por el debounce
                        // setSearchText(value);
                        //cambia la url y la busqueda (APLICAMOS EL DEBOUNCE)
                        history.push("/?search=" + value);
                    }}
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch sieze={20} />
                </button>
            </div>
        </form>
    )
}
