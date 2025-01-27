let string = "hello world";
console.log(typeof(string));

let number = 29;
console.log(typeof(number));

let boolean = true;
let object_null = null;
console.log(object_null);


let array = [1,2,3,4,5];
console.log(typeof(array));


//let maVariable;//type underfined



//les tableaux

//-tableau -01--
let array2 = ["bafou", "batie","bafang","bamenda"];

console.log(array2 [0][2] );//f
console.log(array2.length);//4


//--objet
let person ={
    name:"bafou",
    age:42,
    istrue:true,
    city:"baffang",
    country:"cameroon",
    isnull:null
}
console.log(person.name);
console.log(person.country[1]);


let nom ='myra'
console.log(nom.length);




//--tableau -02

let array3 = ["bafou",42,true,"bafang","bamenda",null,{
    name:"myra",
    age:42,
}];
console.log(array3[6].age);
console.log(array3[6].name);



// affiche 42 

// affiche bamenda ==


//----les objets et plus

let objet = {
    firstname: "rosto",
    lastname: "dev",
    age: 29,
    technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
    admin: false
    }

    console.log(typeof(objet));
    console.log(objet.technos[2]);







    // Stocké les données
let data = [
    {
      firstname: "rosto1",
      lastname: "dev1",
      age: 30,
      technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
      adress: "MarchéB",
      admin: false
    },

    {
      firstname: "rosto2",
      lastname: "dev2",
      age: 29,
      technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
      admin: false
    },

    {
      firstname: "rosto3",
      lastname: "dev3",
      age: 32,
      technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
      admin: true
    },
  ];

  console.log(data[2].technos);
  

  //les structures de controle

  if(data[0].age>data[1].age){
    console.log(data[0].firstname + " est plus age que "+ data[1].firstname);
    
  }else{
    console.log(data[0].firstname + "est plus jeune que " + data[1].firstname);
    
  }
    
    