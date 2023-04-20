import { Button } from 'antd';
import {
  PlusOutlined,MinusOutlined
} from '@ant-design/icons';
function NumSelector() {
  return (
    <>
      <Button className='align-middle ml-4' type="dashed" shape="circle" icon={<PlusOutlined/>} />
      <span className='text-3xl ml-4'>2</span>
      <Button className='align-middle ml-4' type="dashed" shape="circle" icon={<MinusOutlined/>} />
    </>

  )
}

export default NumSelector