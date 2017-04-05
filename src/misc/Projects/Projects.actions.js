import http from 'axios';
import { homeRoute } from 'route-actions';
import { push } from 'react-router-redux';
import * as ModalActions from 'stemn-shared/misc/Modal/Modal.actions.js';

export function setActiveProject({projectId}) {
  return (dispatch, getState) => {
    const activeProject = getState().projects.activeProject;
    if(activeProject != projectId){
      dispatch({
        type: 'PROJECTS/SET_ACTIVE_PROJECT',
        payload: {
          projectId
        }
      });
      if(activeProject){
        dispatch(websocketLeaveProject({projectId: activeProject}));
      }
    }
    dispatch(websocketJoinProject({projectId}));
  }
}

export function getProject({projectId}) {
  return {
    type: 'PROJECTS/GET_PROJECT',
    http: true,
    payload: {
      method: 'GET',
      url: `/api/v1/projects/${projectId}`
    }
  };
}

export function createProject(project) {
  return (dispatch) => {
    return dispatch({
      type: 'PROJECTS/CREATE_PROJECT',
      payload: http({
        method: 'POST',
        url: `/api/v1/projects`,
        data: project
      })
    });
  }
}

export function getUserProjects({userId}) {
  return {
    type:'PROJECTS/GET_USER_PROJECTS',
    payload: http({
      url: `/api/v1/search`,
      method: 'GET',
      params: {
        type:'project',
        parentType:'user',
        parentId: userId,
        size: 1000,
        published: 'both',
        select : ['name', 'picture', 'stub', 'type', 'remote', 'updated']
      },
    }),
  }
}

export function confirmDeleteProject({projectId, name}) {
  return ModalActions.showConfirm({
    message: 'Deleting a project is permanent. You will not be able to undo this.<br/><br/> Note: All your Stemn data (such as commits and tasks) will be deleted. Your files will remain in your cloud provider.',
    confirmValue: name,
    confirmPlaceholder: 'Please type in the name of this project to confirm.',
    modalConfirm: {
      type: 'ALIASED',
      aliased: true,
      payload: {
        functionAlias: 'ProjectsActions.deleteProject',
        functionInputs: { projectId }
      }
    }
  })
}

export function deleteProject({projectId}) {
  return (dispatch)=>{
    dispatch({
      type: 'PROJECTS/DELETE_PROJECT',
      payload: http({
        method: 'DELETE',
        url: `/api/v1/projects/${projectId}`,
      }).then((response)=>{
        dispatch(push(homeRoute()))
      }),
      meta: {
        projectId
      }
    });
  }
}

export function saveProject({project}) {
  return {
    type: 'PROJECTS/SAVE_PROJECT',
    payload: http({
      method: 'PUT',
      url: `/api/v1/projects/${project._id}`,
      data: project
    }),
    meta: {
      projectId: project._id
    }
  }
}

export function addField({projectId, field}) {
  return {
    type: 'PROJECTS/ADD_FIELD',
    payload: {
      projectId,
      field
    }
  };
}


export function removeField({projectId, fieldId}) {
  return {
    type: 'PROJECTS/REMOVE_FIELD',
    payload: {
      projectId,
      fieldId,
    }
  };
}

export function changeUserPermissions({projectId, userId, role}) {
  return {
    type: 'PROJECTS/CHANGE_USER_PERMISSIONS',
    payload: {
      projectId,
      userId,
      role
    }
  };
}

export const linkRemoteAlias = ({ id, path, prevProvider, project,  projectId, provider, userId }) => {
  // This will return a plain object with an alias function
  // This is used in modal callbacks.
  if(!provider){
    return {
      type: 'ALIASED',
      aliased: true,
      payload: {
        functionAlias: 'ProjectsActions.unlinkRemote',
        functionInputs: {
          prevProvider,
          projectId,
          userId,
        }
      }
    }
  }
  else{
    return {
      type: 'ALIASED',
      aliased: true,
      payload: {
        functionAlias: 'ProjectsActions.linkRemote',
        functionInputs: {
          id,
          path,
          prevProvider,
          projectId,
          provider,
          userId,
        }
      }
    }
  }
}

export const confirmLinkRemote = ({ isConnected, id, path, prevProvider, project,  projectId, provider, userId }) => (dispatch) => {
  // If the store is connected - we confirm the change
  if(isConnected){
    dispatch(ModalActions.showConfirm({
      message: 'Changing your file store <b>will delete your entire commit and change history.</b> Are you sure you want to do this? There is no going back.',
      modalConfirm: linkRemoteAlias({ id, path, prevProvider, project,  projectId, provider, userId })
    }))
  }
  // Else change straight away.
  else{
    dispatch(linkRemoteAlias({ id, path, prevProvider, project,  projectId, provider, userId }))
  }
};


export function linkRemote({projectId, provider, path, id, prevProvider, userId}) {
  return (dispatch) => {
    const link = () => dispatch({
      type: 'PROJECTS/LINK_REMOTE',
      payload: http({
        method: 'PUT',
        url: `/api/v1/sync/link/${projectId}/${provider}`,
        params: {
          path : path,
          id   : id
        }
      }),
      meta: {
        cacheKey: projectId
      }
    });
    const unlink = () => dispatch({
      type: 'PROJECTS/UNLINK_REMOTE',
      payload: http({
        method: 'DELETE',
        url: `/api/v1/sync/link/${projectId}/${prevProvider}`,
      }),
      meta: {
        cacheKey: projectId
      }
    });
    const updateProject = () => dispatch(getProject({projectId}));
    const updateUserProjects = () => dispatch(getUserProjects({userId}));
    const projectUpdates = () => Promise.all([updateProject(), updateUserProjects()]);

    if(prevProvider){
      return unlink().then(link).then(projectUpdates);
    }
    else{
      return link().then(projectUpdates);
    }
  }
}



export function unlinkRemote({projectId, prevProvider}) {
  return (dispatch) => {
    dispatch({
      type: 'PROJECTS/UNLINK_REMOTE',
      payload: http({
        method: 'DELETE',
        url: `/api/v1/sync/link/${projectId}/${prevProvider}`,
      }).then(response => {
        dispatch(getProject({projectId}))
      }),
      meta: {
        cacheKey: projectId
      }
    })
  }
}

export function websocketJoinProject({projectId}) {
  return {
    type: 'PROJECTS/WEBSOCKET_JOIN_PROJECT',
    websocket: true,
    payload: {
      type : 'ROOM/JOIN',
      payload : {
        room : projectId,
        type : 'project'
      }
    }
  };
}
export function websocketLeaveProject({projectId}) {
  return {
    type: 'PROJECTS/WEBSOCKET_LEAVE_PROJECT',
    websocket: true,
    payload: {
      type : 'ROOM/LEAVE',
      payload : {
        room : projectId,
        type : 'project'
      }
    }
  };
}
