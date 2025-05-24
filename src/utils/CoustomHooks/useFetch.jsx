import { useState, useEffect } from "react";
import axios from 'axios';
import { FETCH_BY_ID } from "../constants/ApiConstant/api"

export function useFetchById(id) {
    const [IndividualResturant, setIndividualResturant] = useState({});

    useEffect(() => {
        fetchIndividualResturant();
    }, [])

    async function fetchIndividualResturant() {
        try
        {
        let resturant = await axios.get(`${FETCH_BY_ID}${id}`);
        setIndividualResturant(resturant.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return IndividualResturant;

}

export function useFetch() {
    const [resturantList, setResturantList] = useState([]);
    // const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        fetchResturants()
    }, [])

    async function fetchResturants() {
        try{
            // setIsLoading(true)
            let resturantList = await fetch("https://68134c22129f6313e210d7ae.mockapi.io/HotelNames")
            resturantList = await resturantList.json();
            setResturantList(resturantList);
        }catch(e){
            // setError(); 
        }finally{
            // setIsLoading(false);
        }
    }

    return resturantList;

}
