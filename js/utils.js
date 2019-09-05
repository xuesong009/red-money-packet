/** utils **/
function animateFn(obj) {
  //body width
  var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth;
  //obj left
  var left = getComputedStyle(obj, null)['left'];
  //obj top
  var top = getComputedStyle(obj, null)['top'];

  //执行动画
  var animateInterval = setInterval(function () {
    if (obj.width <= 0 || obj.height <= 0 || obj.left >= winWidth || obj.top <= 0) {
      clearInterval(animateInterval);
      obj.style.display = 'none';
    } else {
      obj.width -= 10;
      obj.height -= 10;
      left++;
      top--;
      obj.style.left = left + 'px';
      obj.style.top = top + 'px';
    }
  }, 200);
}