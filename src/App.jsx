import { useState } from 'react'
import useCurrency from './Hooks/useCurrency'
import InputBox from './component/InputBox'

function App() {
  const [to, setto] = useState('to')
  const [from, setfrom] = useState('eur')
  const [amount, setamount] = useState(0)
  const [convertedamount, setconvertedamount] = useState(0)


  const Currencyinfo = useCurrency(from)
  const option = Object.keys(Currencyinfo)

  console.log(from)

  const swap = () => {
        setfrom(to)
        setto(from)
  }

  const convert = () => {
    setconvertedamount(amount * Currencyinfo[to])
  }

  return (
    <div style={{
      backgroundImage: "URL(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert()
      }}>
        <div style={{
          width: '700px',
          height: '400px',
          border: '5px black solid',
          borderRadius: '20px',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'10px',
        }}>
          <h1 style={{
            width:'300px',
            color:'white',
            backgroundColor:'red',
            textAlign:'center',
            border:'1px black solid'
          }}>Currency Conveter</h1>
          <InputBox
            label="from"
            currencyoptions={option}
            currencyvalue={from}
            onamountchange={(amount) => setamount(amount)}
            oncurrencychange={(Currency) => { setfrom(Currency) }}>
          </InputBox>
          <button style={{
            width:'150px',
            padding:'10px',
            backgroundColor:'blue',
            color:'white',
            borderRadius:'50%'
          }} 
          onClick={swap}>Swap</button>
          <InputBox
            label="to"
            currencyoptions={option}
            currencyvalue={to}
            amount={convertedamount}
            oncurrencychange={(Currency) => { setto(Currency) }}>
          </InputBox>
          <button
          style={{
            width:'500px',
            padding:'5px',
            color:'white',
            backgroundColor:'blue'
          }}
          type='submit'>convert</button>
        </div>
      </form>
      
    </div>
  )
}

export default App
