import React, { useState } from 'react'
import { Card, Alert, Form, Input, Select, Switch, Button, Descriptions, Divider, message } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Settings: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    status: true
  })

  const handleSubmit = () => {
    message.success('提交成功')
    console.log('表单数据:', formData)
  }

  const handleReset = () => {
    form.resetFields()
    setFormData({
      username: '',
      email: '',
      role: '',
      status: true
    })
    message.info('表单已重置')
  }

  const goBack = () => {
    navigate('/')
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>设置</span>
            <Button size="small" icon={<ArrowLeftOutlined />} onClick={goBack}>
              返回
            </Button>
          </div>
        }
      >
        <Alert
          message="这是设置的内容"
          description="展示React 18 + TypeScript的表单处理能力"
          type="warning"
          showIcon
          style={{ marginBottom: '20px' }}
        />

        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(changedValues, allValues) => setFormData(allValues)}
        >
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item label="角色" name="role">
            <Select placeholder="请选择角色">
              <Select.Option value="admin">管理员</Select.Option>
              <Select.Option value="user">用户</Select.Option>
              <Select.Option value="guest">访客</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="状态" name="status" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
            <Button onClick={handleReset} style={{ marginLeft: '8px' }}>
              重置
            </Button>
          </Form.Item>
        </Form>

        <Divider />

        <h3>表单数据预览</h3>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="用户名">{formData.username || '-'}</Descriptions.Item>
          <Descriptions.Item label="邮箱">{formData.email || '-'}</Descriptions.Item>
          <Descriptions.Item label="角色">{formData.role || '-'}</Descriptions.Item>
          <Descriptions.Item label="状态">{formData.status ? '启用' : '禁用'}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default Settings
