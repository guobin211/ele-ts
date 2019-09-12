import React, { useState } from 'react';
import './App.css';
import { MHeader } from "./components/MHeader";
import { MTabs } from "./components/MTabs";
import { Goods } from "./routes/Goods";
import { Ratings } from "./routes/Ratings";
import { Seller } from "./routes/Seller";

/**
 * FunctionComponent
 * 函数组件适合简单的state
 * @constructor
 */
const App: React.FC = () => {

  /**
   * 使用useState初始化State和Dispatch
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  function buildContent(index: number): any {
    if (index === 0) {
      return <Goods/>;
    }
    if (index === 1) {
      return <Ratings/>;
    }
    if (index === 2) {
      return <Seller/>;
    }
  }

  function rebuild(index: number) {
    if (index !== currentIndex) {
      setCurrentIndex(index)
    }
  }

  return (
      <div className="App">
        <header className="App-header">
          <MHeader/>
        </header>
        <div className="tabs">
          <MTabs currentIndex={currentIndex} currentIndexChange={rebuild}/>
        </div>
        <div className="content">
          {buildContent(currentIndex)}
        </div>
      </div>
  );
};

export default App;
