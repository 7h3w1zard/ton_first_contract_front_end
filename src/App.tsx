// import { useState } from 'react'
// import React from 'react';
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useMainContract } from './hooks/useMainContract';
import { useTonConnect } from './hooks/useTonConnect';
import { fromNano } from 'ton-core';

function App() {
  const {
    contract_address,
    contract_balance,
    counter_value,
    // owner_address,
    // recent_sender,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest,
  } = useMainContract();

  const { connected } = useTonConnect();

  return (
    <>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className="Card">
          <b>Contract address: </b>
          <div className='Hint'>{contract_address?.slice(0, 30) + '...'}</div>
          <b>Contract balance: </b>
          {contract_balance && <div className='Hint'>{fromNano(contract_balance)}</div>}
        </div>

        <div className="Card">
          <b>Counter value: </b>
          <div>{counter_value ?? 'Loading...'}</div>
        </div>

        {connected && (
            <a onClick={() => {
              sendIncrement()
            }}>
              Increment by 1
            </a>
          )}

        <br />

        {connected && (
            <a onClick={() => {
              sendDeposit()
            }}>
              Request deposit of 1 TON
            </a>
          )}

        <br />

        {connected && (
            <a onClick={() => {
              sendWithdrawalRequest()
            }}>
              Request 0.7 TON withdrawal
            </a>
          )}


      </div>
    </>
  )
}

export default App





{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}
