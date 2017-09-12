import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function havayiReducer(state, action){
    if (state === undefined){
        return state;
    }

    switch (action.type){

    }
}

const createStore = (...reducers) => {
    let store = {},
        listeners = [];

    const getState = () => {
        return store;
    };

    const dispatch = (action) => {
        reducers.forEach((reducer) => {
            store[reducer.name] = reducer(store[reducer.name],action);
        });
        listeners.forEach((listener) => {
            listener(store);
        });
    };

    const subscribe = (callback) => {
        listeners.push(callback);
        return () => listeners = listeners.filter((listener)=>{return listener !== callback});
    };

    dispatch({}); // wtf....

    return {
        getState,
        dispatch,
        subscribe
    }
};

const initialStateForFirstReducer = {
    value: 0
};


//firstreducer renamed counter
function counter(state, action) {
    if (state === undefined){
        return initialStateForFirstReducer
    }

    switch(action.type){
        case "INCREMENT":
            return Object.assign({},state, {value: state.value + 1});
        default:
            return state;
    }
}

// using default in state\
function secondReducer(state = {value: 0}, action) {
    if (state === undefined){
        return {};
    }

    switch(action.type){
        case "MULTIPLY":
            return Object.assign({},state, {value: state.value * action.payload});
        default:
            return state;
    }
}


let store = createStore(counter,secondReducer);


setInterval(() => {
    store.dispatch({
        type: 'INCREMENT'
    })
},2000);


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
