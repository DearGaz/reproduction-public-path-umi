import React from 'react';
import { Component } from 'react';
import { withRouter } from 'umi';
import styles from './index.less';

/**React有状态组件示例*/
class BasicLayout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>我是全局框架</h1>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(BasicLayout);
