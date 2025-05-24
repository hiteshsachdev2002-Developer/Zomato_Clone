import React from 'react'
import TableForm from './TableForm.jsx'
import MenuPage from './MenuPage.jsx'
import { useParams } from 'react-router'
import {useFetchById} from '../../utils/CoustomHooks/useFetch.jsx'

function ResturantPage()
{
    
    const {id} = useParams();
    const IndividualResturant = useFetchById(id);
    console.log(IndividualResturant);

    
    return(
        <>
        <div className='resturant-Page'>
           <div className='resturant-Page-Content'>
           <h1>{IndividualResturant.HOTEL_NAME}</h1>
           <div className='resturant-address'>
                 <p>{IndividualResturant.ADDRESS}</p>
             </div>
           </div>
            <div className='resturant-page-offers'>
                <div className='resturant-special-dinning-offer'>
                  <div className='resturant-special-dinning-offer-left'>
                     <div className='special-offer-heading'>
                        <h1>Special Offers</h1>
                     </div>
                     <div className='special-offer-cards'>
                        <div className="golden-card">
                          <div>PRE-BOOK OFFER</div>
                          <div>Flat 30% OFF</div>
                          <div>{IndividualResturant.DINNING_OFFERS?.Happy_Hours}</div>
                          <div>{IndividualResturant.DINNING_OFFERS?.Buffet_Deal}</div>
                        </div>
                     </div>
                     </div>
                     <div className='resturant-special-dinning-offer-right'>
                        <TableForm/>
                     </div>

                </div>
            </div>
            <div className='resturant-page-menu'>
              <div className='resturant-menu-heading'>
                <h3>Menu</h3>
              </div>    
              <div>
              {
                 IndividualResturant?.itemCards?.map((itemCard)=>
                 {
                    return(
                         <div sx={{marginBottom: 5, marginTop: 5}} key={itemCard.type}>
                           <MenuPage itemCard={itemCard}/> 
                           </div>
                    )
                 })
              }
               </div>
            </div>
        </div>
        </>
    )
}

export default ResturantPage;