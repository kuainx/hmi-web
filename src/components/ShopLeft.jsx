import { Col, Row } from 'antd';
import Product from './Product';

import { productList } from '../assets/productsList';


const productListItems=productList.map((product,key)=><Product key={key} data={product}></Product>)

function ShopLeft() {
  return (
    <div className='ShopLeft container p-12'>
      <Row className='h-1/5'>
        <div>
          <h1 className='text-3xl m-4'>我们为您精选了一些好物</h1>
          <h3 className='text-xl m-4'>您可提前选购，将在换电完成后为您奉上</h3>
        </div>
      </Row>
      <Row className='flex-col w-full h-4/5 overflow-scroll'>
      {productListItems}
      </Row>
    </div>
  );
}

export default ShopLeft;
