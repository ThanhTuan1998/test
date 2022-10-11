function AddNumber(a, b) {
  const res = "";
  const nho = 0;
  while (a.size() < b.size()) a = "0" + a;
  while (a.size() > b.size()) b = "0" + b;
  const len = a.size() - 1;
  for (let i = len; i >= 0; i--) {
    let so = parseInt(a[i] - "0") + parseInt(b[i] - "0") + nho;
    res = charAt((so % 10) + "0") + res;
    nho = so / 10;
  }
  if (nho > 0) res = charAt(nho + "0") + res;
  return res;
  //   return a + b;
}
AddNumber();
console.log(AddNumber(1234, 122));
