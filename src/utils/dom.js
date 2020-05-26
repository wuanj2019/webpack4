export function isShow(el, n = 1, p = 0) {
  console.log("isShow");
  const clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const elTop = el.getBoundingClientRect().top;
  return elTop * n + p < clientHeight;
}

export function isShowX(el, n = 1, p = 0) {
  console.log("isShowX");

  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const elLeft = el.getBoundingClientRect().left;
  return elLeft * n + p < clientWidth;
}

export function add(el, n = 1, p = 0) {
  console.log("add");

  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const elLeft = el.getBoundingClientRect().left;
  return elLeft * n + p < clientWidth;
}

export function sub(el, n = 1, p = 0) {
  console.log("sub");

  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const elLeft = el.getBoundingClientRect().left;
  return elLeft * n + p < clientWidth;
}
