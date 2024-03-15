// const cre = document.querySelector('.cre')
// const del = document.querySelector('.del')
// const cle = document.querySelector('.cle')
// const ul = document.querySelector('ul')

// cle.addEventListener('click', () =>{
//     localStorage.clear()
// })
// cre.addEventListener('click', () => {
//     const li = document.createElement('li')
//     li.textContent = localStorage.getItem('word')
//     ul.appendChild(li)
//     localStorage.setItem('word', 'log Out')
// })
// del.addEventListener('click', () =>{
//     const li = document.removeChild('li')
//     li.removeChild(li)
// })

// let ism =  prompt('Ismingizni Kiriitng')
// const res = ism.charAt().toUpperCase().slice(1).toLowerCase()
// const res1 = ism.slice(1).toLowerCase()
// console.log(res + res1);

// const btn = document.querySelector('button')
// const ul = document.querySelector('ul')

// ul.addEventListener('click', (e) =>{
//     e.target.remove()
// })
// btn.addEventListener('click', () =>{
//     const li = document.createElement('li')
//     li.textContent = '<li>contact</li>'

//     ul.appendChild(li)
// })

// const sign = document.querySelector('form')
// const h = document.querySelector('h1')
// sign.addEventListener('submit', (e) =>{
//     const reg = /^[a-zA-Z]{6,12}$/
//     const inp = sign.input.value
//     if(reg.test(inp)){
//         h.textContent = 'succes'
//     }
//     else{
//         h.textContent = 'error'
//     }
//     e.preventDefault()
// })

// const lorem = document.querySelector('.lorem')
// const inp = document.querySelector('.inp')
// const form = document.querySelector('form')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', (e) => {
//     const inp = document.querySelector('.inp')
//     const reg = /^[a-zA-Z]{6,12}$/
//     if(inp.value == reg){
//         lorem.textContent += 'Success'
//     }
//     else{
//         lorem.textContent += 'Error'
//     }
//     console.log(inp.value);
// })

// let button = document.querySelector('button')
// let btn = document.querySelector('.btn')
// button.addEventListener('click', (e) => {
//     let htext = document.querySelector('.succes')
//     let ptext = document.querySelector('p')
//     htext.classList = 'error'
//     ptext.textContent += 'men bosdiz refresh qilin'
// })

// const anketa = [
//     {name: 'Lazizbek', id:1},
//     {name: 'Azizbek', id:1},
//     {fam: 'Abdullayev', id:2},
//     {yil: 2008, id:3},
//     {joy: 'Fargona', id:4},
//     {kasb: 'Dasturchi', id:5},
//     {hobby: 'Pul sanash', id:6},
// ]
// const map = anketa.filter((e) =>{
//     return e.name == 'Lazizbek'
// })
// map.forEach((item) =>{
//     console.log(item);
// })

// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   const text = document.querySelector("h1");
//   const AlertText = document.querySelector(".text");
//   const area = 5;
//   const getText = (text.textContent = Math.trunc(Math.random(area) * 10));
//   console.log("bosildim");

//   AlertText.textContent = `Siz ${getText} tushurdingiz`;
// });

// for red
setInterval(() => {
  const red = document.querySelector(".red");

  red.classList.add("red_active");
}, 2500);
setInterval(() => {
  const red = document.querySelector(".red");

  red.classList.remove("red_active");
}, 3000);

// for orange
setInterval(() => {
  const orange = document.querySelector(".orange");

  orange.classList.add("orange_active");
}, 3000);
setInterval(() => {
  const orange = document.querySelector(".orange");

  orange.classList.remove("orange_active");
}, 3500);

// for green
setInterval(() => {
  const green = document.querySelector(".green");

  green.classList.add("green_active");
}, 3500);
setInterval(() => {
  const green = document.querySelector(".green");

  green.classList.remove("green_active");
}, 4500);
