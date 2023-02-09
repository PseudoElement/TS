const debounce = (callback, ms) => {
     let timer;
     return function () {
          clearTimeout(timer);
          timer = setTimeout(() => {
               callback.apply(this, arguments);
          }, ms);
     };
};
const input = document.querySelector(`.test`);
const onChange = (e) => {
     console.log(e.target.value);
};
input.addEventListener("input", debounce(onChange, 1000));
