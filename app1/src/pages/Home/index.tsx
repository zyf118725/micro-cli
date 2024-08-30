import { Button, Card } from 'antd';
import { appSkip } from '@/utils';
export default function Home() {
  return (
    <Card>我是app1的首页
      <Button onClick={() => appSkip('/app2/home')}>去App2</Button>
    </Card>
  )
}