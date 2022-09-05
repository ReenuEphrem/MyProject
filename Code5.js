for(m=1;m<10;m+=2){
    console.log(m)
}

for(n=1;n<12;n+=2){
   if(n<12)
    console.log(n)
}

var data = {a: 1, b :2 ,c :3}
var t = 0;
for(var text in data){

var value=data[text]
 t=value
console.log(t)
}

var data = {a: 1, b :2 ,c :3}
var t = 0;
for(var text in data){
    var value=data[text]
    t=value
}
console.log(data)
