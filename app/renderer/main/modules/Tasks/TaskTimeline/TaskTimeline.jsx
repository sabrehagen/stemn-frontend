// Container Core
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Container Actions
import * as TasksActions from '../Tasks.actions.js';
import * as CommentsActions from 'app/renderer/main/modules/Comments/Comments.actions.js';

// Component Core
import React from 'react';

// Styles
import classNames from 'classnames';
import classes from './TaskTimeline.css';

// Sub Components
import Comment from 'app/renderer/main/modules/Comments/Comment/Comment.jsx';
import TaskTimelineWrapper from './TaskTimelineWrapper/TaskTimelineWrapper.jsx';
import TaskTimelineItem from './TaskTimelineItem/TaskTimelineItem.jsx';


/////////////////////////////////////////////////////////////////////////////
///////////////////////////////// COMPONENT /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const onMount = (nextProps, prevProps) => {
  if(nextProps.taskId){
    if(!prevProps || nextProps.taskId !== prevProps.taskId){
      nextProps.CommentsActions.getComments({stub: nextProps.taskId})
    }
  }
}


const taskEvents = [{
  event: 'commit',
  timestamp: 1473254921922,
  user: {
    name: 'David Revay',
    picture: '/uploads/e926ce6b-0e2c-44fb-822a-9c3cdaf29a55.jpeg',
  }
},{
  event: 'open',
  timestamp: 1473254921922,
  user: {
    name: 'David Revay',
    picture: '/uploads/e926ce6b-0e2c-44fb-822a-9c3cdaf29a55.jpeg',
  }
},{
  event: 'closed',
  timestamp: 1473254921922,
  user: {
    name: 'David Revay',
    picture: '/uploads/e926ce6b-0e2c-44fb-822a-9c3cdaf29a55.jpeg',
  }
},{
  event: 'changeLabels',
  timestamp: 1473254921922,
  added: ['gooba', 'tooba'],
  user: {
    name: 'David Revay',
    picture: '/uploads/e926ce6b-0e2c-44fb-822a-9c3cdaf29a55.jpeg',
  }
},{
  event: 'changeLabels',
  timestamp: 1473254921922,
  added: ['testy', 'boon'],
  removed: ['gooba'],
  user: {
    name: 'David Revay',
    picture: '/uploads/e926ce6b-0e2c-44fb-822a-9c3cdaf29a55.jpeg',
  }
}]


export const Component = React.createClass({

  // Mounting
  componentWillMount() { onMount(this.props) },
  componentWillReceiveProps(nextProps) { onMount(nextProps, this.props)},

  render() {
    const { task, entityModel } = this.props;

    if(!task){
      return <div>Task Loading</div>
    }

    return (
      <div>
        {taskEvents.map((item, idx) =>
          <TaskTimelineWrapper key={idx}>
            <TaskTimelineItem item={item} />
          </TaskTimelineWrapper>
        )}
        <Comment item={{_id: '563ace2d5a5fa4ae06de50dd'}}></Comment>
        <br/>
        <Comment item={{_id: '563aaea6142ffe154a28affe'}}></Comment>
        <br/>
        <Comment item={{_id: '55ed0f2c9adb9dfe12d1b7b9'}}></Comment>
        <br/>
        <Comment item={{_id: '5744cef1018557c35098967b'}}></Comment>
        <br/>
        <Comment item={{_id: '57486b3706ef7c0c37d0a706'}}></Comment>
        <br/>
      </div>
    )
  }
});


/////////////////////////////////////////////////////////////////////////////
///////////////////////////////// CONTAINER /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function mapStateToProps({ tasks }, { taskId }) {
  return {
    task: tasks.data[taskId],
    entityModel: `tasks.data.${taskId}`
  };
}

function mapDispatchToProps(dispatch) {
  return {
    TasksActions: bindActionCreators(TasksActions, dispatch),
    CommentsActions: bindActionCreators(CommentsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
