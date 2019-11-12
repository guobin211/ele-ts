import React from "react";

export interface RatingPageProps {
  name: string;
  rating: number;
}

interface RatingPageState {
  visitor: number;
}

export class RatingPage extends React.Component<RatingPageProps, RatingPageState> {
  state: RatingPageState = {
    visitor: 0
  };

  constructor(props: any) {
    super(props);
    console.log(props);
    console.log(this.state);
  }

  componentWillMount(): void {
    console.log("componentWillMount");
  }

  componentDidMount(): void {
    console.log("RatingPage componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<RatingPageProps>,
    nextState: Readonly<RatingPageState>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(
    prevProps: Readonly<RatingPageProps>,
    prevState: Readonly<RatingPageState>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>Ratings</h1>
        <p>访问人数: {this.state.visitor}</p>
        <p>Name: {this.props.name}</p>
        <p>Rating: {this.props.rating}</p>
      </div>
    );
  }
}
