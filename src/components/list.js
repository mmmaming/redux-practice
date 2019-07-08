import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
class List extends Component {



  render() {
    return (
      <div>
        {
          this.props.list.map(q => {
            return <div key={q}>{q}</div>
          })
        }
      </div>
    )
  }
}

const mapDispatchToProps = {
  setFilter
}



const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.list
  }
}
export default connect(mapStateToProps)(List);
