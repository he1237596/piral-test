/*
 * @Author: Chris
 * @Date: 2023-09-19 16:57:51
 * @LastEditors: Chris
 * @LastEditTime: 2023-09-19 18:47:05
 * @Descripttion: **
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function setup(app) {
  // const configSchema = {
  //   type: 'object',
  //   properties: {
  //     increment: {
  //       type: "number",
  //       description: "Defines the value to add when the counter is clicked.",
  //     },
  //   },
  // };
  // const defaultConfig = {
  //   increment: 1,
  // };

  // app.defineConfigSchema(configSchema, defaultConfig);

//   app.registerPageLayout('standard', ({ children }) => (
//   <>
//     <div>header</div>
//     {/* <Navigation /> */}
//     {children}
//     <div>footer</div>
//   </>
// ));
console.log(app)
app.registerMenu(() => <Link to="/standard">standard</Link>);

app.registerPage('/standard', () => {

  const [count, setCount] = React.useState(0);

  return <>
    <div>header</div>
    <button onClick={ev => {
          setCount(count => count + increment);
          ev.preventDefault();
        }}>add</button>
    {/* <Navigation /> */}
    <div>footer</div>
  </>
});
}