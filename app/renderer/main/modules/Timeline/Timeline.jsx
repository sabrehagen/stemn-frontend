// Container Core
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Container Actions
import * as SidebarTimelineActions from 'app/shared/actions/sidebarTimeline';

// Component Core
import React from 'react';

// Styles
import classNames from 'classnames';
import styles from './Timeline.css';

// Sub Components
import moment from 'moment';
import Popover from 'app/renderer/assets/other/react-popup';
import * as stringConcat from 'app/shared/helpers/stringConcat';
import MoreDots from './MoreDots/MoreDots.jsx';
import MoreButton from './MoreButton/MoreButton.jsx';


/////////////////////////////////////////////////////////////////////////////
///////////////////////////////// COMPONENT /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const PopupContent = (item) =>{
  const timeFromNow = moment(item.timestamp).fromNow();

  return (
    <div className={styles.popup + ' layout-row layout-align-start-center'}>
      <img className={styles.popupImage} src={'https://stemn.com' + item.user.picture + '?size=thumb&crop=true'} />
      <div className="flex">
        {/*<b>{stringConcat.end(item.data.summary, 30)}</b> */}
        <div>{timeFromNow} by {item.user.name}</div>
      </div>

    </div>
    )
}

const PopupTrigger = React.createClass({
  getInitialState () {
    return {
      isOpen: false,
    }
  },
  toggle (toState) {
    this.setState({ isOpen: toState === null ? !this.state.isOpen : toState })
  },
  render() {
    const PopupTriggerStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      <Popover
        isOpen={this.state.isOpen}
        body={PopupContent(this.props.item)}
        preferPlace = 'below'>
        <div
          onMouseOver={()=>this.toggle(true)}
          onMouseOut={()=>this.toggle(false)}
          style={PopupTriggerStyles}>
        </div>
      </Popover>
    );
  }
})

export const Component = React.createClass({
  getInitialState () {
    return {
      isOpen: false,
      page: 0
    }
  },
  toggle (toState) {
    this.setState({ isOpen: toState === null ? !this.state.isOpen : toState })
  },
  scroll (direction){
    if(direction == 'left'){
      this.setState({
        page : this.state.page + 1
      })
    }
    else if (direction == 'right' && this.state.page > 0){
      this.setState({
        page : this.state.page - 1
      })
    }
  },
  render() {
    const numberToShow = 15;

    const moreLeft  = this.state.page < this.props.timeline.data.length / numberToShow - 1;
    const moreRight = this.state.page > 0;


    const Items = this.props.timeline.data.map((item, index)=> {
      const percentage = 100 - (index) * (100 / numberToShow);
      const posStyle = {left: percentage+'%'};
      return (
        <a key={item._id}
          className={classNames(styles.dot, {[styles.active]: this.props.timeline.selected._id == item._id})}
          style={posStyle}
          onClick={()=>this.props.TimelineActions.selectTimelineItem({projectId: this.props.project._id, selected: item})}>
          <PopupTrigger item={item} />
        </a>
      )
    });

    return (
      <div className={styles.timeline +' layout-row'}>
        <div className="rel-box flex">
          <div className={styles.line}>
            {moreLeft  ? <MoreButton onClick={()=>this.scroll('left')} side="left"/> : ''}
            {moreRight ? <MoreButton onClick={()=>this.scroll('right')} side="right"/> : ''}
            {moreLeft  ? <MoreDots side="left" /> : ''}
            {moreRight ? <MoreDots side="right" /> : ''}
          </div>
          <div className={styles.dotsOverflow}>
            <div className={styles.dotsPosContainer}>
              <div className={styles.dots} style={{transform: `translateX(${this.state.page*100}%)`}}>
                {Items}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


//    const latestDate = moment(this.props.timeline.data[0].timestamp).valueOf();
//    const earlyDate  = moment(this.props.timeline.data[this.props.timeline.data.length-1].timestamp).valueOf();
//    const range      = latestDate - earlyDate;
//
//    const Items = this.props.timeline.data.map((item)=> {
//      const percentage = 100 - ((latestDate - moment(item.timestamp).valueOf())/range * 100);
//      const posStyle = {left: percentage+'%'};
//      return <a key={item._id} className={classNames(styles.dot, {[styles.active]: this.props.timeline.selected._id == item._id})} style={posStyle} onClick={()=>this.props.TimelineActions.selectTimelineItem({projectId: this.props.project._id, selected: item})}><PopupTrigger item={item} /></a>
//    });

/////////////////////////////////////////////////////////////////////////////
///////////////////////////////// CONTAINER /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function mapStateToProps({ sidebarTimeline }, {project}) {
  return {
    timeline: sidebarTimeline[project._id],
    project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    TimelineActions: bindActionCreators(SidebarTimelineActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
