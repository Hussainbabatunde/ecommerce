import React, {createContext, useContext, useReducer } from 'react';

//the data layer
export const StateContext = createContext();

//build provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//where it is used inside a component
export const useStateValue = () => useContext(StateContext);