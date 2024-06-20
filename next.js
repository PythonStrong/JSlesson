// BU NAZARIY BIROR NARSA ORGANGANIMDA YOZILADI

// Math operatorlari
// const area = 8.6
// console.log(Math.trunc(Math.random(area * 10)));
// console.log(Math.round(area)); Sonning eng yaqiniga qarab yaxlitlaydi 7.6 = 8, 7.3 =7
// console.log(Math.floor(area)); -- eng yaqin kihik butun tarafini olib beradi
// console.log(Math.ceil(area)); Eng yaqin kattasiga qarab yaxlitlaydi
// console.log(Math.trunc(area)); sonning qoldigini ob tashlaydi
// const ran = Math.trunc(Math.random() * 10)
// console.log( ran);

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

Vue.filter('zerofill', function (value) {
    //value = ( value < 0 ? 0 : value );
    return ( value < 10 && value > -1 ? '0' : '' ) + value;
  });
  
  var Tracker = Vue.extend({
    template: `
    <span v-show="show" class="flip-clock__piece">
      <span class="flip-clock__card flip-card">
        <b class="flip-card__top">{{current | zerofill}}</b>
        <b class="flip-card__bottom" data-value="{{current | zerofill}}"></b>
        <b class="flip-card__back" data-value="{{previous | zerofill}}"></b>
        <b class="flip-card__back-bottom" data-value="{{previous | zerofill}}"></b>
      </span>
      <span class="flip-clock__slot">{{property}}</span>
    </span>`, 
    props: ['property','time'],
    data: () => ({
      current: 0,
      previous: 0,
      show: false
    }),
    
    events: {
      time(newValue) {
        
        if ( newValue[this.property] === undefined ) { 
          this.show = false; 
          return;
        }
        
        var val = newValue[this.property];
        this.show = true;
        
        val = ( val < 0 ? 0 : val );
        
        if ( val !== this.current ) {
    
          this.previous = this.current;
          this.current = val;
    
          this.$el.classList.remove('flip');
          void this.$el.offsetWidth;
          this.$el.classList.add('flip');
        }
        
      }
    },
  
  });
    
  
    
  var el = document.createElement('div');
  document.body.appendChild(el);
  
  var Countdown = new Vue({
    
    el: el,
    
    template: ` 
    <div class="flip-clock" data-date="2017-02-11" @click="update">
      <tracker 
        v-for="tracker in trackers"
        :property="tracker"
        :time="time"
        v-ref:trackers
      ></tracker>
    </div>
    `,
  
    props: ['date','callback'],
  
    data: () => ({
      time: {},
      i: 0,
      trackers: ['Days', 'Hours','Minutes','Seconds'] //'Random', 
    }),
  
    components: {
      Tracker
    },
    
    beforeDestroy(){
      if ( window['cancelAnimationFrame'] ) {
        cancelAnimationFrame(this.frame);
      }
    },
    
    watch: {
      'date': function(newVal){
        this.setCountdown(newVal);
      }
    },
    
    ready() {
      if ( window['requestAnimationFrame'] ) {
        this.setCountdown(this.date);
        this.callback = this.callback || function(){};
        this.update();
      }
    },
    
    methods: {
      
      setCountdown(date){
        
        if ( date ) {
          this.countdown = moment(date, 'YYYY-MM-DD HH:mm:ss');
        } else {
          this.countdown = moment().endOf('day');  //this.$el.getAttribute('data-date');
        }
      },
      
      update() {
        this.frame = requestAnimationFrame(this.update.bind(this));
        if ( this.i++ % 10 ) { return; }
        var t = moment(new Date());
        // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
        if ( this.countdown ) { 
          
          t = this.countdown.diff(t);
          
          //t = this.countdown.diff(t);//.getTime();
          //console.log(t);
          this.time.Days = Math.floor(t / (1000 * 60 * 60 * 24));
          this.time.Hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          this.time.Minutes = Math.floor((t / 1000 / 60) % 60);
          this.time.Seconds = Math.floor((t / 1000) % 60);
        } else {
          this.time.Days = undefined;
          this.time.Hours = t.hours() % 13;
          this.time.Minutes = t.minutes();
          this.time.Seconds = t.seconds();
        }
        
        this.time.Total = t;
        
        this.$broadcast('time',this.time);
        return this.time;
      }
    }
  });