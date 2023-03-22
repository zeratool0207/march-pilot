// [3/21 version]
// import { createStore } from 'redux';

// const counterReducer = ( state = { counter: 250 }, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1
//         }
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// export default store;

//import { createStore } from 'redux';

// [3/22 version]

// import { configureStore ,createSlice } from '@reduxjs/toolkit'

// const initialState = { counter: 0, test:'123', showCounter: true}

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         },
//         save(state, action) {
//             state.test = action.payload;
//         }
//     }
// })

// const store = configureStore({
//     reducer: counterSlice.reducer
// })

// export const counterActions = counterSlice.actions;

// export default store;


import { configureStore ,createSlice } from '@reduxjs/toolkit'

const initialState = { value1: 'val1', value2: 'val2', value3: 'val3' }

const universalSlice = createSlice({
    name: 'univ',
    initialState,
    reducers: {
        save(state, action) {
            state.value1 = action.payload[0];
            state.value2 = action.payload[1];
            state.value3 = action.payload[2];
        }
    }
})

const store = configureStore({
    reducer: universalSlice.reducer
})

export const universalActions = universalSlice.actions;

export default store;

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         },
//         save(state, action) {
//             state.test = action.payload;
//         }
//     }
// })

// const store = configureStore({
//     reducer: counterSlice.reducer
// })

// export const counterActions = counterSlice.actions;

// export default store;


