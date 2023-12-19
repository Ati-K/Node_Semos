console.log("Welcome Node JS.");
console.log("1");
console.log("2");
console.log("3");
//REGULAR OL FUNCTION
function zbir(a, b) {
  return a + b;
}
zbir();
console.log(zbir(5, 5));
// METODI
const ucenik = {
  ime: "Xhoni",
  prezime: "Milioni",
  pozdrav: function () {
    console.log(`Zdravo, ${this.ime}`);
  },
};
ucenik.pozdrav();

// IIFE
(function () {
  console.log("Taen Kod");
})();

//ZADACHA BROJ EDEN.
// DA SE KREIRA FUNKCIJALNA  EKSPRESIJA SO IME c2f KOJA KJE KONVERTIRA CELZIUS U FERENHAJT

const c2f2 = (c) => {
  const fahr = (c * 9) / 5 + 32;
  if (c < 0) {
    console.log("Kochan");
  } else if (c > 0 && c < 22) {
    console.log("Not so kochan");
  } else if (c > 22) {
    console.log("Vrucho");
  }
};
c2f2(5);
