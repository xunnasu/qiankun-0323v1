import React, { useState } from 'react'
import { Card, Alert, Row, Col, Menu, Empty, Divider, Tag } from 'antd'
import { AppstoreOutlined, BuildOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState('')

  const handleMenuSelect = (key: string) => {
    setActiveMenu(key)
    if (key === 'dashboard') {
      navigate('/dashboard')
    } else if (key === 'settings') {
      navigate('/settings')
    }
  }

  const getMenuTitle = (key: string): string => {
    const titles: Record<string, string> = {
      dashboard: '仪表盘',
      settings: '设置'
    }
    return titles[key] || ''
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>子应用2 - React18 + TypeScript</span>
            <Tag color="warning">React 18</Tag>
          </div>
        }
      >
        <Alert
          message="欢迎使用子应用2"
          description="这是一个基于React 18 + TypeScript的子应用，展示React技术栈的功能和特性。"
          type="warning"
          showIcon
          style={{ marginBottom: '20px' }}
        />

        <Row gutter={20}>
          <Col span={8}>
            <Card hoverable style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
              <AppstoreOutlined style={{ fontSize: '40px', color: '#165dff', marginBottom: '12px' }} />
              <h3>组件生态</h3>
              <p style={{ color: '#86909c', margin: 0 }}>丰富的React组件库和生态系统</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
              <BuildOutlined style={{ fontSize: '40px', color: '#00b42a', marginBottom: '12px' }} />
              <h3>状态管理</h3>
              <p style={{ color: '#86909c', margin: 0 }}>Redux、Context API等多种状态管理方案</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
              <ThunderboltOutlined style={{ fontSize: '40px', color: '#ff7d00', marginBottom: '12px' }} />
              <h3>虚拟DOM</h3>
              <p style={{ color: '#86909c', margin: 0 }}>高效的虚拟DOM机制，优化渲染性能</p>
            </Card>
          </Col>
        </Row>

        <Divider />

        <h3>功能菜单</h3>
        <Menu
          mode="horizontal"
          selectedKeys={[activeMenu]}
          onClick={({ key }) => handleMenuSelect(key)}
          items={[
            { key: 'dashboard', label: '仪表盘' },
            { key: 'settings', label: '设置' }
          ]}
        />

        <div style={{ marginTop: '24px', padding: '24px', background: '#f2f3f5', borderRadius: '8px' }}>
          {!activeMenu ? (
            <Empty description="请选择一个菜单项" />
          ) : (
            <div>
              <h4 style={{ color: '#1d2129', marginBottom: '12px' }}>{getMenuTitle(activeMenu)}</h4>
              <p style={{ color: '#4e5969', lineHeight: '1.6' }}>
                这是{getMenuTitle(activeMenu)}的内容区域，可以在这里添加具体的业务逻辑和组件。
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

export default Home
