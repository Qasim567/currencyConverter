import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

export default function App() {
   const [amount, setAmount] = useState(0)
   const [from, setFrom] = useState("usd")
   const [to, setTo] = useState("pkr")
   const [convertedAmount, setConvertedAmount] = useState(0)

   const currencyInfo = useCurrencyInfo(from)
   const options = Object.keys(currencyInfo)

   const swap = () =>  {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }

   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
   }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `URL('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
      }}>
        <div className='w-full max-w-md mx-auto p-5 rounded-lg border-gray-400 backdrop-blur-sm bg-white/30 text-center'>
        <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
              <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)} 
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}/>
              <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDiabled/>
              <button className='bg-blue-600 px-2 py-2 text-2xl font-semibold rounded-lg text-white'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
              </form>
        </div>
      
    </div>
  )
}
