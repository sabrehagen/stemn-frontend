import React from 'react';

// Components
import book   from 'app/renderer/assets/images/pure-vectors/book.svg';
import MdOpenInNew from 'react-icons/md/open-in-new';
import Toolbar         from 'app/renderer/menubar/modules/Toolbar/Toolbar.jsx'
import * as ElectronWindowActions from 'app/shared/electronActions/window.js';

export default class extends React.Component{
  render() {
    return (
      <div className="flex layout-column">
        <Toolbar menu={true}>
          <div className="flex"></div>
        </Toolbar>
        <div className="flex layout-column layout-align-center-center">
          <img src={book} style={{width: '100px', height: '100px'}} />
          <div className="text-title-5" style={{marginTop: '20px'}}>No Project Selected</div>
        </div>
      </div>
    );
  }
};
