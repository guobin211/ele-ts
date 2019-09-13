import React from "react";
import './Ratings.styl'

export type Size = 48 | 36 | 24;

export interface RatingsProps {
  size: Size;
  score: number;
}

const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export class Ratings extends React.Component<RatingsProps> {

  ratingGroupClass(): string {
    return `star star-${this.props.size}`
  }

  ratingItemClass(): string[] {
    const result = [];
    const score = Math.floor(this.props.score * 2) / 2;
    const hasDecimal = score % 1 !== 0;
    const integer = Math.floor(score);
    for (let i = 0; i < integer; i++) {
      result.push(CLS_ON)
    }
    if (hasDecimal) {
      result.push(CLS_HALF)
    }
    while (result.length < LENGTH) {
      result.push(CLS_OFF)
    }
    return result
  }

  buildRatings(): any {
    return this.ratingItemClass().map((s,i) => {
      const className = 'star-item ' + s;
      return (
          <span className={className} key={i}/>
      )
    })
  }

  render(): any {
    return (
        <div className={this.ratingGroupClass()}>
          {this.buildRatings()}
        </div>
    );
  }
}
