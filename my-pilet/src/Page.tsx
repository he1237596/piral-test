/*
 * @Author: Chris
 * @Date: 2023-08-28 14:28:42
 * @LastEditors: Chris
 * @LastEditTime: 2023-08-28 16:49:35
 * @Descripttion: **
 */
import * as React from 'react';

// export default ({ piral }) => {
//   console.log(piral)
//   return (
//     <>
//       <h1>这是pilet1</h1>
//       <div>下面是page2中注册扩展组件后，在page1中作为extension使用</div>
//       <piral.Extension name='page2-extension' />
//     </>
//   );
// };
export default ({ Example }) => {
  return (
    <>
      <h1>这是pilet1</h1>
      <div>下面是page2中注册扩展组件后，在page1中作为extension使用</div>
      <Example />
    </>
  );
};
