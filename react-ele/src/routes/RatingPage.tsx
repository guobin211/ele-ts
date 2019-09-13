import React from "react";

export class RatingPage extends React.Component {

  componentDidMount(): void {
    console.log('RatingPage componentDidMount')
  }

  componentWillUnmount(): void {
    console.log('RatingPage componentWillUnmount')
  }

  render() {
    return (
        <div>
          <h1>Ratings</h1>
        </div>
    );
  }
}
