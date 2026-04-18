// import { legacy_createStore } from "redux";
// import { legacy_createStore as createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// const enhancer = devToolsEnhancer();

// export const store = legacy_createStore(rootReducer , enhancer);







// export const increment = createAction("myValue/increment");
// export const decrement = createAction("myValue/decrement");



// export const myReducer = createReducer(initialState, {
//     [increment]: /// ,
//     [decrement]: /// ,
// }
// });

// export const myReducer = createReducer(initialState, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state += action.payload;
//   });
// });

const initialState = { value: 100 };

const myValueSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.value += action.payload;
        },

        decrement(state , action) {
            state.value -= action.payload
        }
    }
})

export const { decrement, increment } = myValueSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});
