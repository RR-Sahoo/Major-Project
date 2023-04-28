import React, { useState } from "react";

const EmiCalculator = (props) => {
  const [interest, setInterest] = useState();
  const [tenure, setTenure] = useState();
  const [emi, setEmi] = useState();

  const calculateEmi = () => {
    const principalInput = document.getElementById("principal");
    const principalValue = principalInput ? principalInput.value : 0;
    const r = interest / 12 / 100;
    const n = tenure * 12;
    const emiValue =
      (principalValue * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">EMI Calculator</h1>
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 mb-4">
        <div className="mb-4">
          <label className="font-bold text-gray-700 mb-2" htmlFor="principal">
            Principal Amount
          </label>
          {props.principal && (
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="principal"
              type="text"
              placeholder={props.principal}
              defaultValue={props.principal}
              readOnly
            />
          )}
        </div>
        <div className="mb-4">
          <label className="font-bold text-gray-700 mb-2" htmlFor="interest">
            Interest Rate (per annum)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interest"
            type="text"
            placeholder="Enter Interest Rate"
            pattern="[0-9.]*"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-gray-700 mb-2" htmlFor="tenure">
            Tenure (in years)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tenure"
            type="text"
            pattern="[0-9]*"
            placeholder="Enter Tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
        <button
          className="hover:bg-blue-700 focus:outline-none focus:shadow-outline transform transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md bg-gray_900 cursor-pointer font-semibold sm:px-5 px-6 py-5 rounded-[10px] text-base text-center text-white_A700 w-full"
          onClick={calculateEmi}
        >
          Calculate EMI
        </button>
      </div>
      {emi > 0 && (
        <div className="bg-white shadow-lg rounded-lg px-8 py-10">
          <h2 className="font-bold text-gray-700 mb-4">EMI: Rs {emi}/Month</h2>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
