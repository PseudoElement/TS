const debounce = (callback, ms) => {
  let timer;
  return function () {
    const callbackCall = ()=>{
      callback.apply(this, arguments)
    }
    clearTimeout(timer);
    timer = setTimeout(callbackCall, ms);
  };
};
const input = document.querySelector(`.test`);
const onChange = (e) => {
  console.log(e.target.value);
};
input.addEventListener("input", debounce(onChange, 1000));
