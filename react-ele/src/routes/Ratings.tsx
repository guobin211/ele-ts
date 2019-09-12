import React from "react";

export class Ratings extends React.Component {

  componentDidMount(): void {
    console.log('Ratings componentDidMount')
  }

  componentWillUnmount(): void {
    console.log('Ratings componentWillUnmount')
  }

  render() {
    return (
        <div>
          <h1>Ratings</h1>
        </div>
    );
  }
}
