import React, { Component } from 'react';
import { connect } from 'react-redux';

  class Counter extends Component {
    render() {
      return(
        <div>
          <h2> Counter </h2>
          <div>
            <button onClick={this.props.decrement}> - </button>
            <span>{this.props.count}</span>
            <button onClick={this.props.increment}> + </button>
          </div>
        </div>
      );
    }
  }

  // Can move this to "Container" to keep Counter clean
 
  function mapStateToProps(state){
    return {
      count: state.count
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      increment : () => dispatch({type: 'INCREMENT'}),
      decrement : () => dispatch({type: 'DECREMENT'})
    } 
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Counter);