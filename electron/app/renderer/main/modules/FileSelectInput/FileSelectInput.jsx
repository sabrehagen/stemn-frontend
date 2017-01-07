import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Container Actions
import * as ModalActions from 'electron/app/renderer/main/modules/Modal/Modal.actions.js';

import classes from './FileSelectInput.css'
import classNames from 'classnames';
import MdFolder from 'react-icons/md/folder';
import SimpleIconButton from 'electron/app/renderer/main/components/Buttons/SimpleIconButton/SimpleIconButton.jsx'
import { isDriveFileId, isDropboxFileId } from 'electron/app/shared/modules/Files/utils';


const propTypesObject = {
  projectId: PropTypes.string,
  provider: PropTypes.string.isRequired,    // 'dropbox' || 'drive' - The provider
  model: PropTypes.string.isRequired,       // The model to assign the selected file
  value: PropTypes.object.isRequired,       // The value of the selected file: { path, fileId }
  disabled: PropTypes.bool                  // Should we disable the input
};

const FileSelectInput = React.createClass({
  showModal(){
    this.props.ModalActions.showModal({
      modalType: 'FILE_SELECT',
      modalProps: {
        projectId: this.props.projectId,
        model: this.props.model,
        path: this.props.value.fileId,
        storeKey: this.props.model, // We use the model as the storekey
        options: {
          allowFolder : true,
          foldersOnly : true,
          explore     : this.props.provider
        },
      },
    })
  },
  render() {
    const { provider, model, value, disabled } = this.props;

    const validatePath = (path, fileId, provider) => {
      if(provider == 'drive'){
        return isDriveFileId(fileId) ? path : '';
      }
      else if(provider == 'dropbox'){
        return isDropboxFileId(fileId) ? path : '';
      }
      else{
        return ''
      }
    }

    const path = validatePath(value.path, value.fileId, provider);

    return (
      <div className={classNames(classes.fileSelectInput, 'layout-row layout-align-start-center', {[classes.disabled] : disabled})} onClick={()=>{if(!disabled){this.showModal()}}}>
        <div className={classes.text + ' flex'}>
          {path ? <span><span style={{textTransform: 'capitalize'}}>{provider}/</span>{path}</span> : 'Select the project folder'}
        </div>
        <SimpleIconButton>
          <MdFolder size="22" />
        </SimpleIconButton>
      </div>
    );
  }
});

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    ModalActions: bindActionCreators(ModalActions, dispatch),
  }
}

FileSelectInput.propTypes = propTypesObject;

export default connect(mapStateToProps, mapDispatchToProps)(FileSelectInput);
