import axios from 'axios';

axios.defaults.timeout = 60000;

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.status);
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;