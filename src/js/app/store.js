import React, { createContext, useReducer, useState } from 'react';

const initialState = [];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [finances, setFinance] = useState([])
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set finance':
                setFinance(state => [...state, action.values]);
                return finances;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }