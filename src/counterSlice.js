import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState : { count: 0},  //need  to be assign in array or object only then i can chnge the values
    reducers : {
        increment : (state)=>{
            state.count++
        },
        decrement : (state)=>{
            state.count--
        },
        reset : (state)=>{
          return{
            ...state,count:0 //directly giving state.count:0 is illegal and can cause bug
          }
        },
        incrementByAmount : (state,action)=>{
             state.count += +action.payload
        }
    }
})

export const { increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer