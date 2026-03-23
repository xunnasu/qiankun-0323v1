import request from '@/utils/request'

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({
          token: 'mock-token-' + Date.now(),
          userInfo: {
            id: 1,
            username: 'admin',
            nickname: '管理员',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            roles: ['admin'],
            permissions: ['*']
          }
        })
      } else {
        reject(new Error('用户名或密码错误'))
      }
    }, 500)
  })
}

export const getUserInfo = () => {
  return request.get('/user/info')
}

export const logout = () => {
  return request.post('/user/logout')
}
