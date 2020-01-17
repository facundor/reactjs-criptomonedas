import React from 'react';

function Quotation({coinInfo}) {

  if (Object.keys(coinInfo).length === 0) return null;

  return (
    < div className="resultado">
      <p>El precio es: <span>{coinInfo.PRICE}</span></p>
      <p>El precio mas alto del día: <span>{coinInfo.HIGHDAY}</span></p>
      <p>El precio mas bajo del día: <span>{coinInfo.LOWDAY}</span></p>
      <p>Variación últimas 24hs: <span>{coinInfo.CHANGEPCT24HOUR}</span></p>
      <p>Ultima Actualización: <span>{coinInfo.LASTUPDATE}</span></p>
    </div>
  );
}

export default Quotation;