##1.备注
仿红包雨效果;

##2.分析
###2.1 基本尺寸
比例放大
<1> sm:
  给定width;
  height/width = 1.3;

<1-1> sm-rmp-top:
  width = height = 60;
  left = -(width - sm.width)/2;
  top = -height/2;

<1-2> sm-rmp-tip:
  width = height = 20;
  left = (width - sm.width)/2;
  top = (sm-rmp-top.height - height)/2;

<2> lg :
  给定width 160;
  lg.height = lg.width/sm.width * sm.height;

<2-1> lg-rmp-top:
  width = height = lg.width160/sm.width50 * sm-rmp-top.width60;
  left = -(width - lg.width)/2;
  top = -height/2;

<2-2> lg-rmp-tip:
  width = height = lg-rmp.width/sm-rmp.width * sm-rmp-tip.width;
  left = (width - lg.width)/2;
  top = (lg-rmp-top.height - height)/2;

<2-3> lg-rmp-bottom:
  width: 100%;
  height: 55px;
  padding-bottom: 15px;

###2.2 动态效果
####2.2.1 数据
数量(num) 随机;
每个红包的金额(money) 不同;
每个红包的运动速度(speed) 不同,加速度(accelerated speed) --> top,left;
路程(y) document.body.offsetHeight;

距离顶部 top = y;
运动至底部(>=y) 逐渐消失(opacity:1 --> 0,display:none);

点击红包 动画 显示金额 提示存入钱包;

####2.2.2 动态

