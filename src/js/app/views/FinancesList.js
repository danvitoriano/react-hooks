import React, { useContext } from 'react';
import { store } from '../store'

export default () => {

    const globalState = useContext(store);
    const { state } = globalState;

    return (
        <div id="finance-list">
            <table>
                <thead>
                    <tr>
                        <th scope="col">item</th>
                        <th scope="col">data</th>
                        <th scope="col">quantidade</th>
                        <th scope="col">valor</th>
                        <th scope="col">=</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map(
                            (f, i) =>
                                <tr key={i}>
                                    <td>{f.item}</td>
                                    <td>{f.data}</td>
                                    <td>{f.quantidade}</td>
                                    <td>{f.valor}</td>
                                    <td>=</td>
                                </tr>

                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                        <td >6</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )

}