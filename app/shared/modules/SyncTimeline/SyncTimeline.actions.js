import http from 'axios';

export function deselect({projectId}) {
  return {
    type:'TIMELINE/DESELECT_ITEM',
    payload: {
      projectId,
    },
  }
}

export function selectTimelineItem({projectId, selected}) {
  return {
    type:'TIMELINE/SELECT_ITEM',
    payload: {
      projectId,
      selected
    },
    meta: {
      cacheKey: projectId
    }
  }
}

export function fetchTimeline({projectId, fileId, provider}) {
  return {
    type:'TIMELINE/FETCH_TIMELINE',
    payload: http({
      method: 'GET',
      url: projectId ? `/api/v1/sync/timeline/${projectId}` : `/api/v1/remote/timeline/${provider}`,
      params: {
        types: fileId ? ['commits', 'revisions'] : ['commits'],
        file: fileId
      },
    }),
    meta: {
      cacheKey: fileId ? fileId : projectId
    }
  }
}
