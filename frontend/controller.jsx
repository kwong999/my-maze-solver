import React from 'react';

const TYPE = [
  'blank',
  'wall',
  'start',
  'end'
]

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileType: this.props.tileType,
      dimensionRow: this.props.maze.dimension[0],
      dimensionCol: this.props.maze.dimension[1],
      state: 'state'
    }
    this.handleChange = this.handleChange.bind(this);
    this.fullReset = this.fullReset.bind(this);
    this.softReset = this.softReset.bind(this);
    this.handleBuildBoard = this.handleBuildBoard.bind(this);
  }

  handleChange(type) {
    return e => {
      e.preventDefault();
      this.setState({ [type]: parseInt(e.target.value) });
    }
  }

  handleBuildBoard(e) {
    e.preventDefault();
    this.props.maze.buildBoard([this.state.dimensionRow, this.state.dimensionCol]);
    this.props.renderParent();
  }

  fullReset(e) {
    console.log('fullReset');
    e.preventDefault();
    this.props.maze.fullReset();
    this.props.renderParent();
  }

  softReset(e) {
    console.log('softReset');
    e.preventDefault();
    this.props.maze.softReset();
    this.props.renderParent();
  }

  optionList() {
    return(
      TYPE.map(option => (
        <button onClick={this.props.changeTileType(option)} key={option}>
          <div>
            <p>{this.capitalize(option)}</p>
            <div className={option}></div>
          </div>
        </button>
      ))
    )
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  render() {
    console.log(this.constructor.name);
    console.log(this.state);
    const { solverFull, tileType, changeTileType } = this.props;
    const currentTileType = this.capitalize(tileType)
    return(
      <div className='controller'>
        <h2>Controller Panel</h2>
        <form className='build-board'>
          <p>Dimension</p>
          <label>
            <p>Row:</p>
            <input
              type='number'
              value={this.state.dimensionRow}
              min= '1'
              max= '20'
              onChange={this.handleChange('dimensionRow')}
            />
          </label>
          <label>
            <p>Column:</p>
            <input
              type='number'
              value={this.state.dimensionCol}
              min='1'
              max='20'
              onChange={this.handleChange('dimensionCol')}
            />
          </label>
          <button type='submit' onClick={this.handleBuildBoard}>Build Board</button>
        </form>
        <button onClick={solverFull}>Solve Full</button>
        <button onClick={this.fullReset}>Full Reset</button>
        <button onClick={this.softReset}>Soft Reset</button>
        <p>Current Tile Type: <span>{currentTileType}</span></p>
        {this.optionList()}
      </div>
    )
  }
}

export default Controller;