import React, { CSSProperties } from "react";

const listWarp: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  verticalAlign: "middle",
  justifyContent: "space-between",
  width: "100%",
  borderBottom: "1px solid rgba(7,17,27,0.1)"
};

const listItem: CSSProperties = {
  textAlign: "center",
  width: "100%",
  height: "100%",
  cursor: "pointer"
};

const listSpan: CSSProperties = {
  height: "40px",
  lineHeight: "40px"
};

export interface TabProps {
  currentIndex: number;
  currentIndexChange?: (i: number) => void;
}

export interface TabState {
  currentIndex?: number;
}

/**
 * React Class 组件
 * 适合复杂的Props和State
 */
export class MTabs extends React.Component<TabProps> {

  state: TabState = {};

  tabsData = [
    {text: '商品', path: 'goods', id: 0},
    {text: '评价', path: 'ratings', id: 1},
    {text: '商家', path: 'seller', id: 2},
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      currentIndex: props.currentIndex
    };
  }

  buildListItem(): any {
    return this.tabsData.map((el: any) =>
        <div style={listItem}
             onClick={(e) => this.onTabClick(el, e)}
             className={this.isActive(el)} key={el.id}>
          <span style={listSpan}>{el.text}</span>
        </div>)
  }

  isActive(el: any): string {
    if (this.state.currentIndex === el.id) {
      return 'active'
    } else {
      return ''
    }
  }

  onTabClick(item: any, e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      currentIndex: item.id
    });
    if (this.props.currentIndexChange) {
      this.props.currentIndexChange(item.id)
    }
    this.render();
  }

  render() {
    return (
        <div style={listWarp}>
          {this.buildListItem()}
        </div>
    );
  }
}
