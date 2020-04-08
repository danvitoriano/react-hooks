import React, { useContext } from "react"
import { FinanceContext } from '../store'
export default () => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useContext(FinanceContext)
    const sendRequest = async () => {
        const payload = await fetch("https://evening-badlands-20922.herokuapp.com/financas/semana")
            .then(res => res.json())
            .then(res => {
                const payload = res.map(finance => {
                    finance.data = new Date(finance.data)
                    return finance
                })
                return payload
            })
        dispatch({
            type: "SET_IMPORTS",
            payload
        })
    }
    return (
        <div className="py-3">
            <button onClick={sendRequest}>Importar</button>
        </div>
    )
}