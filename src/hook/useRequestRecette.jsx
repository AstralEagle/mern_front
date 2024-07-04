import {useEffect, useState} from "react";
import axios from "axios";

const useRequestRecette = () => {
    const [recette, setRecette] = useState(null)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        let cancel = false;
        (
            async () => {
                try {
                    const {data} = await axios.get(`http://localhost:3000/recettes/${searchValue}`);
                    if(!cancel)
                        setRecette(data)

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
        setSearchValue
    }
}

export default useRequestRecette;