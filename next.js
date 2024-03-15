// BU NAZARIY BIROR NARSA ORGANGANIMDA YOZILADI

// Math operatorlari
// const area = 8.6
// console.log(Math.trunc(Math.random(area * 10)));
// console.log(Math.round(area)); Sonning eng yaqiniga qarab yaxlitlaydi 7.6 = 8, 7.3 =7
// console.log(Math.floor(area)); -- eng yaqin kihik butun tarafini olib beradi
// console.log(Math.ceil(area)); Eng yaqin kattasiga qarab yaxlitlaydi
// console.log(Math.trunc(area)); sonning qoldigini ob tashlaydi
// const ran = Math.trunc(Math.random() * 10)
// console.log(ran);

// local Storage
// set item()
// let name = 'lazizbek'
// localStorage.setItem('name', name)

// get item ()
// let name = 'lazizbek'
// localStorage.setItem('name', name)
// const get = localStorage.getItem('name')
// console.log(get);

// clear()
// let name = 'lazizbek'
// localStorage.setItem('name', name)
// localStorage.clear()

// trenary operation nom <hodisa beriladi ?agar bu true bolsa shuni bolmasa ikki nuqtadan keyingisini bajaradi : 'are you understand
// const age = prompt('Yoshingzini kiriting', 18)
// age <18 ?alert("Siz voyaga yetgmagansz") :alert('siz voyage yetgansz')

// setTimeout and setInterval
// clearInter val intervalni tozalab tashlash uchun ishlatiladi
// setTimeout setTimeout(() =>{}, 1000) 1000 jsda 1secondga teng
// setTimeout(() =>{
//     console.log('hellow');
// }, 1000)

// setInterval kiritgan second kutadi va ishlaydi
// let a= 0
// let set =setInterval(() => {
// a++
// console.log(a);
// }, 5000)
// setTimeout(() => {
//     clearInterval(set)
// }, 3000)

// Destructing
// const [a, b, gilos, uzum] = ['olma', 'nok', 'gilos', 'uzum'] bu destructing yani qator kod yozishni oldini olish uchun qisqa kod
// const [olma, nok, ...vaboshqalar] = ['olma', 'nok', 'gilos', 'uzum'] bu rest operatori bizga kerakli joynini aohida qolganini arrayga chiqarib beradi
// console.log(olma, nok,  ...vaboshqalar);

// const {name, age, job} ={
//     name: 'ahror',
//     age : 15,
//     job: 'dveloper',
// }
// console.log(name, age, job);

// new Date
// let naw = new Date()
// const today = naw.getDate()
// console.log(today);
// time
// let now  = new Date()
// const hour = now.getHours() < 10 ? '0' +now.getHours() : now.getHours()
// const minute = now.getMinutes() < 10 ? '0' +now.getMinutes() : now.getMinutes()
// const second = now.getSeconds() < 10 ? '0' +now.getSeconds() : now.getSeconds()
// console.log(`${hour}:${minute}:${second}`);

// shallow copy - sayoz nusxalash
// & deep copy - chuqur nusxalash
// ... spread operatori ong tomonda kelsa nusxalash  & agar chap tomonda kelsa distructing operator

// primintive
// let a = 3
//  let b = a
//  b = 7
//  console.log('a:', a);
//  console.log('b:', b);

// reference
// const person ={
// name: 'lazizbek',
// age: 15
// }
//  const newPerson = person
//  newPerson.name = 'Azizbek'
//  newPerson.age = 16
//  console.log(person);
//  console.log(newPerson);

// deep copy
// const person ={
// name: 'lazizbek',
// age: 15
// }
//  const newPerson = {...person}

//  newPerson.name = 'Azizbek'
//  newPerson.age = 16
//  console.log(person);
//  console.log(newPerson);

// Asyncxron JavaScript Web API
// backgroundi malum bir vazifani bajaradijan funksiyalar asinxron funksiyalar diyiladi
// Stack bu jsdagi kod oqish joyi
// web api brauzer imkoniyati
// AJAx Asynchronous Javascipt  And XML --- ajax bizga serverlar bilan asinxron yol bilan boglanish imkoniyatini beradi
// client bu sorov jonatadigan shaxs
// clinet biror narsa qidirayotgan yoki sorov jonatayotgan request
// web serverdan keylayotgan malumot response deyiladi

// APi
// Api aplication programming language
// api bu ikki dasturni bir biri bilan muloqot qlishi yoki malumot almashinishi
// apining turlari
// 1 Dom api
// 2 Gelocation api bu kardinatalar bilan bogliq
// 3 Own class api
// 4 online api [wep api yoki api deb aytiladi]

// promise
// const internet = true
// const getData = () =>{
//     return new Promise((resolve, reject) => {
//         // serverga sorov jonatamiz
//         if(internet){
//             resolve('true')
//         }
//         else{
//             reject('false')
//         }

// })}
// getData().then((item) => {
//     console.log(item);
// })
