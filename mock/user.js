import mockjs from 'mockjs';

export default {
  'GET /api/demo/list': {
    result: true,
    data: {
      total: 2,
      rows: [
        { ID: 1, Note: '测试数据1', Description: '描述1' },
        { ID: 2, Note: '测试数据2', Description: '描述2' },
      ],
    },
    message: '成功',
  },
  'POST /api/test': mockjs.mock({
    result: true,
    'data|50': [{ name: '@city', 'value|1-100': 50 }],
    message: '成功',
  }),
};
