/*
 * @Author: Chris
 * @Date: 2023-08-28 14:08:04
 * @LastEditors: Chris
 * @LastEditTime: 2023-08-28 15:57:33
 * @Descripttion: **
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';
import { layout, errors } from './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';
const feedUrl1 = 'http://localhost:9001/$pilet-api';
const feedUrl2 = 'http://localhost:9002/$pilet-api';
const res = [
  {
      "name": "my-pilet",
      "version": "1.0.0",
      "link": "http://localhost:9001/$pilet-api/0/index.js?updated=1693209315027",
      "spec": "v2",
      "requireRef": "webpackChunkpr_mypilet",
      "dependencies": {}
  },
  {
      "name": "my-pilet2",
      "version": "1.0.0",
      "link": "http://localhost:9002/$pilet-api/0/index.js?updated=1693209315027",
      "spec": "v2",
      "requireRef": "webpackChunkpr_mypilet2",
      "dependencies": {}
  }
]
const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi()],
  requestPilets() {
    return Promise.resolve(res)
    // return fetch(feedUrl)
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((res) => res);
    // Promise.all([fetch(feedUrl1), fetch(feedUrl2)]).then(
    //   (res) => res.map(item => item.json())
    // ).then(res => Promise.all(res)
    // ).then(r=>{
    //     console.log(r.flat())
    //     return r.flat()
    //   });
    // return fetch(feedUrl)
    //   .then((res) => res.json()
    //   )
    //   .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
