import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // name of the slice 
    name:"cart",
  // inital state of the slice 
   initialState:{
      cartItems:[]
   },
   // reducers of the slice
    reducers:{
        addItem:(state,action)=>
        {
            state.cartItems.push(action.payload)
        },
        removeItem:(state,action)=>
        {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.cartItems.splice(index, 1);
            }
        },
        CleanCart:(state)=>
            {
                state.cartItems.length = 0;
            } 
    }

})

// exporting the actions and reducer of the slice
export const {addItem,removeItem,CleanCart} = cartSlice.actions;
export default cartSlice.reducer;