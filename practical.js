// function sumNumbers (a,b,c){
    // const d= a+b+c;
    // document.write(d)}

// sumNumbers(2,3,4);

// function tryIncrement(){
    // var a= 7;
    // let b= a++;
    // console.log(a,b);}

// tryIncrement()

// function compNumbers (){
    // const a= 5;
    // const b= 5;
    // const c= 3;
    // if((a==b)||(b==c)){
        // alert("true");}}

// compNumbers()

   // var firstName ="Fidelia";
    //var lastName ="Ewanose";
    //let fullName = firstName+" " +lastName;
    //document.write(fullName);

    //document.write(firstName.charCodeAt(6));

    //var a= 12;
   // b= 20;
    //c= "50";
    //d= c.toString();
    //sum= a+b+d;
    //document.write(sum);

    //var States= ["Abuja", "Edo", "Abia", "Kogi", "Cross-River", "Delta","Ebonyi", "Ekiti", "Kebbi","Lagos"];
    //var text = "<ul>";
   // const StatesLen= States.length;
    //var a= 0
    //for (a; a<StatesLen;a++){
      //  text += "<li>" +  States[a] +"</li>";
    //}
    //text+= "</ul>";
    //document.write(text);
    // States[6];
    // document.write(States[6]);
    // console.log(States);
    // States.toString();
    // document.write(States);
    // let x= States.toString();
    // console.log(x);
    // document.write(States.length);
    // States[States.length-1];
    // document.write(States[States.length-1]);

    //let StatesLen= States.length
    //let h= 0;
    //for (h;h<StatesLen;h++){
      //  console.log(States[h]);
    //}

 //   var person={
        //name:"Mary",
        //height: "6m",
        //sex: "Female",
        //weight: "78kg"
  //  }
//person["name"]
//person["height"]
//person["sex"]
//person["weight"]

//document.write(person.name)
//document.write(person.height)
//document.write(person.sex)
//document.write(person.weight)

//var table= "<table>"
//table+= "<tr>"
//table+= "<th>"
//table+= "property name";
//table+= "</th>";
//table+= "<th>"
//table+= "property name";
//table+= "</th>";
//table+= "</tr>"
//table+= "<tr>"
//table+= "<td>"
//table+= "Name";
//table+= "</td>";
//table+= "<td>"+person.name+"</td>";
//table+= "</tr>"
//table+= "<tr>"
//table+= "<td>"
//table+= "height";
//table+= "</td>";
//table+= "<td>"+person.height+"</td>";
//table+= "</tr>"
//table+= "<tr><td>weight</td>"
//table+= "<td>"+person.weight+"</td>";
//table+= "</tr>"
//table+= "<tr>"
//table+= "<td>"
//table+= "sex";
//table+= "</td>";
//table+= "<td>"+person.sex+"</td>";
//table+= "</tr>"
//document.write(table)

//var cars= [{name: "Toyota", model: "2019"}, 
//{name: "Camry", model:"2024"},
// {name: "volvo", model: "2018"}]
//document.write(cars[0].name)

// var jsobject= [{person: {name: "Mary", height:"6m"},
// cars:{brand: "Toyota", model: "2024"}
// }]

// document.write(jsobject[0].person.name)
// document.write(jsobject[0].person.height)

// var person= {firstName: "Fidelia",
//     lastName: "Ewanose",
//     age: "45",

//     fullName: function(){
//         return this.firstName+ "  "+lastName
//     }
// }

// document.write(person.fullName())

// const date = new Date()
// // function greetings(){
// //     let d=date.getDay();
// //     let day = date.getDate();
// //     let month = date.getMonth();
// //     let year = date.getFullYear();
// //     let hour = date.getHours()

// //     if((d==3)&&(day<=7)){
// //         alert("Happy wednesday of the first week of the month");
//     }
//     if((d==3)&& ((day>=7)&&(day>=14))){
//         alert("Happy wednesday of the second week of the month");
//     }
//     if ((d==3)&& ((day>=15)&&(day>=21))){
//         alert("Happy wednesday of the third week of the month");
//     }
//     if ((d==3)&& ((day>=22)&&(day>=31))){
//         alert("Happy Wednesday of the fourth week of the month");
//     }
// }
// function validateData(){
//     const email=document.getElementById("email");
//     const username=document.getElementById("username");
//     const password=document.getElementById("password");
//     let emailvalue=email.value;
//     let usernamevalue=username.value;
//     let passwordvalue=password.value;
//     let mustExit = "@";
    //alert(emailvalue + " " + usernamevalue + "  " + passwordvalue)
//     if (usernamevalue.length<5){
//         alert("username must contain atleast 5 chars!");
//     }
//         if (passwordvalue.length<7){
//             alert("password length is to small!");
//     }
//     if (!emailvalue.includes (mustExit)){
//         alert("email must incluse @!")
//     }
// }

// function changingEvent(){
//     alert("my value has changed!");

// }

// function greetings(){
//     var day= new Date .getDay()
//     switch(day){
//         case 0:
//             //Do something when case 1 is met
//             alert("happy sunday")
//             break;

//             case 1:
//                 alert("happy monday")
//                 //do something when case 1 is met
//                 break;

                // case 2:
                //     alert("happy tuesday")
                //     //do something when case 2 is met
                //     break;

                // case 3:
                //     alert("happy wednesday")
                //     //do something when case 3 is met
                //     break;

                //     case 4:
                //         alert("happy thursday")
                //         //do something when case 4 is met
                //         break;

                //         case 5:
                //             alert("happy friday")
                //             //do something when case 5 is met
                //             break;

                        //    case 6:
//                                 alert("happy saturday")
//                                 //do something when case 6 is met


//     }
// }
// //greetings()

// var cur = document.getElementById("fromto").value
// var ngn = document.getElementById("ngn");
// let a=Number(ngn.value)

// switch(cur){
//     case "Naira to Dollar":
//         //do something when converting from naira to dollar
//         ngn.value=a/1400;
//         break;
// }
//const cars=["toyota", "volvo","camry"]
// const cars=[{name:"volvo", model: 2019}, {name:"toyota", model: 2014},{name: "camrade", model: 2022} ]
// var text= "<table>";
// text+= cars[0]+ "<br>";
// text+= cars[1]+ "<br>";
// text+= cars[2]+ "<br>";

///for(let i=0; i<cars.length; i++){
  //text+= "<tr><td>" + cars[i].name + "</td>" + "<td>" + cars[i].model +"</td>" +"</tr>"
//}
   // text = cars[i].name +" "+cars[i].model+"<br>";
   // console.log(text);
   //text+= "</table>";
   //document.write(text);

   //while loop syntax


  //  let i=0
  //  while(i<cars.length) {
  //   //doable code goes here
  //    text+= "<tr><td>" + cars[i].name + "</td>" + "<td>" + cars[i].model +"</td>" +"</tr>"
  //    i++;
  //  }
  //  text +="</table>";
  //  document.write(text);

  //  //object oriented programming
   //concept of classes 
  //  class car {
  //   contructor(name, model, year)
  //   name:this.name
  //  }

  // class car {
  //   constructor(name, model, year){
  //     this.carName = name;
  //     this.carModel = model;
  //     this.productionyear = year;
  //   }
  //   age(a){
  //     return a- this.productionyear
  //   }
  // }
  // const car1 = new car("toyota", "toyota 201",2016);
  // const car2 =new car ("volvo", 459, 2023);

  // console.log(car1.carName)
  // console.log(car1.productionyear)
  // // console.log(car2.carModel)
  // // console.log(car.model)
  // let d = new Date();
  // let carYear = d.getFullYear();
  // console.log(car1.age(carYear))

  // //concept of inheritance
  // class man{
  //   constructor(name, age, status){
      //construction method goes here
  //     this.name = name;
  //     this.age = age;
  //     this.status = status;
  //   }
  //   old(){
  //     return this.name  +  " is  " +this.age + "  old  " + "  and  " +this.status;
  //   }
  // }
  // class woman extends man{
  //   constructor(name, age, status, address, phoneNumber){
  //     super(name,age,status);
  //     this.name=name;
  //     this.age=age;
  //     this.status=status;
  //     this.address=address;
  //     this.phoneNumber=phoneNumber;

  //   }

  // }
  // let person1 = new woman("mary", 24, "single", "old cbn block", "08073738117")
  // document.write(person1.old())



//   const name ="mike";
//   const age = 21;
//   const sentence=function(){
//     //do something here
//   }
//   const anotherFunction = function(){
//     alert("this is to demostrate default export method")
//   }
  
// export{
//   name,
//   age,
//   sentence
// }
// export default anotherFunction;


// let content = document.getElementById("div1");
// content.innerHTML = "<h1> this content is to text innerHTML property</h1>"


// function imagechange(){
//   let imageElement=document.getElementById("img1");
//   imageElement.src = "img.36.webp";
//   imageElement.style.width="150px";
//   imageElement.style.height="150px";
// }
// // JS can create html element
// // syntax
// let element=document.createElement("h1")
// let text=document.createTextNode("this is to demonstrate how js element can create html")
// element.appendChild(text);
// content.appendChild(element);

// let list1=document.getElementById("fruits");
// let item1 = document.getElementById("item1");
// let item2 = document.getElementById("item2")
// //list1.removeChild(item1);
// let itemElement = document.createElement("li");
// let itemText = document.createTextNode("apple");
// itemElement.appendChild(itemText)
// list1.insertBefore(itemElement, item2);


// function validinput(){
//   let errorText = document.getElementById("error");
//   try{
//     const inputValue= document.getElementById("userInput")
//     if(inputValue.value=="")
//       throw "input can not be empty";
//     if(isNaN(inputValue.value))
//       throw "value must be a number";
//     let b=number(inputValue.value);
//     if(b < 10)
//       throw "Number must not be less than 10"
//   }
//   catch(error){
//     console.log(error)
//     errorText.innerHTML =error;
//     errorText.style.background="red";
//     errorText.style.color="white";
//     errorText.style.padding="20px";
//     errorText.style.width="fit-content";
//   }
// }

function createData(){
  try{
    let url="https://jsonplaceholder.typicode.com/todos"
    const options={
      method: "POST",
      Headers: {
        Accept: "apllication/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: "Testing API",
        body: "Testing the API using the FETCH",
        userId: "345",
      })
      };
      fetch(url, options)
      .then((response) => response.json())
      .then((data)=>{
        //handle the data here
        console.log(data)
      })

    }catch(error){
      //handle the error here

    }
  }














 
