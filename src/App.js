// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses  from './components/IncomeExpenses';

import './App.css';
import Transactionlist from './components/Transactionlist';
import Addnewtransaction from './components/Addnewtransaction';
function App() {
  return (
    <div>
     <Header/> 
     <Balance/>
     <IncomeExpenses/>  
     <Transactionlist/> 
     <Addnewtransaction/>
    </div>
  );
}

export default App;
