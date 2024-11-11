"use client";
import { useState, useEffect } from "react";

export default function CoinMarket() {
  const API_KEY = "16702b5b2cb79bdae764ff2c77bc1542";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-slate-800 font-bold text-2xl m-4">Cryptocurrency & their Rates</h1>
      <div className="text-lg font-bold text-white w-1/4 h-fit bg-slate-500 rounded-lg p-4 absolute top-[20%] left-[38%]">
        <pre>
          <p>BTC    :   {data?.rates?.BTC}</p>
          <p>BNB    :   {data?.rates?.BNB}</p>
          <p>ABC    :   {data?.rates?.ABC}</p>
          <p>ACP    :   {data?.rates?.ACP}</p>
          <p>ACT    :   {data?.rates?.ACT}</p>
          <p>ADA    :   {data?.rates?.ADA}</p>
          <p>FUN    :   {data?.rates?.FUN}</p>
          <p>FUNC    :   {data?.rates?.FUNC}</p>
          <p>FLP    :   {data?.rates?.FLP}</p>
          <p>TKY    :   {data?.rates?.TKY}</p>
          <p>TNB    :   {data?.rates?.TNB}</p>
          <p>TRX    :   {data?.rates?.TRX}</p>
          <p>VEN    :   {data?.rates?.VEN}</p>
          <p>UQC    :   {data?.rates?.UQC}</p>
        </pre>
      </div>
    </div>
  );
}