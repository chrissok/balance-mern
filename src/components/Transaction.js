import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div>
        <li className={sign === '-' ? 'minus': 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
          <button onClick={ () => deleteTransaction(transaction._id)} class="delete-btn">x</button>
        </li>
        </div>
    )
}
