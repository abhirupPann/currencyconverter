import React from 'react'
import useCurrencyinfo from './hooks/useCurrencyinfo'
function App2() {
    const currencyInfo = useCurrencyinfo("usd")
  return (
    <div>
      <p>{currencyInfo}</p>
    </div>
  )
}

export default App2
