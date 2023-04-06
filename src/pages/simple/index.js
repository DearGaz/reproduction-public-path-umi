import { connect } from 'dva';
import { Row, Col, Button, Icon, Card } from 'antd';

const Index = ({ dispatch, data }) => {
  const getData = () => {
    dispatch({
      type: 'simple/fetch',
    });
  };
  return (
    <div>
      <Button onClick={getData} type="primary">
        加载初始化数据(各城市综合评分)
      </Button>
      <Row gutter={10}>
        {data &&
          data.map(d => (
            <Col key={d.name} span={6}>
              <Card style={{ margin: 10 }} hoverable>
                <Row>
                  <Col span={16}>
                    <Icon type="environment" /> {d.name}
                  </Col>
                  <Col span={8} style={{ fontSize: 30, fontWeight: 600 }}>
                    {d.value}
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

/*把models的state变成组件的props */
function mapStateToProps(state) {
  /*析构方法 */
  const { data } = state.simple;
  return {
    data,
    /*dva 有一个管理 effects 执行的 hook，
          并基于此封装了 dva-loading 插件。
          通过这个插件，我们可以不必一遍遍地写 showLoading 和 hideLoading，
          当发起请求时，插件会自动设置数据里的 loading 状态为 true 或 false 。
          然后我们在渲染 components 时绑定并根据这个数据进行渲染。*/
    loading: state.loading.models.simple,
  };
}

export default connect(mapStateToProps)(Index);
