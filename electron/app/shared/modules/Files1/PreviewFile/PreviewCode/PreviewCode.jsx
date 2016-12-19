import React from 'react';

import codemirror from 'codemirror'
import 'codemirror/mode/meta.js'
const requireCodemirrorMode = require.context("codemirror/mode/", true);
import LoadingOverlay     from 'app/renderer/main/components/Loading/LoadingOverlay/LoadingOverlay.jsx';
import EditorDisplay from 'app/renderer/main/modules/Editor/EditorDisplay.jsx';
import file    from 'app/renderer/assets/images/pure-vectors/file.svg';

export const Viewer = React.createClass({
  render() {
    const { data, extension } = this.props;

    if(extension){
      setTimeout(()=>{ // Give the component time to render (so we get refs)
        this.refs.codemirror.innerHTML = "";
        const editorInstance = codemirror(this.refs.codemirror, {
          value: data,
          indentWithTabs: true,
          readOnly: true,
          dragDrop: false,
          lineWrapping: true,
          lineNumbers: true,
        });
        // Get Mode
        const modeInfo = codemirror.findModeByExtension(extension);
        const mode = modeInfo ? modeInfo.mode : 'null';
        if(mode && mode != 'null'){
          const modePath = `./${mode}/${mode}.js`
          requireCodemirrorMode(modePath);
          editorInstance.setOption("mode", mode);
        }
      }, 1)
    }

    const isMarkdown = false;
//    const isMarkdown = extension == 'md';
    return (
      <div className="layout-row flex">
        <div className="scroll-box flex" ref="codemirror"></div>
        { isMarkdown
          ? <div className="scroll-box flex" style={{padding: '15px 30px'}}>
              <EditorDisplay value={data}/>
            </div>
          : null
        }
      </div>
    )
  }
});


export default React.createClass({
  componentWillMount() { this.onMount(this.props) },
  componentWillReceiveProps(nextProps) { this.onMount(nextProps, this.props)},
  onMount(nextProps, prevProps) {
    // If the previewId changes, download a new file
    if(!prevProps || nextProps.previewId !== prevProps.previewId){
      // If we don't already have the file, get it
      if(!nextProps.fileData){
        nextProps.downloadFn({
          projectId  : nextProps.fileMeta.project._id,
          fileId     : nextProps.fileMeta.fileId,
          revisionId : nextProps.fileMeta.revisionId,
          provider   : nextProps.fileMeta.provider
        })
      }
    }
  },
  render() {
    const { fileData, fileMeta } = this.props;
    return (
      <div className="layout-column flex">
        { fileData && fileData.data ? <Viewer extension={fileMeta.extension} data={fileData.data} /> : '' }
        { fileData ? <LoadingOverlay show={fileData.loading} /> : null }
        { fileData && !fileData.data && !fileData.loading
        ? <div className="layout-column layout-align-center-center flex text-center">
            <img style={{width: '100px'}} src={file}/>
            <div className="text-title-4" style={{marginBottom: '10px'}}>Nothing to display</div>
            <div className="text-title-5">This file appears to be empty.</div>
          </div>
        : null }
      </div>
    )
  }
});
