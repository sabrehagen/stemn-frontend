import React, { Component } from 'react';
import { Link } from 'react-router';

// Components
import Tabs from 'app/renderer/main/components/Tabs/Tabs'
import Header from 'app/renderer/main/modules/Header/Header.jsx'

// Styles
import classNames from 'classnames';
import pageStyles from './ProjectPage.css'

export default class extends React.Component{
  componentWillMount() {
    this.props.ProjectsActions.getProject({projectId: this.props.params.stub});
    this.props.ProjectActions.setActiveProject({stub: this.props.params.stub});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.stub !== this.props.params.stub) {
      this.props.ProjectsActions.getProject({projectId: nextProps.params.stub});
      this.props.ProjectActions.setActiveProject({stub: nextProps.params.stub});
    }
  }
  render() {
    const baseLink = `project/${this.props.project && this.props.project.data ? this.props.project.data._id : ''}`
    return (
      <div className="layout-column flex rel-box">
        <Header>
          <h1 className={pageStyles.title}>{this.props.project.data ? this.props.project.data.name : ''}</h1>
        </Header>
        <Tabs size="lg">
          <Link activeClassName="active" to={baseLink+'/changes'}>Changes</Link>
          <Link activeClassName="active" to={baseLink+'/feed'}>Timeline</Link>
          <Link activeClassName="active" to={baseLink+'/tasks'}>Tasks</Link>
          <Link activeClassName="active" to={baseLink+'/settings/general'}>Settings</Link>
        </Tabs>
        <div className="layout-column flex rel-box">{this.props.children}</div>
      </div>
    );
  }
};

//          <Link activeClassName="active" to={baseLink+'/tasks'}>Tasks</Link>
