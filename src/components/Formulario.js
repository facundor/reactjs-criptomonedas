import React,{useState, useEffect} from 'react';
import Coin from './Coin';
import CriptoService from '../services/CriptoService'
import Error from './Error';

function Formulario({saveCoinType, saveMoneyType}) {

  const [coins, setCoin] = useState([]);
  const [moneyType, setMoneyType] = useState('');
  const [coinType, setCoinType] = useState('');
  const [error, setError] = useState(false);

  useEffect (()=>{
    const criptoService = new CriptoService('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=15&tsym=USD');
    const coins = criptoService.getCoins();

    coins.then( (value) => {
      setCoin(value)
    }, (reason) => {
      console.error(reason);
    });

  },[]);

  const criptoCotize = (e) =>{
    e.preventDefault();
    if(moneyType === '' || coinType === ''){
      setError(true);
      return;
    }

    setError(false);

    saveCoinType(coinType);
    saveMoneyType(moneyType);
  }

  //mostrar error en caso de que exista
  const errorComponent = (error ? <Error msg="Debe seleccionar ambas monedas"/> : null);

  return (
    <form onSubmit={criptoCotize}>
      {errorComponent} 

      <div className="row">
        <label>Elije tu Moneda</label>
        <select className="u-full-width" onChange={ e => setMoneyType(e.target.value)}>
          <option value="">- Elije tu Moneda -</option>
          <option value="USD">Dolar</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libra</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
      <div className="row">
          <label>Elije tu Criptomoneda</label>
          <select className="u-full-width" onChange={ e => setCoinType(e.target.value)}>
            <option value="">- Elije tu Criptomoneda -</option>
            {coins.map( coin => (
              <Coin key={coin.CoinInfo.Id} coin={coin}/>
            )) }
          </select>
      </div>

      <input type="submit" className="button-primary u-full-width"/>
    </form>
  );
}

export default Formulario;