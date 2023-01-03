import { createSlice } from "@reduxjs/toolkit"; 

// const initialState = {
//   list: contactsList,
// };

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState:"",
//   initialState:{text: ""},
  reducers: {
    setValue:(state, action)=> 
        
    state=action.payload,
    
  }
});



export const {setValue } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
