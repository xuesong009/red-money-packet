window.onload = function () {
  //wrap
  var wrap = document.getElementById('wrap');

  //total 总金额
  var total = 100;

  /**
   * @Date 2019/9/5
   * @author xuesong009
   * @Description: 红包产生
   */
  function RMP(role, id, value, x, y) {
    //new
    if (this instanceof RMP) {
      //role
      this.role = role;

      //id 编号
      this.id = id;

      //金额
      this.value = value;

      //速度
      this.x = x;
      this.y = y;

      //tag
      this.tag = 'div';
      //class name
      this.className = 'rmp sm-rmp';
      //children
      this.children = [
        {
          'tag': 'div',
          'className': 'rmp-top sm-rmp-top',
        },
        {
          'tag': 'div',
          "className": 'rmp-tip sm-rmp-tip',
          'innerHTML': "&yen;"
        }
      ];

      //create element
      this.createElement = function () {
        var ele = document.createElement(this.tag);
        ele.className = this.className;
        if (this.children) {
          for (var i = 0; i < this.children.length; i++) {
            var child = document.createElement(this.children[i]['tag']);
            child['className'] = this.children[i]['className'];
            if(typeof this.children[i]['innerHTML']!='undefined'){
              child.innerHTML = this.children[i]['innerHTML'];
            }
            ele.appendChild(child);
          }
          ele.style.left = this.x + 'px';
          ele.style.top = this.y + 'px';
          //append to view
          wrap.appendChild(ele);
        }
        return ele;
      };

      var ele = this.createElement();
      var that = this;

      this.timer = setInterval(function () {
        //console.log(this);
        //console.log(document.body.offsetHeight);
        if (that.y >= document.body.offsetHeight) {
          clearInterval(that.timer);
          ele.style.opacity = '0';
          ele.style.display = 'none';
        } else {
          that.x++;
          that.y++;
          ele.style.left = that.x + 'px';
          ele.style.top = that.y + 'px';
          //console.log('AA');
        }
      }, 10);

      /*click event*/
      ele.onclick = function (event) {
        var event = event || window.event;
        clearInterval(that.timer);
        that.role = 'lg';
        ele.className = 'rmp lg-rmp';
        ele.firstElementChild.className = 'rmp-top lg-rmp-top';
        ele.lastElementChild.className = 'rmp-tip lg-rmp-tip';
        var newEle = document.createElement('div');
        newEle.className = 'rmp-bottom lg-rmp-bottom';
        newEle.innerHTML = '<p class="info">大吉大利,新春快乐</p><p class="get-btn">领取红包</p>';
        ele.appendChild(newEle);
        ele = that.createElement();
      };
    } else {
      return new RMP(role, id, value, x, y);
    }
  }

  function getRandom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
  }

  function ranfun(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.random() * choices + lowerValue;
  }

  function cteateRMP() {
    //num 红包数量
    var num = getRandom(1, 10);
    var value;
    // console.log(wrap.offsetWidth);

    var x, splus,
      y = 0;
    var i = 1;
    var createTimer = setInterval(function () {
      if (i > num) {
        clearInterval(createTimer);
      } else {
        value = getRandom(1, 100);
        x = getRandom(0, wrap.offsetWidth);
        splus = getRandom(-10, 5);
        x += splus;
        y += splus;
        RMP('sm', i, value, x, y);
        i++;
      }
    }, 220);
  }

  //test
  //var rmp = new RMP('sm', 150, 380, 56, 23);
  cteateRMP();


};
