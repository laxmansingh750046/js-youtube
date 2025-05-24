// let myarray = ["flash", "batman", "superman", "wonderwoman", "aquaman"];
// myarray.forEach((item)=>console.log(item));


// myarray.forEach((item, index ,array)=>{
//     console.log(item, index, array);
// });

 // Array of objects
 let heroes = [
  { name: "Flash", power: "Super speed", universe: "DC" },
  { name: "Batman", power: "Intelligence", universe: "DC" },
  { name: "Superman", power: "Strength", universe: "DC" },
  { name: "Wonder Woman", power: "Warrior skills", universe: "DC" },
  { name: "Aquaman", power: "Underwater control", universe: "DC" }
];


heroes.forEach((prop)=>{
    console.log(prop.power);
});