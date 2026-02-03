import { useEffect, useMemo, useState } from 'react';

function Usememo() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Simulating fetching data for exchange1
    setExchange1Data({ returns: 100 });
  }, []);

  useEffect(() => {
    // Simulating fetching data for exchange2
    setExchange2Data({ returns: 100 });
  }, []);

  useEffect(() => {
    // Simulating fetching bank data after a delay
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 5000);
  }, []);

  // useMemo to compute total crypto returns
  const cryptoReturns = useMemo(() => {
    return (exchange1Data.returns || 0) + (exchange2Data.returns || 0);
  }, [exchange1Data, exchange2Data]);

  // Compute income tax based on cryptoReturns and bank income
//   console.log("hi there before");
//   const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
//   console.log("hi there after");
  const incomeTax = (cryptoReturns + (bankData.income || 0)) * 0.3;

  return (
    <div>
      <h2>Crypto Returns: {cryptoReturns}</h2>
      <h2>Bank Income: {bankData.income || 0}</h2>
      <h2>Income Tax: {incomeTax}</h2>
    </div>
  );
}

export default Usememo;
