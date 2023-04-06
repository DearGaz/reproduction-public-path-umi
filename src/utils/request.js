import { fetch } from 'dva';
import { message } from 'antd';

const parseJSON = response => {
  return response.json();
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 403) {
    /* 权限系统定义：无权限 */
    window.location.href = 'https://mis.jjmatch.cn/cfrm_content/errorpage/NoAuthority.html';
  } else if (response.status === 401 || response.status === 408) {
    /* 权限系统定义：未登录401或者登陆超时408 */
    window.location.href = 'https://mis.jjmatch.cn/cfrm_content/errorpage/NotOnline_TimeOut.html';
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  /* 设置credentials = 'include'，可实现带着token信息请求后台接口 */
  if (options !== undefined) {
    options.credentials = 'include';
    if (options.method !== 'GET') {
      const headers = {
        'Content-Type': 'application/json',
      };
      options.headers = { ...headers, ...options.headers };
    }
  } else {
    options = {
      credentials: 'include',
    };
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => message.error(`fetch请求异常：${err}`));
}
