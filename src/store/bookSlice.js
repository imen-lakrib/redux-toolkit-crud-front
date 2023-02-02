import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
// get data
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
// add data
export const addBook = createAsyncThunk('book/addBook', async(bookData, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try {
        const res= await fetch("http://localhost:3009/books", {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            
        })
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
        // get data
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

        },
        // add data:
        [addBook.pending]: (state, action)=>{
            state.isLoading = true
            state.isError = false
        },
        [addBook.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.books.push(action.payload)
        },
        [addBook.rejected]: (state, action)=>{
            state.isLoading = false
            state.isError = action.payload

        }

    }
})

export default bookSlice.reducer