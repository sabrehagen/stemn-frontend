
import {getViewerType} from 'app/renderer/main/components/PreviewFile/previewFileUtils.js';


export function init({compareId, mode, project, file1, file2}) {
  const previewType1 = getViewerType(file1.extension, project.remote.provider);
  const previewType2 = file2 ? getViewerType(file2.extension, project.remote.provider) : null;
  return {
    type: 'FILE_COMPARE/INIT',
    payload: {
      compareId,
      previewType1,
      previewType2,
    },
  };
}

export function changeMode({compareId, mode}) {
  return {
    type: 'FILE_COMPARE/CHANGE_MODE',
    payload: {
      compareId,
      mode
    },
  };
}


