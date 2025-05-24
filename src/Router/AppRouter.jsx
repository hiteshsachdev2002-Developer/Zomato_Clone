import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Error from '../Components/ErrorComponents/Error';
import Dinning from '../Components/Dinning_Page_Components/Dinning';
import Delivery from '../Components/Delivery_Page_Components/Delivery';
import NightLife from '../Components/NightLife_Page_Components/NightLife';
import Main from '../Components/MainComponents/Main';
import ResturantPage from '../Components/Resturant_Page_Components/ResturantPage';
import CartPage from '../Components/Cart_Components/CartPage';

const AppRouter = createBrowserRouter(
    [
      {
        path:"/",
        element:<App/>,
        children:[
          {
           path:"/",
           element:<Main/>,
  
  
          },
          {
            path:"/Dining",
            element:<Dinning/>,
           
          },
          {
            path:"/Delivery",
            element:<Delivery/>,
            
          },
          {
            path:"/NightLife",
            element:<NightLife/>,
            
          },
          {
            path:"/Dining/Resturant/:id",
            element:<ResturantPage/>,
          },
          {
            path:"/Cart",
            element:<CartPage/>,
          }
  
        ],
        errorElement:<Error/>
      },
      
    
    ]
  )


  export default AppRouter
