import React, { useState } from 'react'
import { Card, Alert, Descriptions, Button, Divider, Row, Col, Input, message } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const updateTime = new Date().toLocaleString()

  const goBack = () => {
    navigate('/')
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>仪表盘</span>
            <Button size="small" icon={<ArrowLeftOutlined />} onClick={goBack}>
              返回
            </Button>
          </div>
        }
      >
        <Alert
          message="这是仪表盘的内容"
          description="展示React 18 + TypeScript的数据展示能力"
          type="success"
          showIcon
          style={{ marginBottom: '20px' }}
        />

        <Descriptions title="页面信息" bordered column={2}>
          <Descriptions.Item label="页面名称">仪表盘</Descriptions.Item>
          <Descriptions.Item label="技术栈">React 18 + TypeScript</Descriptions.Item>
          <Descriptions.Item label="状态">开发中</Descriptions.Item>
          <Descriptions.Item label="最后更新">{updateTime}</Descriptions.Item>
        </Descriptions>

        <Divider />

        <h3>功能演示</h3>
        <Row gutter={20}>
          <Col span={12}>
            <Card title="计数器示例" hoverable>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <span style={{ fontSize: '24px', fontWeight: 600, minWidth: '60px', textAlign: 'center' }}>
                  {count}
                </span>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="输入示例" hoverable>
              <Input
                placeholder="请输入内容"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <p style={{ marginTop: '10px', color: '#4e5969' }}>输入内容: {inputValue}</p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Dashboard
