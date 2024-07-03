function convertColor(r,g,b){
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function () {
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r <<16 )+ (g << 8)+b).toString(16).slice(1);
    }


    return color;
}

// function Color (r,g,b){
//     this.r = r ;
//     this.g = g ;
//     this.b = b ;

// }

// Color.prototype.rgb = function () {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;

// };

// Color.prototype.hex = function () {
//     const {r,g,b} = this;
//     return '#' + ((1 << 24) + (r <<16 )+ (g << 8)+b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a=1.0) { 
//     const {r,g,b} = this;
//     return `rgba(${r},${g},${b}, ${a})`
// };


// class Color {
//     constructor(r,g,b,name){
//         this.r =r;
//         this.g =g;
//         this.b =b;
//         this.name =name;
//     }

//     innerRGB(){
//         const {r,g,b} = this;
//         return `${r},${g},${b}`;
//     }

//     colorName(){
//         console.log('the color name is '+ this.name);
//     }

//     rgb(){
//         return `rgb(${this.innerRGB})`;
//     }

//     rgba(a = 1.0){
//         return `rgba(${this.innerRGB},${a})`;
//     }

//     hex(){
//         const {r,g,b} = this;
//         return '#' + ((1 << 24) + (r <<16 )+ (g << 8)+b).toString(16).slice(1);
//     }
// }

// new Color();

class Peliharaan {
    constructor(name, age){
        console.log('Parent Executed')
        this.name = name;
        this.age = age;
    }

    makan(){
        return `${this.name} lagi makan`
    }
}
class Kucing extends Peliharaan{

    constructor(name,age,lives){
        console.log('Child Executed')
        super(name,age);
        this.lives = lives;
    }
    suara(){
        return `Meongg`;
    }
}

class Anjing extends Peliharaan{
    suara(){
        return `Guk Guk Guk`;
    }
}