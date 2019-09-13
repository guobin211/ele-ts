import React from "react";
import './Dialog.css';
import { Ratings, Size } from "./ratings/Ratings";

export interface DialogProps {
  onClose: (b: boolean) => void;
}

export class Dialog extends React.Component<DialogProps> {
  score = 4.5;
  size: Size = 48;
  render() {
    return (
        <div className="full">
          <div className="dialog-warp">
            <div className="main">
              <h1>星级评价</h1>
             <Ratings score={this.score} size={this.size}/>
            </div>
          </div>
          <div className="close">
            <i className="icon-close" onClick={e => this.props.onClose(false)}/>
          </div>
        </div>
    );
  }
}
