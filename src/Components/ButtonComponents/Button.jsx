import React from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addItem ,removeItem} from '../../ReduxStore/Slice/CartSlice';

function Button({ type,icon,item = null}) {

    const[btnType, setBtnType] = React.useState(type);
    const [iconType, setIconType] = React.useState(icon);
    const dispatch = useDispatch();

  
   function changeMode() {   

      if(btnType === "Dark") {
       setBtnType("Light");
       setIconType(<MdLightMode/>);
      }

      else if(btnType === "Light") {
         setBtnType("Dark");
         setIconType(<MdDarkMode/>);
        }
      else if(btnType === "Add-To-Cart") {
        if (item) dispatch(addItem(item));
             setBtnType("Remove-From-Cart");
             setIconType(<MdRemoveShoppingCart />);
            }
        else if(btnType === "Remove-From-Cart") {
            if (item) dispatch(removeItem(item));
                setBtnType("Add-To-Cart");
                setIconType(<FaShoppingCart/>);
        }
    }

    const labelMap = {
        "Dark": "Dark",
        "Light": "Light",
        "Add-To-Cart": "Add To Cart",
        "Remove-From-Cart": "Remove From Cart"
      };
    

    return (
        <button className={`btn-${btnType}`}  onClick={changeMode} >
            {labelMap[btnType]} {iconType}
        </button>
    );
}   

export default Button;