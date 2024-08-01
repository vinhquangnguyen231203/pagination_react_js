import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    status: 'idle',
    error: null,
    totalPage: 100,
}

// API
const url = "https://66a4471a44aa63704583b1e0.mockapi.io/Product"


export const getProductThunk = createAsyncThunk('products/thunk/getProduct', async(page) => {
    const res = await axios({
        method: 'get',
        url: `${url}?page=${page}&&limit=5`
    })
    return res.data
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.payload.error.message
            })

    }
})

export default productSlice.reducer
