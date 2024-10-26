import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk("comments/get", async (id)=>{
    const response = await axios.get('http://localhost:3004/comments?book=' + id)
    return response.data
})

export const addComment = createAsyncThunk("comments", async(newComment)=>{
    const response = await axios.post('http://localhost:3004/comments', newComment)
    return response.data
})