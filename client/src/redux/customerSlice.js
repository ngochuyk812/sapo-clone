import { createSlice } from "@reduxjs/toolkit";

function check_arr(element, arr){
    let count = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i].mskh === element.mskh)  {
            count ++;
            break
        }
    }
    return (count >0) ? true : false
}
const arrItemsCustomer = createSlice({
    name: 'itemsCustomer',
    initialState: [],
    reducers: {
    addItemCustomer(state, action) {
        const item = action.payload;
        if(!check_arr(item,state)){
            state.push(item)
            console.log('add');
        }
        
    },
    removeItemCustomer(state, action) {
    state.splice(action.payload, 1)
    }
    }
    });
    
    const { actions, reducer } = arrItemsCustomer;
    export const { addItemCustomer, removeItemCustomer } = actions;
    export default reducer;