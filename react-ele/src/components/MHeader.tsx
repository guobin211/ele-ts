import React, { CSSProperties } from "react";
import { getSellerData, SellerVM } from "../store/store";
import "./MHeader.css";
import { Dialog } from "./Dialog";

interface MHeaderState {
  seller: SellerVM;
  showDialog: boolean;
}

const headerWarp: CSSProperties = {
  background: "rgba(7,17,27,0.5)",
  color: "#fff"
};

export class MHeader extends React.Component {
  state: MHeaderState = { showDialog: false } as MHeaderState;

  showDialog(): CSSProperties {
    return {
      display: this.state.showDialog ? "block" : "none"
    };
  }

  toggleDialog() {
    this.setState({
      showDialog: !this.state.showDialog
    });
  }

  handleClose(b: boolean) {
    this.setState({
      showDialog: false
    });
  }

  componentDidMount(): void {
    getSellerData().then(res =>
      this.setState({
        seller: res
      })
    );
  }

  render() {
    return (
      <div className="col-flex" style={headerWarp}>
        <img
          src={this.state.seller ? this.state.seller.avatar : ""}
          className="bg-img"
          alt=""
        />
        <div className="detail-btn" onClick={this.toggleDialog.bind(this)}>
          5个
        </div>
        <div className="dialog" style={this.showDialog()}>
          <Dialog onClose={this.handleClose.bind(this)} />
        </div>
        <div className="image-warp">
          <div className="left">
            <img
              className="avatar"
              src={this.state.seller ? this.state.seller.avatar : ""}
              alt=""
            />
          </div>
          <div className="right">
            <div className="title">
              <span className="title-icon" />
              <span>{this.state.seller ? this.state.seller.name : ""}</span>
            </div>
            <div className="send">
              {this.state.seller
                ? `${this.state.seller.description} / ${this.state.seller.deliveryTime}分钟送达`
                : ""}
            </div>
            <div className="message">
              <span className="support" />
              {this.state.seller
                ? `${this.state.seller.supports[0].description}`
                : ""}
            </div>
          </div>
        </div>
        <div className="banner-warp">
          <span className="bullet" />
          <span className="inline-text">
            {this.state.seller ? `${this.state.seller.bulletin}` : ""}
          </span>
        </div>
      </div>
    );
  }
}
