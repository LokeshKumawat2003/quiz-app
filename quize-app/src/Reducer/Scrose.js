import { createSlice } from "@reduxjs/toolkit";

export const seroseSlice=createSlice({
    name:'scro',
    initialState:{
        total:null
    },
    reducers:{
count:(state,action)=>{
state.total=action.payload
console.log(state.total,"454545")
}
    }
})
export const {count}=seroseSlice.actions;
export default seroseSlice.reducer