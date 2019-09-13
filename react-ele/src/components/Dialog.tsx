import React from "react";
import './Dialog.css';

export interface DialogProps {
  onClose: (b: boolean) => void;
}

export class Dialog extends React.Component<DialogProps> {

  render() {
    return (
        <div className="full">
          <div className="dialog-warp">
            <div className="main">
              <h1>main</h1>
              <h1>main</h1>
            </div>
          </div>
          <div className="close">
            <i className="icon-close" onClick={e => this.props.onClose(false)}/>
          </div>
        </div>
    );
  }
}
