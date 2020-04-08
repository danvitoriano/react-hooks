import React from 'react'
import useForm from "../hooks/useForm"

export default () => {
    const [{ values, loading }, handleChange, handleSubmit] = useForm()
    const enviarContato = () => console.log(values)

    return (
        <div id="finance-form">
            <form onSubmit={handleSubmit(enviarContato)}>
                <div className="form-group">
                    <label htmlFor="item">Item</label>
                    <input onChange={handleChange} type="text" name="item" className="form-control" placeholder="Item" required />
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input onChange={handleChange} type="date" name="data" className="form-control" required />
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input onChange={handleChange} type="number" name="quantidade" className="form-control" min="1" step="1" required />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="valor">Valor</label>
                        <input onChange={handleChange} type="number" name="valor" className="form-control" min="1.00" step="0.10" required />
                    </div>
                </div>
                <button type="submit" name="Enviar" id="" className="btn btn-primary">{loading ? "Enviando..." : "Enviar"}</button>
            </form>
        </div>
    )

}
