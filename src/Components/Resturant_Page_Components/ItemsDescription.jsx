import { FaShoppingCart } from "react-icons/fa";
import Button from "../ButtonComponents/Button";


function ItemsDescription({ item }) {
  return (
    <>
       <div className="item-description">
         <div className="item-description-left">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">Price: ${item.price}</p>
              <p className="item-description-text">{item.description}</p>
              <Button type={"Add-To-Cart"} icon={<FaShoppingCart />}  item={item}/>
             
         </div>
         <div className="item-description-right">
             <img src={item.image} alt={item.name} className="item-image" />
         </div>
       </div>
    </>
  );
}

export default ItemsDescription;