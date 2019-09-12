import React, { CSSProperties } from "react";
import { getSellerData, SellerVM } from "../store/store";

const headerWarp: CSSProperties = {};

interface MHeaderState {
  seller?: SellerVM;
}

export class MHeader extends React.Component {

  state: MHeaderState = {};

  componentDidMount(): void {
    getSellerData().then(res => this.setState({
      seller: res
    }));
  }

  render() {
    return (
        <div className="col-flex" style={headerWarp}>
          <div className="image-warp">
            <p>{this.state.seller ? this.state.seller.name : ''}</p>
          </div>
          <div className="banner-warp">
            <img className="bullet" alt=""/>
            <span className="inline-text">广告栏</span>
          </div>
        </div>
    );
  }
}
