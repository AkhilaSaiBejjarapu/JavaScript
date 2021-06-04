
var address={
    name:"Akhila",
    city:"Hyderabad",
    state:"Telangana"
}
console.log(address);
 var student1=Object.create(address);
student1.name="Dunnapothu",
 student1.course="Pulihora"
 var student2=Object.create(address);
 student2.name="Red Chilli",
 student2.course="Mass"
 console.log(student1,student2);
