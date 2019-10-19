import React, { useState } from "react";
import "./App.css";
import { MHeader } from "./components/MHeader";
import { MTabs } from "./components/MTabs";
import { Goods } from "./routes/Goods";
import { RatingPage } from "./routes/RatingPage";
import { Seller } from "./routes/Seller";

const PREFIX_KEYS = {
  component: "__component__"
};
/*缓存组件*/
const components: Map<string, JSX.Element> = new Map();

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
    const currentKey: string = PREFIX_KEYS.component + index;
    if (components.has(currentKey)) {
      return components.get(currentKey);
    } else {
      if (index === 0) {
        components.set(currentKey, <Goods />);
        return <Goods />;
      }
      if (index === 1) {
        components.set(currentKey, <RatingPage />);
        return <RatingPage />;
      }
      if (index === 2) {
        components.set(currentKey, <Seller />);
        return <Seller />;
      }
    }
  }

  function rebuild(index: number) {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <MHeader />
      </header>
      <div className="tabs">
        <MTabs currentIndex={currentIndex} currentIndexChange={rebuild} />
      </div>
      <div className="content">{buildContent(currentIndex)}</div>
    </div>
  );
};

export default App;
