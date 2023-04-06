import request from '../../utils/request';

const getTestData = num => {
  return request('/api/test', {
    method: 'POST',
    body: JSON.stringify(num),
  });
};

export { getTestData };
