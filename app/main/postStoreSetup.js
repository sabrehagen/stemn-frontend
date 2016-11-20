import http from 'axios';
import { values } from 'lodash';
import { ipcMain } from 'electron';
import { getProviderPath } from '../shared/actions/system';
import  * as shellContext from '../shared/modules/Shell/ShellContext/ShellContext.actions.js';


export default (store) => {
  http.interceptors.request.use(config => {
    const token = store.getState().auth.authToken;
    config.headers.Authorization = token ? `bearer ${token}` : ''
    return config;
  });
  
  ipcMain.on('redux-action', (event, action) => {
    store.dispatch(action);
  });
  
  // Dispatch redux initial events
  store.dispatch(getProviderPath());

  // Dispatch context-menu setup
  setTimeout(() => {
    // Get set the Dropbox/Drive provider paths as the context-menu folders
    store.dispatch(shellContext.updateConfig({
      folders: values(store.getState().system.providerPath)
    }))
    // Enable the context menu
    store.dispatch(shellContext.enable());
  }, 1000)
}
