import React, { useState } from 'react'
import { Card, Alert, Form, Input, Select, Switch, Button, Descriptions, Divider, Message } from '@arco-design/web-react'
import { IconArrowLeft } from '@arco-design/web-react/icon'
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
    Message.success('提交成功')
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
    Message.info('表单已重置')
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
            <Button size="small" icon={<IconArrowLeft />} onClick={goBack}>
              返回
            </Button>
          </div>
        }
      >
        <Alert
          type="warning"
          showIcon
          style={{ marginBottom: '20px' }}
          content={
            <div>
              <div style={{ fontWeight: 'bold' }}>这是设置的内容</div>
              <div style={{ marginTop: '4px' }}>展示React 18 + TypeScript的表单处理能力</div>
            </div>
          }
        />

        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(_, values) => setFormData(values as any)}
        >
          <Form.Item label="用户名" field="username">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="邮箱" field="email">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item label="角色" field="role">
            <Select placeholder="请选择角色">
              <Select.Option value="admin">管理员</Select.Option>
              <Select.Option value="user">用户</Select.Option>
              <Select.Option value="guest">访客</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="状态" field="status">
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
        <Descriptions border column={1} data={[
          { label: '用户名', value: formData.username || '-' },
          { label: '邮箱', value: formData.email || '-' },
          { label: '角色', value: formData.role || '-' },
          { label: '状态', value: formData.status ? '启用' : '禁用' }
        ]} />
      </Card>
    </div>
  )
}

export default Settings
