import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ENDPOINT = "http://localhost:3000";

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const transactionsData = await axios.get(`${ENDPOINT}/transactions`);
        console.log({transactionsData})
        setTransactions(transactionsData.data.data);
    }

    useEffect(() => {
        if (transactions.length === 0) {
            fetchTransactions();
        }
    }, [transactions]);


    return (
        <div>
            Transactions<br></br>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Transaction Date</th>
                        <th>Transaction Name</th>
                        <th>Transaction Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((transaction, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{transaction.transactionDate}</td>
                                    <td>{transaction.transactionName}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.currency ? "L " : "$" }</td>
                                </tr>
                            );
                        })
                    ) : null}
                </tbody>
            </table>
        </div>

    )
}

export default Transactions