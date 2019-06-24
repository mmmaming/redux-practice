import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
class Filter extends Component {

  click = (value) => () => {
    const { setFilter } = this.props;
    setFilter(value);
  }

  render() {
    return (
      <div>
        <button onClick={this.click('all')}>所有</button>
        <button onClick={this.click('completed')}>已完成</button>
        <button onClick={this.click('incomplete')}>未完成</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setFilter
}

export default connect(null, mapDispatchToProps)(Filter);
