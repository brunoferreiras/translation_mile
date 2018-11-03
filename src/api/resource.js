import request from './request';

export const getResources = () => {
  return request.get('get_resources_since');
};
