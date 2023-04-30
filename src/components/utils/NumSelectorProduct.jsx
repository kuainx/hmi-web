import { InputNumber } from 'antd';
import { useStores, mobxObserver } from '../../store';

function NumSelectorProduct({ index }) {
  const { runningStore } = useStores();
  const onChange = value => {
    runningStore.productNum[index] = value;
  };
  return (
    <>
      <InputNumber prefix='×' min={0} max={10} defaultValue={0} onChange={onChange} bordered={false} />
    </>
  );
}

export default mobxObserver(NumSelectorProduct);
