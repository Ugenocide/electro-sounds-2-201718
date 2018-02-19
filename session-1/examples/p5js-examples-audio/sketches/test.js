// local before global
let i = 0;
function setup() {
		fn();
}

function fn() {
  const c = 0;
  c = 1; // error, not allowed
  console.log(c);
}
