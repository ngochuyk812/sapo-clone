import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk(
    'todo/fetchList', 
    async (userId) => {
       const response = await fetchById(userId)
       return response.data
    });

const bill = createSlice({
    name: 'login',
    initialState: { user: [], loading: 'idle' },
    reducers: {
    
    },
    extraReducers: {
      [fetchLogin.pending]: (state, action) => {
        state.loading = 'pending'
      },
      [fetchLogin.fulfilled]: (state, action) => {
       state.loading = 'success';
        state.todos.push(action.payload)
      },
      [fetchLogin.rejected]: (state, action) => {
          state.loading = 'error'
          state.error = action.error
      }
    }
  })
  
    
    const { actions, reducer } = bill;
    export const { addItemCustomer,removeItemCustomer, addItemProduct, addTags, removeTags, setNote, setDelivery } = actions;
    export default reducer;