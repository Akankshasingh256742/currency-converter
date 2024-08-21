import React from 'react'

function InputBox({
    label,
    onamountchange,
    oncurrencychange,
    amount,
    currencyoptions = [],
    currencyvalue = 'usd'
}) {

    
    return (
        <div
            style={{
                width: '500px',
                backgroundColor: 'white',
                border: '1px grey solid',
                borderRadius: '10px',
                display: 'flex',
                gap: '100px'
            }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                paddingLeft: '20px',
                paddingTop: '15px'
            }}>
                <label
                    style={{
                        fontSize: '1.2rem'
                    }}
                    htmlFor="">{label}</label>
                <input
                    style={{
                        width: '200px'
                    }}
                    type="Number"
                    placeholder='Number'
                    value={amount}
                    onChange={(e) => { onamountchange(Number(e.target.value)) }} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px',
            }}>
                <p style={{
                }}>Currency Type</p>
                <select
                    style={{
                        padding: '4px'
                    }}
                    onChange={(e) => { oncurrencychange && oncurrencychange(e.target.value) }}
                    value={currencyvalue}
                    name=""
                    id="">
                    {currencyoptions.map((Currency) => (
                        <option key={Currency} value={Currency}>{Currency}</option>
                    ))}

                </select>
            </div>
        </div>
    )
}

export default InputBox