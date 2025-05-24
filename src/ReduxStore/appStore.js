import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";

const appStore = configureStore({
   reducer:{
        // add the slices here
         cart:cartSlice,
        
   }
})

export default appStore;