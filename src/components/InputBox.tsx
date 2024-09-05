import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDiabled = false,
    currencyDisabled = false,
}) {
    return (
        <div className='flex bg-white rounded-lg p-3 mb-2'>
            <div className='w-1/2 text-left'>
                <label className='text-black/40'>{label}</label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type='number'
                    placeholder='0' 
                    disabled={amountDiabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className='w-1/2 justify-end text-right'>
                <p className='text-black/40 text-xl'>Currency Type</p>
                <select className='py-1 px-1 cursor-pointer outline-none'
                disabled={currencyDisabled}
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
