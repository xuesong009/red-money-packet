/** utils **/
function animateFn(obj) {
  //body width
  var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth;

  //flag
  var flag = {
    left: parseInt(getComputedStyle(obj, null)['left']),
    top: parseInt(getComputedStyle(obj, null)['top'])
  };

  //执行动画
  var animateInterval = setInterval(function () {
    if (flag.width <= 0 || flag.height <= 0 || flag.left >= winWidth || flag.top <= 0) {
      clearInterval(animateInterval);
      obj.style.display = 'none';
    } else {//变小(css),向右上方收款处运动
      flag.left += 20;
      flag.top -= 10;
      obj.style.left = flag.left + 'px';
      obj.style.top = flag.top + 'px';
    }
  }, 200);
}

/*option = {
  type: 'type/get',
  url: 'http://www.baidu.com',
  data: '75',
  success: function (data) {
    console.log(data);
  }
};*/

//http
function http(option) {
  //创建xhr
  var xhr = new XMLHttpRequest();
  //请求行
  if (option.type == 'get' && option.data) {
    option.url += '?';
    option.url += option.data;
    option.data = null;
  }
  xhr.open(option.type, option.url);

  if (option.type == 'post' && option.data) {
    //请求头
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }

  //请求主体
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var type = xhr.getResponseHeader('Content-type');
      if (type.indexOf('xml') != -1) {//xml?
        option.success(xhr.responseXML);
      } else if (type.indexOf('json') != -1) { //json?
        option.success(JSON.parse(xhr.responseText));
      } else { //string?
        option.success(xhr.responseText);
      }
    }
  };
  //发送
  xhr.send(option.data);
}