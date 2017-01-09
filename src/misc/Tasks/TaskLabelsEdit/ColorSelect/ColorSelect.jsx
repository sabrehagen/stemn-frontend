// Component Core
import React from 'react';
import { connect } from 'react-redux';

// Styles
import classNames from 'classnames';
import classes from './ColorSelect.css';
import { actions } from 'react-redux-form';

import PopoverMenu from 'stemn-frontend-shared/src/misc/PopoverMenu/PopoverMenu';
import SimpleIconButton from 'stemn-frontend-shared/src/misc/Buttons/SimpleIconButton/SimpleIconButton.jsx'
import MdMoreHoriz from 'react-icons/md/more-horiz';


const Component = React.createClass({
  render() {
    const { dispatch, model, value } = this.props;

    const niceColors = [
      '#001F3F',
      '#0074D9',
      '#7FDBFF',
      '#39CCCC',
      '#3D9970',
      '#2ECC40',
      '#01FF70',
      '#FFDC00',
      '#FF851B',
      '#FF4136',
      '#F012BE',
      '#B10DC9',
      '#85144B',
      '#FFFFFF',
      '#DDDDDD',
      '#AAAAAA',
    ]

    return (
      <div className={classes.sampleOuter + ' layout-row layout-wrap'}>
          {
            niceColors.map(color =>
              <div
                onClick={()=>{
                  dispatch(actions.change(model, color))
                }}
                className={classes.sampleSwatch}
                style={{background: color}}
              />
            )
          }
      </div>
    )
  }
});

export default connect()(Component);
