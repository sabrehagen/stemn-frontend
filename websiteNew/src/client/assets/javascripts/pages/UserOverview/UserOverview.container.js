import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchDataHoc from 'stemn-shared/misc/FetchDataHoc'

import { getCommitHistory } from 'stemn-shared/misc/Users/Users.actions'

import UserOverview from './UserOverview';

const stateToProps = ({ users, projects }, { params }) => ({
  user: users[params.stub],
  projects: projects.userProjects[params.stub] || {},
});

const dispatchToProps = {
  getCommitHistory
};

const fetchConfigs = [{
  hasChanged: 'params.stub',
  onChange: (props) => {
    props.getCommitHistory({ userId: props.params.stub })
  }
}];

@connect(stateToProps, dispatchToProps)
@fetchDataHoc(fetchConfigs)
export default class UserOverviewContainer extends Component {
  render() {
    return (
      <UserOverview {...this.props} />
    );
  }
}
