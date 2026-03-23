import React, { useState } from 'react'
import { Card, Alert, Descriptions, Button, Divider, Grid, Input } from '@arco-design/web-react'
import { IconArrowLeft } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

const { Row, Col } = Grid

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
            <Button size="small" icon={<IconArrowLeft />} onClick={goBack}>
              返回
            </Button>
          </div>
        }
      >
        <Alert
          type="success"
          showIcon
          style={{ marginBottom: '20px' }}
          content={
            <div>
              <div style={{ fontWeight: 'bold' }}>这是仪表盘的内容</div>
              <div style={{ marginTop: '4px' }}>展示React 18 + TypeScript的数据展示能力</div>
            </div>
          }
        />

        <Descriptions title="页面信息" border column={2} data={[
          { label: '页面名称', value: '仪表盘' },
          { label: '技术栈', value: 'React 18 + TypeScript' },
          { label: '状态', value: '开发中' },
          { label: '最后更新', value: updateTime }
        ]} />

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
                onChange={(value) => setInputValue(value)}
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
