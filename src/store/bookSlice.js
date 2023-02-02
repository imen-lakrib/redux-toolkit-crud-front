import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const getBooks = createAsyncThunk('book/getBooks', async(args, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try {
        const res= await fetch("http://localhost:3009/books")
        const data= await res.json()
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
        
    }
})

const bookSlice = createSlice({
    name:"book",
    initialState: {books: null, isLoading: false, isError: false},
    extraReducers: {
        [getBooks.pending]: (state, action)=>{
            state.isLoading = true
            state.isError = false
        },
        [getBooks.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.books= action.payload
            state.isError = false
        },
        [getBooks.rejected]: (state, action)=>{
            state.isLoading = false
            state.isError = action.payload

        }
    }
})

export default bookSlice.reducer