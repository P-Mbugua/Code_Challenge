import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://code-challenge-ikle.onrender.com/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  const handleDeleteTransaction = (id) => {
    // Send a DELETE request to the server to delete the transaction
    fetch(`https://code-challenge-ikle.onrender.com/transactions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Update the transactions list after successful deletion
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Actions</h3> {/* New column for actions */}
          </th>
        </tr>
        {/* Render a list of <Transaction> components here */}
        {transactions &&
          transactions.map((trans) => (
            <tr key={trans.id}>
              <td>
                <p>{trans.date}</p>
              </td>
              <td>
                <p>{trans.description}</p>
              </td>
              <td>
                <p>{trans.category}</p>
              </td>
              <td>
                <p>{trans.amount}</p>
              </td>
              <td>
                <button onClick={() => handleDeleteTransaction(trans.id)}>Delete</button> {/* Delete button */}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
