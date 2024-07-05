import {useEffect, useState} from "react";
import axios from "axios";

const useRequestRecettes = () => {
    const [recettes, setRecettes] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let cancel = false;
        (
            async () => {
                try {
                    await setLoading(true)
                    const {data} = await axios.get(`${import.meta.env.VITE_URL_API}/scrap`,{params: {keyword: searchValue}});
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


    const addFav = async (recipe) => {
        try {
            await axios.post(`${import.meta.env.VITE_URL_API}/recettes/`,recipe);
            alert(`${recipe.name} ajouté aux favoris`);
        } catch
            (e) {
            console.error(e)
        }
    }

    return {
        recettes,
        setSearchValue,
        loading,
        addFav
    }
}

export default useRequestRecettes;