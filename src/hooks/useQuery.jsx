import { useLocation } from "react-router";
//Le pasamos una busqueda con useLocation.search y
//El query parsea la locacion para usarla
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}