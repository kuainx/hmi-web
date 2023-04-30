import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useStores, mobxObserver } from '../../store';
function NumSelector() {
  const { runningStore } = useStores();
  return (
    <>
      <Button
        className='align-middle ml-4'
        type='dashed'
        shape='circle'
        icon={<MinusOutlined />}
        onClick={() => runningStore.decrementBattery()}
      />
      <span className='text-3xl ml-4'>{runningStore.battery}</span>
      <Button
        className='align-middle ml-4'
        type='dashed'
        shape='circle'
        icon={<PlusOutlined />}
        onClick={() => runningStore.incrementBattery()}
      />
    </>
  );
}

export default mobxObserver(NumSelector);
