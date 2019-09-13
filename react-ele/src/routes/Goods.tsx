import React, { ReactNode } from "react";
import BScroll from '@better-scroll/core'
import './goods.styl';
import { FoodVM, getGoodsData, GoodsVM } from "../store/store";

export interface GoodsState {
  goods: GoodsVM[];
  listHeight: number[];
  scrollY: number;
  selectedFood: FoodVM;
  currentIndex: number;
}

const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

export class Goods extends React.Component {

  state: GoodsState = {
    goods: [],
    listHeight: [],
    scrollY: 0,
    selectedFood: {} as FoodVM,
    currentIndex: 0,
  };

  menuWrapper: HTMLDivElement = {} as HTMLDivElement;
  foodsWrapper: HTMLDivElement = {} as HTMLDivElement;
  foodList: HTMLElement[] = [];
  menuList: HTMLElement[] =[];

  meunScroll!: BScroll;
  foodsScroll!: BScroll;

  /**
   * 计算容器高度区间
   * @private
   */
  private _calculateHeight() {
    let foodList: any[] = this.foodList as any;
    let height = 0;
    const listHeight = [];
    listHeight.push(height);
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i];
      height += item.clientHeight;
      listHeight.push(height);
    }
    this.setState({
      listHeight: listHeight
    })
  }

  /**
   * 初始化scroll
   * @private
   */
  private _initScroll() {
    this.meunScroll = new BScroll(this.menuWrapper, {
      click: true
    });

    this.foodsScroll = new BScroll(this.foodsWrapper, {
      click: true,
      probeType: 3
    });

    this.foodsScroll.on('scroll', (pos: any) => {
      // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
      if (pos.y <= 0) {
        this.setState({
          scrollY: Math.abs(Math.round(pos.y))
        });
        this._computeCurrentIndex();
      }
    });
  }

  /**
   * 菜单跟随滚动
   * @param index
   * @private
   */
  private _followScroll(index: number) {
    let menuList = this.menuList;
    let el = menuList[index];
    this.meunScroll.scrollToElement(el, 300, 0, -100);
  }

  /**
   * 计算滚动菜单位置
   * @private
   */
  private _computeCurrentIndex(): void {
    for (let i = 0; i < this.state.listHeight.length; i++) {
      let height1 = this.state.listHeight[i];
      let height2 = this.state.listHeight[i + 1];
      if (!height2 || (this.state.scrollY >= height1 && this.state.scrollY < height2)) {
        this.setState({
          currentIndex: i
        });
        this._followScroll(i);
        return;
      }
    }
    this.setState({
      currentIndex: 0
    });
  }

  componentDidMount(): void {
    getGoodsData().then((res: GoodsVM[]) => {
      this.setState({
        goods: res
      });
      this._calculateHeight();
      this._initScroll();
    })
  }

  /**
   * 菜单点击事件
   * @param index
   * @param e
   */
  onMenuClick(index: number, e: any) {
    this.setState({
      currentIndex: index
    });
    const el = this.foodList[index];
    this.foodsScroll.scrollToElement(el, 300);
  }

  /**
   * 侧边菜单
   */
  buildMenuList(): ReactNode {
    return (
        this.state.goods.map((item, index) => {
          const _activeClass = index === this.state.currentIndex ? 'current' : '';
          const _className = `menu-item ${_activeClass}`;
          const _iconClass = `icon ${classMap[item.type]}`;
          return (
              <li className={_className} key={index} onClick={e => this.onMenuClick(index, e)} ref={ml => this.menuList[index] = ml!}>
                  <span className="text border-1px">
                    {item.type > 0 ? <span className={_iconClass}/> : null}
                    {item.name}
                  </span>
              </li>
          )
        })
    );
  }

  /**
   * Food列的详细内容
   * @param goods
   */
  buildFoodItem(goods: GoodsVM): ReactNode {
    return (
        goods.foods.map((food, index) => {
          return (
              <li key={index} className="food-item border-1px">
                <div className="icon">
                  <img width="57" height="57" src={food.icon} alt=""/>
                </div>
                <div className="content">
                  <h2 className="name">{food.name}</h2>
                  <p className="desc">{food.description}</p>
                  <div className="extra">
                    <span className="count">月售{food.sellCount}份</span><span>好评率{food.rating}%</span>
                  </div>
                  <div className="price">
                    <span className="now">￥{food.price}</span>
                    {food.oldPrice ? <span className="old">￥{food.oldPrice}</span> : null}
                  </div>
                  <div className="cartcontrol-wrapper">
                    购物
                  </div>
                </div>
              </li>
          )
        })
    )
  }

  /**
   * 右侧Food列
   */
  buildFoodList(): ReactNode {
    return (
        this.state.goods.map((item, index) => {
          return (
              <li key={index} ref={fl => this.foodList[index] = fl!}>
                <h1 className="title">{item.name}</h1>
                <ul>
                  {this.buildFoodItem(item)}
                </ul>
              </li>
          )
        })
    )
  }

  render(): ReactNode {
    return (
        <div className="goods">
          <div className="scroll-nav-wrapper">
            <div className="menu-wrapper" ref={div => this.menuWrapper = div!}>
              <ul>
                {this.buildMenuList()}
              </ul>
            </div>
            <div className="foods-wrapper" ref={div => this.foodsWrapper = div!}>
              <ul>
                {this.buildFoodList()}
              </ul>
            </div>
          </div>
          <div className="shop-cart-wrapper">
            <ul>
              <li>购物车</li>
            </ul>
          </div>
        </div>
    );
  }
}
