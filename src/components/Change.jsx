import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined, QuestionCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { changeProcess } from '../assets/changeProcess';
import { useState } from 'react';
import { useEffect } from 'react';
import img2 from '../assets/2.png';

function ChangeProcess({ data }) {
  let icon = <></>;
  switch (data.status) {
    case 1:
      icon = <LoadingOutlined className='text-6xl greenIcon' />;
      break;
    case 2:
      icon = <CheckCircleOutlined className='text-6xl greenIcon' />;
      break;
  }
  return (
    <Row className='m-4'>
      <Col className='w-24 h-16'>{icon}</Col>
      <Col className={data.status == 0 ? 'opacity-70' : ''}>
        <h1 className='text-4xl'>{data.name}</h1>
      </Col>
    </Row>
  );
}

function Change() {
  const navigate = useNavigate();
  const [processData, setProcessData] = useState(changeProcess);
  function updateStatus(i) {
    i > 0 && (processData[i - 1].status = 2);
    processData[i] ? (processData[i].status = 1) : setTimeout(() => navigate('/finish'), 1000);
    setProcessData([...processData]);
  }
  useEffect(() => {
    console.log('mounted');
    for (let i = 0; i <= processData.length; i++) {
      setTimeout(() => {
        updateStatus(i);
      }, 2000 * (i + 1));
    }
  }, []);

  return (
    <Row>
      <Col>
        <img className='h-screen' src={img2} alt='' />
      </Col>
      <Col className='flex-1 m-20'>
        <Row className='h-5/6 w-full justify-center'>
          <Col className='flex flex-col justify-center'>
            {processData.map((dat, index) => (
              <ChangeProcess data={dat} key={index}></ChangeProcess>
            ))}
          </Col>
        </Row>
        <Row className='h-1/5 float-right'>
          <QuestionCircleOutlined className='text-6xl greenIcon' />
        </Row>
      </Col>
    </Row>
  );
}

export default Change;
