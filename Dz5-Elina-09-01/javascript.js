// const API_KEY = '9240a6a33fd36ebdfaf01c9ecdc733a9'
// const baseUrl = 'http://data.fixer.io/api/latest?access_key='
//
// async  function getCurrency() {
//     const req = await  fetch(`${baseUrl}${API_KEY}`)
//     const data = await  req.json()
//     console.log(data)
//
// }
// getCurrency()
//
// const select = document.querySelectorAll('.currency');
// const btn = document.getElementById('btn');
// const input = document.getElementById('input');
// const result = document.getElementById('result');
//
// fetch ("https://api.frankfurter.app/currencies")
//     .then((data) => data.json())
//     .then((data) => {
//         display(data);
//     });
// // const API_KEY = '9240a6a33fd36ebdfaf01c9ecdc733a9'
// // const baseUrl = 'http://data.fixer.io/api/latest?access_key='
// //
// // async  function getCurrency() {
// //     const req = await  fetch(`${baseUrl}${API_KEY}`)
// //     const data = await  req.json()
// //     console.log(data)
// //
// // }
// // getCurrency()
//
// function display(data) {
//     const entries = Object.entries(data);
//     for (let i = 0; i < entries.length; i++){
//         select[0].innerHTML += `<option value="${entries[i][0]}">${entries[0][1]}</option>`
//         select[1].innerHTML += `<option value="${entries[i][0]}">${entries[0][1]}</option>`
//     }
// }
//
// btn.addEventListener("click", () =>{
//     let currency1 = select[0].value;
//     let currency2 = select[1].value;
//     let value = input.value;
//
// if(currency1 != currency2){
//     convert(currency1, currency2, value);
// }else {
//     alert("Choose Different Currencies")
// }
// });
//
// function convert(currency1, currency2, value) {
//     const host = "api.frankfurter.app";
//     fetch
//     {
//         `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
//     }
//
//
//     .then((val) => val.json())
//         .then((val) => {
//             console.log(Object.values(val.rates)[0]);
//             result.value = Object.values(val.rates)[0];
//         });
//
// }
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Different Currencies !!!");
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      ans.value = Object.values(val.rates)[0];
    });
}
