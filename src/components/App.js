// App.js
import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Update filteredTransactions whenever transactions change
    setFilteredTransactions(transactions);
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (query) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <Search onSearch={handleSearch} /> {/* Include the Search component */}
      <AccountContainer transactions={filteredTransactions} />
    </div>
  );
}

export default App;
