import React, {Component} from 'react';

export default class NetWork extends Component {

  static PostWithJsonParam(action, param, success, failure) {

    let domain = "https://dmzstg1.pa18.com";

    var paramStr = JSON.stringify(param);

    // post请求描述
    var requestDesc = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: paramStr
    };

    // 发送post请求
    fetch(domain + action, requestDesc).then((response) => response.json()).then((json) => {
      success(json);
    }).catch((error) => {
      failure(error);
    })
  }
}