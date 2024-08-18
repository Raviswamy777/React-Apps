import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  
  const options = Object.keys(currencyInfo);
  // console.log(options);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swapValue = to;
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1327569515/photo/financial-investment-concept-stack-of-coins-for-finance-investor-with-trading-graph-growth.jpg?s=2048x2048&w=is&k=20&c=4i2cUB8QkRuRoDwUH0f0VhpGLfFOoB3p2t2MsrGW2kI=")`,
        }}
      >
        {/* <h1 className="text-white">Coin Converter</h1> */}
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                  <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                    Swap
                  </button>
                </div>
              <div className="w-full mb-1">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurency={to}
                  amountDisabled
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounde-lg">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
