import React, { Component } from 'react'

import classNames from 'classnames'
import classes from './ProjectOverview.css'

import { projectRoute, fileRoute, projectFolderRoute } from 'route-actions'

import moment from 'moment'

import FileList from 'stemn-shared/misc/FileList/FileList'
import Readme from 'stemn-shared/misc/Files/Readme/Readme.jsx'
import { Container, Row, Col } from 'stemn-shared/misc/Layout'
import Button from 'stemn-shared/misc/Buttons/Button/Button'
import Tag from 'stemn-shared/misc/Tags/Tag'
import LikeButton from 'stemn-shared/misc/Likes/LikeButton'
import SubSubHeader from 'modules/SubSubHeader'
import Link from 'stemn-shared/misc/Router/Link'


import MdLocationOn from 'react-icons/md/location-on'
import MdPeople from 'react-icons/md/people'
import MdAccount from 'react-icons/md/account-balance'
import MdAccessTime from 'react-icons/md/access-time'

export default class ProjectOverview extends Component {
  clickFileOrFolder = ({ file }) => {
    const { fileId, revisionId } = file
    const { pushRoute } = this.props
    const projectId = this.props.project.data._id

    if(file.type == 'file'){
      pushRoute(fileRoute({fileId, projectId, revisionId}))
    }
    else if(file.type == 'folder'){
      pushRoute(projectFolderRoute({fileId, projectId}))
    }
    else if(projectId){
      pushRoute(projectRoute({projectId}))
    }
  }

  render() {
    const { entityModel, project, path, files, isFilePage } = this.props
    const options = {
      showMenu: true
    }
    if(project && project.data && project.data._id){
      

      const infoBoxes = (
        <Col className={ classNames(project.data.picture ? 'flex flex-gt-xs-33' : 'flex') }>
          <div className={ classNames(project.data.picture ? 'layout-column' : 'layout-xs-column layout-gt-xs-row', classes.infoBoxes)}>
            <div className='flex'>
              <MdAccessTime />
              Updated { moment(project.data.updated).fromNow() }
            </div>
            <div className='flex'>
              <MdPeople />
              { project.data.team.length === 1
              ? `${project.data.team.length} team member`
              : `${project.data.team.length} team members` }
            </div>
            <div className='flex'>
              <MdLocationOn />
              Sydney Australia
            </div>
            <div className='flex'>
              <MdAccount />
              Creative Commons
            </div>
          </div>
        </Col>
      )
      
      const imageBlock = (
        <Col className="flex">
          <div 
            style={ { backgroundImage: `url(${GLOBAL_ENV.API_SERVER}${project.data.picture})`} }
            className={ classes.image  }
          />
        </Col>
      )
      
      const imageInfoSection = (
        <Row className="layout-xs-column layout-gt-xs-row" style={ { marginBottom: '30px' } } >
          { project.data.picture ? imageBlock : null }
          { infoBoxes }
        </Row>
      )

      return (
        <div>
          <SubSubHeader>
            { project.data.blurb.length > 0
            ? <div className={ classes.blurb }>{ project.data.blurb }</div>
            : null }
            <div className='layout-row layout-align-start-center'>
              <div className={ classes.tags }>
                { project.data.fields.map((field) => (
                  <Link key={ field._id } name="fieldRoute" params={{ fieldId: field.stub }}>
                    <Tag className="primary" text={ field.name } />
                  </Link>
                ))}
              </div>
              <div className="flex" />
              <LikeButton
                number={ project.data.likes }
                entityType='project'
                entityId={ project.data._id }
              />
            </div>
          </SubSubHeader>
          <Container style={ { marginTop: '30px' } }>
            { !isFilePage 
            ? imageInfoSection 
            : null }
            <FileList
              className={classNames(classes.files)}
              projectId={project.data._id}
              path={path || ''}
              singleClickFn={this.clickFileOrFolder}
              doubleClickFn={this.clickFileOrFolder}
              crumbClickFn={this.clickFileOrFolder}
              options={options}
              crumbPopup={true}
            />
            { files && files.entries
            ? <Readme
                className={classes.readme}
                files={ files.entries }
              />
            : <div className="text-center text-grey-3" style={{marginTop: '30px'}}>
                Add a README.md file to this folder to help others understand what is inside.
              </div>
            }
          </Container>
        </div>
      )
    }
    else{
      return null
    }
  }
}
