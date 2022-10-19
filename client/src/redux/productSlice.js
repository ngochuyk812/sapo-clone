import { createSlice } from "@reduxjs/toolkit";

function check_arr(element, arr){
    let count = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i].codeProduct === element.codeProduct)  {
            count ++;
            break
        }
    }
    return (count >0) ? true : false
}
const productState = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
    addProduct(state, action) {
        const item = action.payload;
        if(!check_arr(item,state)){
            state.push(item)
        }
        
    },
    removeProduct(state, action) {
    state.splice(action.payload, 1)
    }
    }
    });
    
    const { actions, reducer } = productState;
    export const { addProduct, removeProduct } = actions;
    export default reducer;