import React from 'react';

class TileOption extends React.Component {
  render() {
    return (
      <div className='tile-option'>
        <div>
          <p>Current Tile Type: <span>{this.props.currentTileType}</span></p>
          <div className={this.props.tileType}></div>
        </div>
        {this.props.optionList()}
        <p>Left click to update tile.</p>
      </div>
    )
  }
}

export default TileOption;