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
    // getState allows you to access to the global state then you can get any value , it is a function so you nedd ().the value
    const {rejectWithValue, getState} = thunkAPI
    try {
        bookData.createdBy= getState().auth.name
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

// delete data
export const deleteBook = createAsyncThunk('book/deleteBook', async(data, thunkAPI)=>{
    // getState allows you to access to the global state then you can get any value , it is a function so you nedd ().the value
    const {rejectWithValue} = thunkAPI
    try {
        const res= await fetch(`http://localhost:3009/books/${data.id}`, {
            
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            
        })
        
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

        },
        // delete data:
        [deleteBook.pending]: (state, action)=>{
            state.isLoading = true
            state.isError = false
        },
        [deleteBook.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.books= state.books.filter(el=>el.id !== action.payload.id )
        },
        [deleteBook.rejected]: (state, action)=>{
            state.isLoading = false
            state.isError = action.payload

        }

    }
})

export default bookSlice.reducer