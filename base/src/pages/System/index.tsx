import { Card } from 'antd';
import styles from './index.module.less';

export default function Detail() {

  return (
    <Card>
      <div className={styles.box}>这里是主应用的系统设置页</div>
    </Card>
  );
}
