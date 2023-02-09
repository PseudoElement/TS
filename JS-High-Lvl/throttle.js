function throttle(func, ms) {
      let isThrottle = false;
      let savedArgs;
      let savedThis;
      function wrapper() {
            if (isThrottle) {
                  savedArgs = arguments;
                  savedThis = this;
                  return;
            }
            func.apply(this, arguments);
            isThrottle = true;
            setTimeout(() => {
                  isThrottle = false;
                  if (savedArgs) {
                        wrapper.apply(savedThis, savedArgs);
                        savedArgs = savedThis = null;
                  }
            }, ms);
      }
      return wrapper;
}
