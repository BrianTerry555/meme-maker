import React from "react";

class Meme extends React.Component {
  render() {
    return (
      <div className="img-wrap" style={{backgroundImage: `url(${this.props.url})`}}>
        <p className="top">{this.props.top}</p>
        <p className="bottom">{this.props.bottom}</p>
      </div>
    )
  }
}

export default Meme;
