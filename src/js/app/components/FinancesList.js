import React, { useContext } from "react"
import { FinanceContext } from '../store'
import { dataParaTexto } from '../helpers/DateHelper'

export default () => {
    const [state] = useContext(FinanceContext);
    const rows = state.finances.map(
        (finance, index) =>
            <tr key={index}>
                <td>{finance.item}</td>
                <td>{dataParaTexto(finance.data)}</td>
                <td>{finance.quantidade}</td>
                <td>{finance.valor}</td>
                <td>{finance.quantidade * finance.valor}</td>
            </tr>
    )
    const total = state.finances.reduce((total, item) => total + (item.quantidade * item.valor), 0.0)
    return (
        <div id="finance-list" className="py-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Data</th>
                        <th>#</th>
                        <th>$</th>
                        <th>=</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                        <td>{Math.round(total * 100) / 100}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}