import { createSlice } from "@reduxjs/toolkit"
import { addComment, getComments } from "./comments.api"

const initialState = {
    items:[],
    book:null
}

const CommentSlice = createSlice({
    name:"Comments",
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
        .addCase(getComments.fulfilled, (state,action) => {
            state.items = action.payload
        })
        .addCase(addComment.fulfilled, (state,action)=>{
            state.items.push(action.payload)
        })
    }
})

export const commentReducer = CommentSlice.reducer