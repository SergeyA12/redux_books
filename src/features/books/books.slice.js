import { createSlice, current } from "@reduxjs/toolkit"
import { addBook, getBook, getBooks } from "./books.api"

const initialState = {
    list:[],
    current:null
}

const BookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(getBooks.fulfilled, (state, action)=>{
            state.list = action.payload
            
        })
        .addCase(getBook.fulfilled, (state,action)=>{
            state.current = action.payload
            
        })
        // .addCase(addBook.fulfilled, (state, action)=>{
        //     state.current = action.payload
        // })
    }
})

export const bookReducer = BookSlice.reducer