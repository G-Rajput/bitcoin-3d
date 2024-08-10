import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
<div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        caption.current.innerText = scroll.current.toFixed(2);
      }}
      className="scroll">
      <div style={{ height: '400vh' }}>
        <div className="dot">
          <h1>Improve your digital <span className="highlight">coin</span> experience &amp; <span className="highlight">easy exchanges</span> with EasyCoin.</h1>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot right">
          <h1>What is Bitcoin?</h1>
          <h3>Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer Bitcoin network without the need for intermediaries.</h3>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>How to Buy Bitcoin</h1>
          <h3>Buying Bitcoin is simple. You can purchase it through exchanges like Coinbase, Binance, or Kraken. Make sure to secure your investment by using a trusted wallet.</h3>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot right">
          <h1>Bitcoin Wallets</h1>
          <h3>Bitcoin wallets come in various forms including hardware, software, and paper wallets. Choose the one that best fits your needs to safely store your Bitcoin.</h3>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>Bitcoin Mining</h1>
          <h3>Mining is the process of adding transaction records to Bitcoin's public ledger of past transactions or blockchain. It's performed using powerful computers solving complex problems.</h3>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot right">
          <h1>Understanding Bitcoin Price Movements</h1>
          <h3>Bitcoin prices are influenced by various factors including supply and demand, investor behavior, market sentiment, and geopolitical events. Stay updated to make informed decisions.</h3>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>Bitcoin Trading Strategies</h1>
          <h3>There are multiple trading strategies such as spot trading, futures trading, and options trading. Learn about technical analysis and risk management to enhance your trading skills.</h3>
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>Bitcoin and Regulation</h1>
          <h3>Bitcoin is regulated differently across countries. Understanding these regulations is crucial for compliance and making informed investment decisions.</h3>
        </div>
      </div>
      {/* <span className="caption" ref={caption}>
        0.00
      </span> */}
    </div>

))

export default Overlay
