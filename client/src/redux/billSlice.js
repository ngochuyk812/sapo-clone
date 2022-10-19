import { createSlice } from "@reduxjs/toolkit";

const checkCodeProduct = (arr, item )=>{
    let rs = false;
    for(let i =0 ; i< arr.length; i++){
        if(arr[i].codeProduct === item.codeProduct){
            console.log("Trung");
            const amount = arr[i].amount
            arr[i].amount = amount +1;
            rs = true
            break
        }
        
    }
    if(rs === false){
        console.log(rs);
        arr.push(item)
    }
    return arr
}
const bill = createSlice({
    name: 'bill',
    initialState: {},
    reducers: {
    addItemCustomer(state, action) {
        const item = action.payload;
        const obj = state || {};
        obj.customer = item || {};
        return obj
            
        
    },
    removeItemCustomer(state) {
        const obj = state || {};
        obj.customer = null
            return obj
            
        
    },
    addItemProduct(state, action){
        let item = action.payload || {};
        let newItem = {
            ...item,
            amount : 1
        }
        let obj = state || {};
        let arrProduct = obj.product || []
        let newArr = checkCodeProduct(arrProduct, newItem)
        obj.product = newArr || [];
        return obj
    },
    addTags(state, action){
        let newItem = action.payload ;
       console.log("dad", newItem);
        let obj = state || {};
        let arrTags = obj.tags || []
        arrTags.push(newItem)
        obj.tags = arrTags || [];
        return obj
    },
    removeTags(state, action) {
        let obj = state || {};
        let arrTags = obj.tags || [];
        let newArr = [...arrTags];
        newArr.splice(action.payload, 1);
        obj.tags = newArr;
        return obj;
            
        
    },
    setNote(state, action) {
        let obj = state || {};
        
        obj.note = action.payload;
        return obj;
            
        
    },
    setDelivery(state, action) {
        let obj = state || {};
        
        obj.delivery = action.payload;
        return obj;
            
        
    }
    }} );
    
    const { actions, reducer } = bill;
    export const { addItemCustomer,removeItemCustomer, addItemProduct, addTags, removeTags, setNote, setDelivery } = actions;
    export default reducer;