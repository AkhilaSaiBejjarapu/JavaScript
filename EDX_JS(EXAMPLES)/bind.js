var a={
    name:"akhila",
    location:"Hyderabad",
    address:"Madhapur",
    other_details:function(languages_known,skills){
        console.log(this.name+" "+this.address);
        console.log(languages_known,skills);
    }
}
var b={
    name:"Ashrith",
    location:"Hyderabad",
    address:"Madhapur",
}
var c=["English","positivity"];
// a.other_details();
// a.other_details.call(b);
a.other_details.bind(b,c);