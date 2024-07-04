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
                    const {data} = await axios.get(`http://localhost:3000/recettes/search`,{params: {ingredients: searchValue}});
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


    return {
        recettes,
        setSearchValue,
        loading
    }
}

export default useRequestRecettes;