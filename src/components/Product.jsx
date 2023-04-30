import { Card } from 'antd';
import NumSelectorProduct from './utils/NumSelectorProduct';
const { Meta } = Card;
const Product = ({ data, index }) => (
  <Card
    hoverable
    style={{
      width: 200,
    }}
    className='m-2'
    cover={<img alt={data.name} src={data.img} />}
  >
    <Meta title={data.name} />
    <span className='text-xl'>{data.price}</span> <NumSelectorProduct index={index} />
  </Card>
);
export default Product;
