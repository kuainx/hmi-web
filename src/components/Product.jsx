import { Card } from 'antd';
import ProductHover from './utils/ProductHover';
import { Typography } from 'antd';
const { Text, Link } = Typography;
const { Meta } = Card;

const Product = ({ data, index }) => (
  <Card
    hoverable
    style={{
      width: 200,
    }}
    className='m-2 mx-6'
    cover={<ProductHover data={data} index={index} />}
  >
    <Meta />
    <div className='text-center truncate font-bold'>
      <span className='text-2xl '>{data.name}</span>
    </div>
    <div className='text-center'>
      <span className='text-2xl'>
        ￥{data.price}
        {'   '}
        <Text type='secondary' delete>
          ￥{data.price + 2}
        </Text>
      </span>
    </div>
  </Card>
);
export default Product;
