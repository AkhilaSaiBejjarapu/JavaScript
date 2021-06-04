function Laptop(name,brand,price){
   this.lap_name=name;
   this.lap_brand=brand;
   this.lap_price=price;
}
var lap1=new Laptop('lenovo',50000,'ideapad');
console.log(lap1);

var lap2=new Laptop('Del',60000,'intel');
console.log(lap2);
