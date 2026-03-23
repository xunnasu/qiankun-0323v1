import React, { useState } from 'react'
import { Card, Alert, Grid, Menu, Empty, Divider, Tag } from '@arco-design/web-react'
import { IconApps, IconBold, IconThunderbolt } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

const { Row, Col } = Grid

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
          type="warning"
          showIcon
          style={{ marginBottom: '20px' }}
          content={
            <div>
              <div style={{ fontWeight: 'bold' }}>欢迎使用子应用2</div>
              <div style={{ marginTop: '4px' }}>这是一个基于React 18 + TypeScript的子应用，展示React技术栈的功能和特性。</div>
            </div>
          }
        />

        <Row gutter={20}>
          <Col span={8}>
            <Card hoverable style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
              <IconApps style={{ fontSize: '40px', color: '#165dff', marginBottom: '12px' }} />
              <h3>组件生态</h3>
              <p style={{ color: '#86909c', margin: 0 }}>丰富的React组件库和生态系统</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
              <IconBold style={{ fontSize: '40px', color: '#00b42a', marginBottom: '12px' }} />
              <h3>状态管理</h3>
              <p style={{ color: '#86909c', margin: 0 }}>Redux、Context API等多种状态管理方案</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
              <IconThunderbolt style={{ fontSize: '40px', color: '#ff7d00', marginBottom: '12px' }} />
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
          onSelect={(key: any) => handleMenuSelect(key)}
        >
          <Menu.Item key="dashboard">仪表盘</Menu.Item>
          <Menu.Item key="settings">设置</Menu.Item>
        </Menu>

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
