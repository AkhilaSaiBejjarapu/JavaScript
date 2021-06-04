var obj1={
    name:"Akhila",
    location:"Hyderbad",
    address:505326,
    office:"TCS",
    more_details:function(salary){
           console.log(this.name+" "+ " "+this.location+" "+" "+this.address+" "+" "+this.office);
           console.log(salary);
    }

}
var obj2={
    name:"Yedava",
    location:"hyderabad",
    address:505001,
    office:"TATA"
}
var add1=[30000];
var add2=[70000];
obj1.more_details.apply(obj1,add1);
obj1.more_details.apply(obj2,add2);