/**
 * utils
 * @author guobin201314@gmail.com on 2019-04-20
 */

/**
 * 防抖函数
 * @param fn
 * @param delay
 */
export function throttle(fn: () => void, delay: number) {
  // last为上一次触发回调的时间, timer是定时器

  let last = 0, timer: any = null;
  // 将throttle处理结果当作函数返回
  return function () {
    // 保留调用时的this上下文
    const context = this;
    // 保留调用时传入的参数
    const args: any = arguments;
    // 记录本次触发回调的时间
    const now = +new Date();
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
      clearTimeout(timer);
      // tslint:disable-next-line:only-arrow-functions
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
      last = now;
      fn.apply(context, args);
    }
  };
}
