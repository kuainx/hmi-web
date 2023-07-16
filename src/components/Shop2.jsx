import { Col, Row } from 'antd';
import { Input, Button } from 'antd';
import { productList } from '../assets/productsList';
import Product from './Product';
import { useState } from 'react';
import DiscountA from './utils/DiscountA';
import DiscountB from './utils/DiscountB';
import { useStores, mobxObserver } from '../store';
import { useNavigate } from 'react-router-dom';
import Category from './utils/Category';
const { Search } = Input;

const defaultProductListItems = productList.map((product, key) =>
  product.price == -1 ? (
    <Category title={product.name} index={key} />
  ) : (
    <Product key={key} data={product} index={key}></Product>
  )
);
function Shop2() {
  const { runningStore } = useStores();
  const navigate = useNavigate();
  const [productListItems, setProductListItems] = useState(defaultProductListItems);
  const refreshProductList = (filter = '') => {
    if (filter === '') {
      setProductListItems(defaultProductListItems);
    } else {
      setProductListItems(
        productList.map((product, key) =>
          product.name.includes(filter) && product.price !== -1 ? (
            <Product key={key} data={product} index={key}></Product>
          ) : (
            ''
          )
        )
      );
    }
  };
  const onSearch = val => {
    refreshProductList(val);
  };
  const handleChange = e => {
    refreshProductList(e.target.value);
  };
  return (
    <div className='shop2bg'>
      <Row className='h-1/6'>
        <Col span={8} className='flex items-center'>
          <div>
            <h3 className='text-3xl m-4'>您可提前选购，将在换电完成后为您奉上</h3>
          </div>
        </Col>
        <Col span={4} className='flex items-center'>
          <Search
            size='large'
            placeholder='搜索您想要的商品'
            allowClear
            onSearch={onSearch}
            onChange={handleChange}
            className='origin-left scale-150'
          />
        </Col>
      </Row>
      <Row className='h-4/6'>
        <Col span={14} className='px-4 flex flex-col w-full h-full flex-wrap overflow-scroll content-start'>
          {productListItems}
        </Col>
        <Col span={10} className='h-full px-8 py-4 overflow-auto '>
          <DiscountA />
          <DiscountB />
          <DiscountB />
        </Col>
      </Row>
      <Row className='h-1/6'>
        <Col span={8}>
          <div className='ml-8'>
            <h3 className='text-xl m-2'>
              已选{runningStore.totalNum}件 合计：￥<span className='text-5xl'>{runningStore.totalPrice}</span>
            </h3>
            <h3 className='text-xl m-2'>
              将抵扣 <span className='text-5xl'>40</span>积分
            </h3>
          </div>
        </Col>
        <Col span={4} className='flex-col justify-center'>
          <Button type='primary' shape='round' className='m-4 w-1/2 h-1/2' onClick={() => navigate('/pay')}>
            <span className='text-3xl'>选好了</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default mobxObserver(Shop2);
