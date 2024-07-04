import {useEffect, useState} from "react";
import axios from "axios";

const useRequestRecettes = () => {
    const [recettes, setRecettes] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        let cancel = false;
        (
            async () => {
                try {
                    const {data} = await axios.get(`http://localhost:3000/scrap`,{params: {keyword: searchValue}});
                    if(!cancel)
                        setRecettes(data)

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
        setSearchValue
    }
}

export default useRequestRecettes;