import {useEffect, useState} from "react";
import axios from "axios";

const useRequestRecette = () => {
    const [recette, setRecette] = useState(null)
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let cancel = false;
        (
            async () => {
                try {
                    await setLoading(true)
                    const {data} = await axios.get(`http://localhost:3000/recettes/${searchValue}`);
                    if (!cancel) {
                        setRecette(data)
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
        recette,
        setSearchValue,
        loading
    }
}

export default useRequestRecette;