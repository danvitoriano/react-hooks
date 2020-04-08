import React, { useReducer, createContext } from "react"
export const FinanceContext = createContext()

const initialState = {
    finances: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_IMPORTS":
            return {
                finances: [...state.finances, ...action.payload]
            }
        case "ADD_FINANCE":
            return {
                finances: [...state.finances, action.payload]
            }
        default:
            throw new Error()
    }
}

export const FinanceContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <FinanceContext.Provider value={[state, dispatch]}>
            {props.children}
        </FinanceContext.Provider>
    )
}
