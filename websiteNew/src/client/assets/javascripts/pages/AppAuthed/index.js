import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';

const stateToProps = ({ auth }) => ({
  authToken: auth.authToken,
  userId: auth.user._id
});

const dispatchToProps = {
  goLogin: () => push('/login')
};

@connect(stateToProps, dispatchToProps)
export default class LoginContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.authToken || !nextProps.userId) {
      nextProps.goLogin();
    }
  }
  componentDidMount() {
    if (!this.props.authToken || !this.props.userId) {
      this.props.goLogin();
    }
  }
  render() {
    return this.props.children;
  }
}