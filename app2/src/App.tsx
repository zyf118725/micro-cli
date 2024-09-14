import Home from '@/pages/Home';
import { testfn } from '@/utils';

function App() {
  const a = 1;
  return (
    <div className='page'>
      <Home />
      <button onClick={testfn}>testfn</button>
    </div>
  );
}
export default App;
