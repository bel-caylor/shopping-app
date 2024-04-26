import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
        <div className='container'>
            <h1 className='mt-3'>Shopping App</h1>
            <div className='d-flex flex-row flex-grow-1 gap-4'>
                <CartValue />
                <Location />
            </div>
            <h2>Shopping Cart</h2>
            <ExpenseList />
            <h2>Add Items Cart</h2>
            <ItemSelected />
        </div>
    </AppProvider>
  );
}

export default App;
