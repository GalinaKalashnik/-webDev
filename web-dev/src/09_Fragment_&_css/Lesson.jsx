import React, {Fragment} from 'react';

// //первый вариант возвращать 2 элемента без обертки Array
// const Columns = () => ([
//     <td key='1'>Привет</td>,
//     <td key='2'>Мир</td>
// ])

//второй вариант возвращать 2 элемента без обертки Fragment
const Columns = () => (
    <Fragment>
        <td>Привет</td>
        <td>Мир</td>
    </Fragment>
)

const Table09 = () => (
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
)

export default Table09;

