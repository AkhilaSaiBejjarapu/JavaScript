
    var obj1={
        name:"Akhila",
        Place:"Hyderabad",
        Age:21,
        details:function(){
            console.log(this.name+"  "+this.Place+"  "+this.Age);
        }
    }
    obj1.details();
    var obj2={
              name:"Ashrith",
              Place:"Korutla",
              Age:18
    }
    obj1.details.call(obj2);
