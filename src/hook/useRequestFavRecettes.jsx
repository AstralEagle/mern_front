import {useEffect, useState} from "react";
import axios from "axios";

const useRequestFavRecettes = () => {
    const [recettes, setRecettes] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let cancel = false;
        (async () => {
                try {
                    await setLoading(true)
                    let data = [];
                    if(searchValue)
                        data = (await axios.get(`${import.meta.env.VITE_URL_API}/recettes/search`,{params: {ingredients: searchValue}})).data;
                    else
                        data = (await axios.get(`${import.meta.env.VITE_URL_API}/recettes/`)).data;
                    if(!cancel){
                        setRecettes(data)
                        setLoading(false)
                    }

                } catch
                    (e) {
                    console.error(e)
                }
            }
        )
        ()
        return () => {
            cancel = true
        }
    }, [searchValue]);

    const removeFav = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_URL_API}/recettes/${id}`);
            setRecettes(x => x.filter(y => y._id !== id))
        } catch
            (e) {
            console.error(e)
        }
    }


    return {
        recettes,
        setSearchValue,
        loading,
        removeFav
    }
}

export default useRequestFavRecettes;