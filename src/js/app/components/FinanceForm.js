import React, { useContext, useState } from 'react'
import { FinanceContext } from '../store'
import { textoParaData } from '../helpers/DateHelper'

export default () => {
    const item = useFormInput("")
    const data = useFormInput("")
    const quantidade = useFormInput("")
    const valor = useFormInput("")
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useContext(FinanceContext)

    const onSubmit = event => {
        event.preventDefault()
        dispatch({
            type: "ADD_FINANCE",
            payload: { item: item.value, data: textoParaData(data.value), quantidade: quantidade.value, valor: valor.value }
        })
    }

    return (
        <div id="finance-form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="item">Item</label>
                    <input {...item} type="text" name="item" className="form-control" placeholder="Item" required autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input {...data} type="date" name="data" className="form-control" required />
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input {...quantidade} type="number" name="quantidade" className="form-control" min="1" step="1" required />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="valor">Valor</label>
                        <input {...valor} type="number" name="valor" className="form-control" min="1.00" step="0.10" required />
                    </div>
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )

}


function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange
    }
}