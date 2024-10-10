"use client"
import { useState } from 'react'

type ButtonValue = string | 'C';

export default function Home() {

  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
  
  const handleButtonClick = (value: ButtonValue) => {
    if (value === '=') {
      if (expression.trim() === '') {
        setResult('');
      } else {
        try {
          setResult(eval(expression).toString());
        } catch (error) {
          setResult('Error');
        }
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else if (value === '<--') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '<--',
  ];


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>

      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full mb-2 text-3xl font-bold border-b-2  focus:outline-none px-2 text-red-500"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-3xl mb-4 focus:outline-none px-2 text-red-500 " 
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-xl bg-[#374151] hover:bg-gray-400 p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}
