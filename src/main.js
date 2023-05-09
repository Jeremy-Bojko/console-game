const body = document.querySelector('#app');
body.addEventListener('keypress', (e) => {
  console.log(e);
});

console.log('ok');
/**
 * Params
 */
const DIMENSION = 4;

/**
 * Init
 */
const array = new Array(DIMENSION).fill(new Array(DIMENSION).fill('#'));

/**
 * Render
 */
function render() {
  console.log('\n');
  for (let x = 0; x < array.length; x++) {
    let element = '';
    for (let y = 0; y < array[x].length; y++) {
      element += array[x][y];
    }
    console.log(element);
  }
  console.log('\n');
}

render();
