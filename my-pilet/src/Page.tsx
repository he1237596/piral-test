/*
 * @Author: Chris
 * @Date: 2023-08-28 14:28:42
 * @LastEditors: Chris
 * @LastEditTime: 2023-09-09 15:20:29
 * @Descripttion: **
 */
import React, { useState } from "react";
// import lessToJs from 'less-vars-to-js';
import styles0 from "./Page.less";
import styles1 from "./Page1.less";
import exportColor from "./colorExport.less";
import varColor from "./colorVar.less";

// console.log(styles, 1111)
// console.log(styles1, 1111)
// console.log(exportColor, 1111)
// console.log(varColor, 1111)

import {
  Button,
  Calendar,
  Card,
  DatePicker,
  Empty,
  Layout,
  Radio,
  Space,
  ConfigProvider,
  theme
} from "antd";

import type { RadioChangeEvent } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const { useToken, defaultAlgorithm } = theme;

const App: React.FC = () => {
  const [value, setValue] = useState("default");
  const [colorPrimary, setColorPrimary] = useState(exportColor.pvColorPrimary);
  const styles = value === 'default' ? styles0 : styles1;
  console.log(value)
  // const [colorPrimary, setColorPrimary] = useState("#1e80ff");
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  console.log(useToken())
  const toggleColorPrimary = () => {
    // setColorPrimary(colorPrimary !== "red" ? 'red': '#1e80ff');
    setColorPrimary(colorPrimary !== exportColor.pvColorPrimary ? exportColor.pvColorPrimary : exportColor.pvColorPink );
  }
  console.log(colorPrimary)
  return (
    // default则使用theme.defaultAlgorithm, dark则使用theme.darkAlgorithm
    <ConfigProvider
      theme={{
        algorithm: value === "default" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: {
          motion: false,
          colorPrimary
        },
        // colorPrimary
          // components: {
          //   Button: {
          //     colorPrimary: '#00b96b',
          //     algorithm: true, // 启用算法
          //   },
          //   Input: {
          //     colorPrimary: '#eb2f96',
          //     algorithm: true, // 启用算法
          //   }
          // }
      }}
    >
      <Layout>
        <Layout.Content>
          <Layout.Content>
            <div style={{color: colorPrimary}}>dddddd</div>
            <div className={styles.container}>dddddd</div>
          </Layout.Content>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"default"}>default</Radio>
            <Radio value={"dark"}>dark</Radio>
          </Radio.Group>
          <br />
          <div><Button onClick={toggleColorPrimary}>切换colorPrimary</Button></div>
          <br />
          <Space>
            <DatePicker />
            <Empty />
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Space>
          <br />
          <Space>
            <Radio.Group>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <br />
            <Button type="link">Link</Button>
            <br />
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </Space>
          <br />
          <Space>
            <Calendar fullscreen={false} />
          </Space>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
