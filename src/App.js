import React,{useState, useEffect} from "react";

import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import CriptoService from './services/CriptoService'
import Quotation from "./components/Quotation";

function App() {

  const [moneyType, saveMoneyType] = useState('');
  const [coinType, saveCoinType] = useState('');
  const [coinInfo, saveCoinInfo] = useState('')

  useEffect(()=>{

    if(coinType === '' || moneyType === ''){
      return;
    }

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinType}&tsyms=${moneyType}`
    const critpoService =  new CriptoService();
    const coinDetail =  critpoService.getCoinPrice(url);

    coinDetail.then((value) => {
      saveCoinInfo(value.data.DISPLAY[coinType][moneyType])
    }, (reason) => {
      console.error(reason);
    });
 
  },[moneyType,coinType])

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomonedas" className="logtipo" />
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al Instante</h1>
          <Formulario saveMoneyType={saveMoneyType} saveCoinType={saveCoinType} />

          <Quotation coinInfo={coinInfo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
