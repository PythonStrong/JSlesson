// BU NAZARIY BIROR NARSA ORGANGANIMDA YOZILADI
// TURLARNI OZGARTIRISH
// let res = Number('15')
// console.log(res +4);

// for loop masalan biror ishni qancha ishlashni belgilash uchcun
// for (let i=0; i<10; i++ ){
//     console.log('ahror');
// }

// const names = ['ahror', 'donyor', 'bekzod']
// for(let i = 0; i<names.length; i++){
//     console.log(names[i]);
// }

// while and dowhile
// const names = ['ahror', 'donyor', 'bekzod']
// let i =0
// while(i < names.length){
//     console.log(names[i].toUpperCase());
//     i++
// }

// dowhile
// let i =0
// do {
//     console.log(i);
//     i++
// } while (i < 5);

// break and continue
// const sonlar = [13, 14, 15, 16, 100, 17, 18]
// for(let i = 0; i<sonlar.length; i++){
//     if(sonlar[i] === 15){
//         continue
//     }
//     console.log(`Sizning natijalarning ${sonlar[i]}`);
//     if(sonlar[i] === 16){
//         console.log('boldi yetadi')
//         break
//     }
// }

// switch case
// const baho = '0';
// switch (baho) {
//   case "5":
//     console.log("sizngni baohiyingiz 5");
//     break
//   case "4":
//     console.log("Siznning bahoyingiz 4");
//     break
//   case "3":
//     console.log("Siznning bahoyingiz 3");
//     break
//   case "2":
//     console.log("Siznning bahoyingiz 2");
//     break
//   default:
//     "siz  baho oldiz";
// }

// argument va paramter
// const hi = function (name) paramteri
//  {
//     console.log(`hayirli kun ${name}`);
// }
// hi('lazizbek') argumenti

// callback function
// const myfun = (callback) =>{
//     let number = 50
//     callback(number)
// }
// myfun(function(velue){
//     console.log(velue);
// })

// objects
// const user ={
//     "name": "lazizbek",
//     "username": "Badullayev",
//     "age": 15
// }
// console.log(user.name);

// this kalit sozi
// const user ={
//     "name": "lazizbek",
//     "username": 'Abdullayev',
//     "age": 15,
//     "langs": ['uzb', 'korean', 'rus', 'eng'],
//     login: function(){
//         console.log("Siz bu saytga kirdingiz");
//     },
//     logout: function(){
//         console.log("Siz bu saytdagi hisobingizdan chiqdingiz");
//     },
//     speak: function(){
//         console.log("I can speak");
//         this.langs.forEach((lang) =>{
//         console.log(lang);
//         })
//     }
// }
// user.speak()

// obektarda array
// const movies = [
//     {name: "titanik", likes: 456},
//     {name: "Harry potter", likes: 484},
//     {name: "Avatar", likes: 987},
//     {name: "Stive JObs", likes: 156},
//     {name: "Sherlock", likes: 574},
// ]
// movies.forEach((item) =>{
//     console.log(item.name);
//     console.log(item.likes);
// })

// Text content && inner html
// const title = document.querySelector('.title')
// title.textContent += ' ' + 'yan'

// const title = document.querySelector('#title')
// title.innerHTML += 'new text' bu italik korinishni ham oladi lekin textcontent olmaydi

// setattribute && getatribut
// const link = document.querySelector('a') sozlarni qoshish uchcun
// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'qalampir.uz')  kerakli joyini ozgartiirsh mumkin
// link.textContent ="qalampir home page"

// const p = document.querySelector('p') class ozgartiirish uchcun
// p.setAttribute('class', 'succes')

// add remove
// const p = document.querySelector('p')
// console.log(p.classList);
// p.classList.add('succes') yana bitta class qoshish
// p.classList.remove('error') class ni olib tashlash

// parebnt children sibling
// const arct = document.querySelector('article')
// Array.from(arct.children).forEach((child) =>{
//     child.classList.add('arctice.child')
// })  hammasiga class berish
// console.log(arct.children); bu arctice ichidagi hamma farzandini chiqarib beradi

// regex inputga qanady malumot kiritishini berish
// [a-z A-z] adan zgacha kichkina katta harflardan iborat bolish kerak degani
// {6,12} nechta son kiritilishi kerakligini aytish uchun
// reg.test bu regexni methodi test qilish uchun
// ism.search() regexga qayerdan boshlab togri kelayotganini rqamada aytib beradi
// const ism = 'lazizbek'
// const reg = /^[a-z A-z]{6,12}$/
// const res = ism.search(reg)
// console.log(res);

// array methods
// filter  malum bir turadigi olib qaytarib beradi
// const movies =[
//     {"name": 'Pubg', "yaer": 1998, "rating": 1},
//     {"name": 'free fire', "yaer": 2001, "rating": 5},
//     {"name": 'Call fo duty', "yaer": 2019, "rating": 2},
//     {"name": 'Counter', "yaer": 2006, "rating": 3},
//     {"name": 'Mobile legends', "yaer": 2001, "rating": 4}
// ]
// const filter = movies.filter((movie) =>{
//     return movie.year < 2010
// })
// console.log(filter);

// map array ichidagi maumotlarnii ozgaririb qaytarib beradi
// const movies =[
//         {"name": 'Pubg', "yaer": 1998, "rating": 1},
//         {"name": 'free fire', "yaer": 2001, "rating": 5},
//         {"name": 'Call fo duty', "yaer": 2019, "rating": 2},
//         {"name": 'Counter', "yaer": 2006, "rating": 3},
//         {"name": 'Mobile legends', "yaer": 2001, "rating": 4}
//     ]
//     const  number = [2,3,4,5]
//     const map = number.map((num) => {
//         return num **2
//     })
//     console.log(map);

// sort  malumotlarni malumo bir korinishda qaytarib ebradi
// const names  = ['donyor', 'sardor', 'alish', 'sarvor']
// const sorted = names.sort()
// console.log(sorted);

// const numbers =[3,5,7,1,2,9]
// const sortnum = numbers.sort((a,b) =>{
//     return a - b
// })
// console.log(sortnum);

// Ternary operation uchlik operatori
// const age = prompt('sizning yoshingizni kriiitng')
// age < 18 ? alert("Siz voyaga yetgansz") : alert("siz voyage yetmagansz")



