function date(){
    var timestamp=new Date();
    var dmy=timestamp.getDate()+"/"+timestamp.getMonth()+"/"+timestamp.getFullYear();
    var hms=timestamp.getHours()+":"+timestamp.getMinutes()+":"+timestamp.getSeconds();
    return dmy+"-"+hms;
    
}
console.log(date());