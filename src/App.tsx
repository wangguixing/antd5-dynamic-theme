/*
 * @Author: wangguixing
 * @Date: 2023-09-08 16:32:34
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-09-08 17:41:06
 * @FilePath: \src\App.tsx
 */
import { ConfigProvider, Space } from 'antd';
import React, { useState } from 'react';
import ComponentList from "./views/ComponentList";

const App: React.FC = () => {
  const [color, setColor] = useState('#00b96b');

  const updateColor = (color: string): void => {
    setColor(color)
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: color,
          borderRadius: 2,

          // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed',
        },
      }}
    >
      <Space>
        <ComponentList updateColor={updateColor}></ComponentList>
      </Space>
    </ConfigProvider>
  )
}

export default App
