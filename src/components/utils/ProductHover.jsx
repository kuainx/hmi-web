import { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useStores, mobxObserver } from '../../store';

function ProductHover({ data, index }) {
  const { runningStore } = useStores();
  const [num, setNum] = useState(0);
  const addNum = (add = 1) => {
    const newNum = num + add;
    setNum(newNum);
    runningStore.productNum[index] = newNum;
  };
  const imgClick = () => {
    addNum();
  };
  return (
    <div>
      <img onClick={imgClick} alt={data.name} src={data.img} />
      {num > 0 ? (
        <div className='imgHover'>
          <Button
            className='align-middle ml-4'
            type='dashed'
            shape='circle'
            icon={<MinusOutlined />}
            onClick={() => addNum(-1)}
          />
          <span className='text-6xl ml-4' style={{ color: 'white' }}>
            {num.toString()}
          </span>
          <Button
            className='align-middle ml-4'
            type='dashed'
            shape='circle'
            icon={<PlusOutlined />}
            onClick={() => addNum()}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default mobxObserver(ProductHover);
