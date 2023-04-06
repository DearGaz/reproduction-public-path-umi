import styles from './index.css';
import { Button } from 'antd';
import { history } from 'umi';

export default function () {
  const toPage = () => {
    history.push({ pathname: '/users', query: { page: 1 } });
  };
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li />
        <Button type="primary" onClick={() => toPage()}>
          跳转到用户页面
        </Button>
      </ul>
    </div>
  );
}
