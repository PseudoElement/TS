let a = 10;
function addOne() {
  if (a > 20) return a;
  console.log(a);
  a++;
  addOne();
}
// addOne();
const ball = document.querySelector(".ball");
// function rotateBall() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       ball.style.cssText = `left: 50%;
//             transform: rotate(180deg)`;
//       resolve();
//     }, 1000);
//   })
//     .then(
//       () =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             ball.style.cssText = `left: 10%;`;
//             resolve();
//           }, 1000);
//         })
//     )
//     .then(() => rotateBall());
// }
// rotateBall();
// const start = `10%`;
// const end = `50%`;
// let position = start;
// function rotateBall() {
//   setTimeout(() => {
//     ball.style.left = position;
//     position === start ? (position = end) : (position = start);
//     rotateBall();
//   }, 1000);
// }
(async function rotateBall() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        ball.style.cssText = `left: 50%;
                  transform: rotate(180deg)`;
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        ball.style.cssText = `left: 10%;`;
        resolve();
      }, 1000);
    });
    rotateBall();
  } catch (e) {
    console.log("MY ERROR:" + e);
  }
})();
