import react from 'react';
import { MdOutlineLocalDining } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { MdNightlife } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import  NavBarComponent  from '../NavBarComponents/NavBarComponent';
import { useSelector } from 'react-redux';


function NavBar()
{
    const cartItems = useSelector((store)=>store.cart.cartItems);
    let cartItemsCount = cartItems.length;
    console.log(cartItemsCount);
    console.log(cartItems);
    return(
        <>
         <nav className='navbar'>
               <ul>
                    <li><NavBarComponent icon={<IoHome/>} type={"Home"} LinkTo={"/"} /></li>
                    <li><NavBarComponent icon={<MdOutlineLocalDining/>} type={"Dining Out"}  LinkTo={"/Dining"}/></li>
                    <li><NavBarComponent icon={<MdDeliveryDining/>} type={"Delivery"} LinkTo={"/Delivery"}/></li>
                    <li><NavBarComponent icon={<MdNightlife/>} type={"Night Life"} LinkTo={"/NightLife"} /></li>
                    <li><NavBarComponent icon={<FaCartShopping/>} type={cartItemsCount===0 ? `Cart`:`Cart - (${cartItemsCount})`} LinkTo={"/Cart"}  /></li>
               </ul>
           </nav>
          
        </>
    )
}

export default NavBar;