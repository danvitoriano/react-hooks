import React from 'react'
import logo from './logo.svg'
import FinancesList from './js/app/components/FinancesList'
import FinanceForm from './js/app/components/FinanceForm'
import FinanceImport from './js/app/components/FinanceImport';
import { FinanceContextProvider } from "./js/app/store";

export default () => {
  return (
    <div className="container">
      <div className="py-3 text-center">
        <img src={logo} alt="logo" className="w-25 p-3" />
        <h1 className="h2 py-2">My Finances</h1>
      </div>
      <FinanceContextProvider>
        <FinanceImport />
        <FinanceForm />
        <FinancesList />
      </FinanceContextProvider>
    </div>
  )
}