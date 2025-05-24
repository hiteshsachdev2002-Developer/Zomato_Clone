import React, { useState,useEffect} from 'react';
import  Card from "./Card.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Header.css';
import  ShimmerCard from '../ShimmerUI_Components/ShimmerCard.jsx';
import { FaAngleLeft } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

function Search()
{
    let [allItems, setAllItems] = useState([]); 
    let [FilteredListItems , setFilteredListItems] = useState([]);
    let [searchText , setSearchText] = useState("");
    const [page, setPage] = useState(0);
    const limit = 4;
    
    
    useEffect(()=>{
        getFoodDataList();
       },[]);

   async function  getFoodDataList()
   {
        let foodItemsList = await  fetch("https://6804cb2d79cb28fb3f5bd735.mockapi.io/SwiggyApi?");
        foodItemsList = await foodItemsList.json();
        setAllItems(foodItemsList);
        setFilteredListItems(foodItemsList);
   }

    function topRatedItems()
    {
        FilteredListItems=allItems.filter((foodItem)=>
        {
            return foodItem.ratings>5
        })
        setFilteredListItems(FilteredListItems);
        setPage(0);
    }
    function searchedElement(event)
    {
        setSearchText(event.target.value);
        FilteredListItems=allItems.filter((foodItem)=>
        {
            return foodItem.name.toLowerCase().includes(searchText.toLowerCase())
        })
        if(FilteredListItems.length===0)
        {
            toast.error("No Food Item Found", {
                position: "top-right",
                autoClose: 3000,
            });
        }

        setFilteredListItems(FilteredListItems);
        setPage(0);
    }
    // Pagination logic
    const startIndex = page * limit;
    const paginatedItems = FilteredListItems.slice(startIndex, startIndex + limit);
    const totalPages = Math.ceil(FilteredListItems.length / limit);


    function handlePrev() {
        setPage((prev) => Math.max(prev - 1, 0));
    }

    function handleNext() {
        setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
    }



 return allItems.length===0 ? (<div className='shimmer-style'><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/></div>): (
        <>
           <div className='search-container'>
              <div className='search-bar'>
                    
               <div className="left-section">
                 <button className='rated-button' onClick={topRatedItems}>TOP Rated Food Item</button>
               </div>
                
               <div className="right-section">
                    <input type="text" placeholder='Search...' className='search-input' value={searchText} onChange={searchedElement} />
                   
                </div>        
              </div>
              
           </div>
           <div className='pagination-buttons'>
              <button onClick={handlePrev} style={{ display: page === 0 ? 'none' : 'flex' }}  className="scroll-btn left"><FaAngleLeft />   </button>
               <div className='main-card'>
                   {
                     paginatedItems.map((foodItem)=>(
                    <Card key={foodItem.id} foodData={foodItem}/>
                   ))
                    }
                </div>
                 <button onClick={handleNext} style={{ display: page + 1 >= totalPages ? 'none' : 'flex' }} className="scroll-btn right"><MdKeyboardArrowRight /></button>
            </div>

                <ToastContainer/>
        </>
    )
}


export default Search;