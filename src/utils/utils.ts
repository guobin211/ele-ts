/**
 * 限时防抖函数
 * @param fn
 * @param delay
 */
export function throttle(fn: () => void, delay: number) {
    let last = 0, timer: any = null;
    return function () {
        const context = this;
        const args: any = arguments;
        const now = +new Date();
        if (now - last < delay) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(context, args);
            }, delay);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}
