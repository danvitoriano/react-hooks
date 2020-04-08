import React, { useState } from 'react';

export default () => {

    const [count, setCount] = useState(0)

    return (
        <div id="finance-list">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Data</th>
                        <th scope="col">#</th>
                        <th scope="col">$</th>
                        <th scope="col">=</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>item</td>
                        <td>data</td>
                        <td>2</td>
                        <td>2.5</td>
                        <td>5</td>
                    </tr>
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