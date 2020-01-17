import React from "react";

function Coin({ coin }) {
  const { FullName, Name } = coin.CoinInfo;
  return <option value={Name}>{FullName}</option>;
}

export default Coin;
