// for (let i = 1 ; i <= 10; i++){
//     console.log('testing ');
//     console.log(i);
// }


//angka genap
// for (let i = 0 ; i <= 20; i+= 2){
//     console.log(i);
// }



//angka ganjil
// for (let i = 1 ; i <= 20; i+= 2){
//     console.log(i);
// }



// const animals = ['kocheng', 'anjing', 'gajah', 'kapibara'];

// for (let i=0; i< animals.length; i++){
//     console.log(i+1 , animals[i]);
// }


// const pilihan = 'ABCD';
// for (let i = 1; i <=5; i++){
//     console.log(`${i}. Soal Nomor  ${i} : ` )
//     for (let j = 0 ; j < pilihan.length ; j++){
//         console.log(`${pilihan[j]}. Pilihan Jawaban ${pilihan[j]} di nomor ${i}`)
//     }
// }



// const StudentRow =[
//     [ 'Olivia', 'Liam', 'Emma', 'Noah'],
//     [ 'Amelia', 'Lily', 'Nisha', 'Ela'],
//     [ 'Sophia', 'Ara', 'Isabel', 'Lucas'],
// ];

// for (let i = 0 ; i < StudentRow.length ; i++ ){
//     const row = StudentRow[i];
//     console.log(`Seat Row # ${i+1}`);
//     for (let j = 0 ; j < row.length ; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }



// let num = 0 ;
// while (num < 10 ){
//     console.log(num);
//     num++;
// }

// for (let num = 0 ; num < 10 ; num++){
//     console.log(num);
// }



// const PASSWORD='password';

// let guest = prompt('Tebak Password : ');
// while (guest !== PASSWORD){
//     guest = prompt('Tebakan anda salah, coba lagi : ');
// }
// alert('Password nya benar ');



// let input = prompt('Tebak Kata : ');
// while (true){
//     input =prompt('Tebak Lagi :');
//     if (input.toLowerCase() === 'stop') break;
// }
// alert('MANTAP');



// let maximum = parseInt(prompt('Masukan Nilai : '));
// while (!maximum){
//     maximum = parseInt(prompt('Masukan Nilai dulu ! : '));
// }

// const targetNum = Math.floor(Math.random() * maximum);
// console.log(targetNum);
// let guess = parseInt(prompt("Isi tebakan Pertamamu : "));
// let attempt = 1;

// while (parseInt(guess) !== targetNum){
//     attempt ++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt("Terlalu tinggi, tebak lagi : "));
//     }
//     else {
//         guess = parseInt(prompt("Terlalu Rendah, tebak lagi : "));
//     }
// }
// alert(`Selamat Tebakan anda benar, dengan ${attempt} tebakan`);




// const StudentRow =[
//     [ 'Olivia', 'Liam', 'Emma', 'Noah'],
//     [ 'Amelia', 'Lily', 'Nisha', 'Ela'],
//     [ 'Sophia', 'Ara', 'Isabel', 'Lucas'],
// ];

// for (let row of StudentRow){
//     for (let Student of row){
//         console.log(Student);
//     }
// }




// const umursiswa = {
//     Olivia : 10,
//     Liam : 11,
//     Emma : 50,
//     Noah : 12,
//     Amelia : 19,
//     Lily : 53 ,
//     Nisha :5 ,
//     Ela : 14 ,
//     Sophia : 49 ,
//     Ara : 69 ,
//     Isabel : 34 ,
//     Lucas : 53
// }

// for (let siswa in umursiswa){
//     console.log(`${siswa} memiliki umur ${umursiswa[siswa]}`)
// }

// let total = 0;
// let scoress = Object.values(umursiswa);
// for (let score of scoress){
//     total += score;
// }

// console.log(total/scoress.length);




//Function 
// function lempardadu(){
//     console.log(Math.floor(Math.random()*6)+1);
// }




// function greet(nama){
//     console.log(`Selamat Pagi ${nama}`);
// }
// greet('RYAN');



// function luasPersegiPanjang(Panjang,Lebar){
//     const total = Panjang * Lebar;
//     console.log(total);
// }



// function jumlahkan(a,b){
//     if (typeof a !== 'number' || typeof b !== 'number'){
//         return 'Masukan Angka !';
//     }
//     return a+b;
// }




// let tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
// }
// console.log(lebar);

// for (let index = 0; index < 10; index++) {
//     var indexnumber = index;
// }
// console.log(indexnumber);



// const perkalian = function (nilai) {
//     return nilai * nilai
// }

// perkalian(10)



// function myfunction(){
//     console.log('Hello World');
//     return 'Hello Mas';
// }

// const MyMath = {
//     perkalian: function(x,y){
//         return x*y;
//     },
// };





// const saya = {
//     nama:  'AIM',
//     hobi: 'Main Gim',
//     kenalan: function() {
//         return `Hi, Saya ${this.nama}. Hobi Saya ${this.hobi}.`;
//     },
// };




// function teriak(msg){
//     try {
//         console.log(msg.toUpperCase());
//     } catch(error) {
//         console.log(error);
//         console.log("Masukan Data tipe string untuk menjalankan aplikasi ");
//     }
// }




// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function(el) {
//     if(el %2 === 0){
//         console.log(el);
//     }
// });




// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num*2;
// })




// const perpangkatan = (x) =>{
//     return x*x;
// }

// const random = () => {
//     return Math.floor(Math.random()* 10);
// };




// console.log('Hallo')

// setTimeout(()=> {
//     console.log('Masih disini ?');
// }, 5000);
// console.log('Saya pergi ya')    

// setInterval(()=>{
//     console.log(Math.random());
// }, 2500);





// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaGanjil = angka.filter (n=> {
//     return n < 5
// });




// const examScore = [80,76,90,100,89,98];
// const isGraduate = examScore.every((score) => score >= 75);





// const subtotal = [1500, 20000, 4000, 19000, 32000, 23500];
// const total = subtotal.reduce((currenttotal, singglesubtotal) => {
//     return currenttotal+singglesubtotal
// })




// const angka =[1,2,3,4,5,6,7,8,9];
// const nama = ['alek', 'boim', 'elang', 'dimas'];
// const campuran = [...angka, 0, 1];




// const nama = ['alek', 'boim', 'elang', 'dimas', 'kipli'];
// const juara = [juara1, juara2, juara3, ...peserta] = nama;




const user = {
    name : 'John',
    email: 'john@gmail.com',
};

const {name:nama, email}= user;
