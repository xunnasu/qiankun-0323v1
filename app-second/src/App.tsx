import { Routes, Route, Navigate } from 'react-router-dom'
import ModelManagement from './pages/ModelManagement'
import TaskManagement from './pages/TaskManagement'
import ResultTesting from './pages/ResultTesting'

function App() {
  return (
    <Routes>
      <Route path="/app-second" element={<ModelManagement />} />
      <Route path="/app-second/task-management" element={<TaskManagement />} />
      <Route path="/app-second/result-testing" element={<ResultTesting />} />
      {/* 保留根路径，以便子应用可以独立运行 */}
      <Route path="/" element={<Navigate to="/app-second" replace />} />
    </Routes>
  )
}

export default App
