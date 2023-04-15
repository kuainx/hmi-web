import { Card } from 'antd';
const { Meta } = Card;
const Product = ({data}) => (
  <Card
    hoverable
    style={{
      width: 200,
    }}
    className='m-2'
    cover={<img alt={data.name} src={data.img} />}
  >
    <Meta title={data.name}/>
    {data.price}
  </Card>
);
export default Product;