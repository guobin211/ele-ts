import React from "react";

export class Seller extends React.Component {

  componentDidMount(): void {
    console.log('Seller componentDidMount')
  }

  componentWillUnmount(): void {
    console.log('Seller componentWillUnmount')
  }

  render() {
    return (
        <div>
          <h1>Seller</h1>
        </div>
    );
  }
}
