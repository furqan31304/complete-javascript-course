// let myName="Muhammad Furqan";
// let age=23;
// let single=true;
// console.log('type of Name is ',typeof myName);
// console.log('type of Age is ',typeof age);
// console.log('type of Status is ',typeof single);


// Coding Challange

// Test One
// let mark_mass= 78;
// let john_mass= 92;
// let mark_height=1.69;
// let john_height=1.95;
// let john_BMI=john_mass/john_height**2;
// let mark_BMI=mark_mass/mark_height**2;
// let markHigherBMI=mark_BMI>john_BMI;
// console.log("Mark BMI is Higher? ",markHigherBMI)

// 2nd Test
// let mark_mass= 95;
// let john_mass= 85;
// let mark_height=1.88;
// let john_height=1.76;
// let john_BMI=john_mass/john_height**2;
// let mark_BMI=mark_mass/mark_height**2;
// let markHigherBMI=mark_BMI>john_BMI;
// console.log("Mark BMI is Higher? ",markHigherBMI)



// let myName="Muhammad Furqan";
// let myAge=23;
// let fatherName='Manzoor Hussain';
// const furqan="I'm "+myName +" my age is "+ myAge + " my father is "+fatherName;
// console.log(furqan);

// // backticks
// const mydata=`I am  ${myName}, my age is ${myAge}, my father is ${fatherName}`;
// console.log(mydata)


// IF Else Operators
const age=12;
if(age>=18){
    console.log('Furqan can drive a car now');
}
else{
    console.log('He is under 18')
    console.log(`Furqan needs ${18-age} years to drive car`);
}


// 2nd Challenge Using if else statement    
// let mark_mass= 78;
// let john_mass= 92;
// let mark_height=1.69;
// let john_height=1.95;
// let john_BMI=john_mass/john_height**2;
// let mark_BMI=mark_mass/mark_height**2;
// let markHigherBMI=mark_BMI>john_BMI;
// if(mark_BMI>john_BMI){
//     console.log(`Mark's BMI is higher than John's!\nMark's BMI is ${mark_BMI}`)
// }
// else{
//     console.log(`John's BMI is higher than Mark's!  \n
//     John's BMI is ${john_BMI}` )
// }

// let team_gogi_average_score=(300+300+129)/3;
// let team_shoky_average_score=(88+91+110)/3;
// if(team_gogi_average_score>=100&& team_gogi_average_score>=team_shoky_average_score){
//     console.log(`Team Gogi Won the Match with ${team_gogi_average_score} points`);
// }
// else if(team_shoky_average_score>=100 &&team_shoky_average_score>=team_gogi_average_score){
//     console.log(`Team Shoky Won the Match with ${team_shoky_average_score} points`);
// }
// else{
//     console.log('Match WithDraw')
// }


// 4th Task

let x=275;
const tip=x>=50&&x<=300?x*(15/100):x*(20/100);
console.log(`Bill is ${x}`);
console.log(`Tip is ${tip}`);
console.log(`Bill with tip is ${tip+x}`);

