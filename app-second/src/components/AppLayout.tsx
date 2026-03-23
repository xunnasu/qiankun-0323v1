import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'
import { HomeOutlined, SettingOutlined, FileOutlined } from '@ant-design/icons'
import './AppLayout.css'

const { Sider, Content } = Layout
const { Title } = Typography

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(location.pathname)

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location.pathname])

  const handleMenuClick = (e: any) => {
    navigate(e.key)
  }

  return (
    <Layout className="app-layout">
      <Sider width={240} className="app-sider">
        <div className="app-logo">
          <Title level={4}>App Second</Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          onClick={handleMenuClick}
          className="app-menu"
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            模型管理
          </Menu.Item>
          <Menu.Item key="/task-management" icon={<SettingOutlined />}>
            任务管理
          </Menu.Item>
          <Menu.Item key="/result-testing" icon={<FileOutlined />}>
            结果测试
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="app-content">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
