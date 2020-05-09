/**
 * We can use Component.Fragment instead of Aux
 * import React, { Component, Fragment } from 'react';
 */
import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

/**
 * Thanks to webpack we can actually import css files into js
 * .css extension is needed. We can only omit it in .js files
 */
import classes from './Person.css';
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  /**
   * componetDidMount() executes after render()
   */
  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
        {/** 
         * Children refers to any elements (also plain text) between opening and closing tag of our component. 
         * It could be unordered list. It could be even any other React component 
        */}
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);