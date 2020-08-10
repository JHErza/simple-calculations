// var speaker = {
//     name: "X",
//     color: "rose gold",
//     model: "Xleader",
//     sentence: function (){
//         return "i love "  + this.name + " it's color is  " + this.color + " and the model " + this.model;
//     }
// }

// console.log(speaker.name);

// for (x in speaker){
//     var txt = "";
//     txt += speaker[x] + " ";
//     console.log(txt);
// }

// console.log(speaker.sentence())


var car = {
    name: "Tesla",
    color:"black",
    horsePower: "500",
    sentence:function (){
        return "this car is a" + this.name + ", " + this.color + ", " + this.horsePower;
    }
}
// console.log(car);


// for (x in car ) {
//     var txt = "";
//     txt += car [x] + " ";
// }

// console.log(txt);

car.size = "mid-size";
car.start = function() {
    return console.log("Start your engine");
}

console.log (car.start);



delete car.start;
console.log(car);