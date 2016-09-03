// Container Core
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Container Actions
import * as SidebarTimelineActions from 'app/shared/actions/sidebarTimeline';

// Component Core
import React from 'react';

// Styles
import classNames from 'classnames';
import feedPageStyles from './ProjectFeedPage.css';

// Sub Components
import u                 from 'updeep';
import { Link }          from 'react-router';
import Popover           from 'app/renderer/assets/other/react-popup';
import Timeline          from 'app/renderer/main/modules/Timeline/Timeline.jsx';
import SidebarTimeline   from 'app/renderer/main/containers/SidebarTimeline';
import FileCompare       from 'app/renderer/main/modules/FileCompare/FileCompare.jsx';
import ContentSidebar    from 'app/renderer/main/components/ContentSidebar';
import TogglePanel       from 'app/renderer/main/components/Panels/TogglePanel/TogglePanel.jsx';
import CompareFiles      from 'app/renderer/main/components/CompareFiles/CompareFiles';
import PreviewFile       from 'app/renderer/main/containers/PreviewFile.js';
import DragResize        from 'app/renderer/main/modules/DragResize/DragResize.jsx';



/////////////////////////////////////////////////////////////////////////////
///////////////////////////////// COMPONENT /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

export const Component = React.createClass({

  componentWillMount() {
    if(this.props.project && this.props.project.remote.connected){
      this.props.TimelineActions.fetchTimeline({stub: this.props.project._id})
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.project._id !== this.props.project._id && nextProps.project.remote.connected) {
      this.props.TimelineActions.fetchTimeline({stub: nextProps.project._id})
    }
  },

  render(){
    const { timeline, project } = this.props;
    const filePrevious = timeline && timeline.selected.data && timeline.selected.data.previousRevisionId ? u( {data: {revisionId : timeline.selected.data.previousRevisionId}}, timeline.selected) : null;
    const baseLink = `project/${project ? project._id : ''}`


    const getDetailSection = () => {
      if(this.props.timeline && this.props.timeline.selected && this.props.timeline.selected.data){
        if(this.props.timeline.selected.event == 'commit'){
          return (
            <div className="layout-column flex">
              <div className={feedPageStyles.commitInfo}>
                <h3>{this.props.timeline.selected.data.summary}</h3>
                <div className={feedPageStyles.description}>{this.props.timeline.selected.data.description}</div>
                <div className="layout-row layout-align-start-center">
                  <img src={'https://stemn.com' + this.props.timeline.selected.user.picture + '?size=thumb&crop=true'} className={feedPageStyles.avatar}/>
                  <div>{this.props.timeline.selected.user.name}</div>
                </div>
              </div>
              <div className="flex scroll-box">
                {getFilesSection()}
              </div>
            </div>
          )
        }
        else{
          return(
            <FileCompare project={project} file1={timeline.selected.data} file2={filePrevious ? filePrevious.data : null}>
              {filePrevious ? <PreviewFile project={project} file={filePrevious.data} /> : ''}
              <PreviewFile project={project} file={timeline.selected.data} />
            </FileCompare>
          )
        }
      }
      else{
        return (
          <div className="layout-column layout-align-center-center flex text-title-4 text-center">No event selected.</div>
        )
      }
    }

    const getFilesSection = () => {

      if(this.props.timeline.selected.data.items){
        return this.props.timeline.selected.data.items.map((file)=>{
          const filePrevious = file.data.previousRevisionId ? u( {data: {revisionId : file.data.previousRevisionId}}, file) : null;
          return (
            <TogglePanel>
              <div className="layout-row flex layout-align-start-center">
                <div className="flex">{file.data.path}</div>
                <div>{file.data.size}</div>
              </div>
              <DragResize side="bottom" height="500" heightRange={[200, 1000]} className="layout-column flex">
                <FileCompare project={project} file1={file.data} file2={filePrevious ? filePrevious.data : null}>
                  {filePrevious ? <PreviewFile project={project} file={filePrevious.data} /> : ''}
                  <PreviewFile project={project} file={file.data} />
                </FileCompare>
              </DragResize>
            </TogglePanel>
          )
        })
      }
    }

    if(project.remote.connected){
      return (
        <div className="layout-column flex rel-box">
          <Timeline project={this.props.project} />
          <div className="layout-row flex">
            <div className="layout-column">
              <ContentSidebar className="flex">
                <SidebarTimeline project={this.props.project}/>
              </ContentSidebar>
            </div>
            <div className="layout-column flex">
              {getDetailSection()}
            </div>
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="layout-column layout-align-center-center flex">
          <div className="text-title-4 text-center">Project not connected to Drive or Dropbox</div>
          <div className="text-title-4 text-center link-primary" style={{marginTop: '10px'}}><Link to={baseLink+'/settings'}>Add File Store</Link></div>
        </div>
      )
    }
  }
})

/////////////////////////////////////////////////////////////////////////////
///////////////////////////////// CONTAINER /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function mapStateToProps({sidebarTimeline, projects}, {params}) {
  const project = projects[params.stub];
  return {
    timeline: sidebarTimeline[project._id],
    project: project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    TimelineActions: bindActionCreators(SidebarTimelineActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);