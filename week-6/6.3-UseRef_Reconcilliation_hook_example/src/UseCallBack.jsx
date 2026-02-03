import { useEffect, useState, memo, useCallback } from 'react';

function UseCallBack() {
  const [exchange1Data, setExchange1Data] = useState({ returns: 0 });
  const [exchange2Data, setExchange2Data] = useState({ returns: 0 });
  const [bankData, setBankData] = useState({ income: 0 });

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

//   const calculateCryptoReturns = () => {
//     return exchange1Data.returns + exchange2Data.returns;
//   };

const calculateCryptoReturns = useCallback(function() {
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data]);

  return (
    <div>
      <CryptoGainCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}

const CryptoGainCalculator = memo(function ({ calculateCryptoReturns }) {
  console.log("crypto -child-re-render");
  return (
    <div>
      Your crypto returns are {calculateCryptoReturns()}
    </div>
  );
});

export default UseCallBack;
