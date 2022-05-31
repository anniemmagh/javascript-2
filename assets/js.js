var number=["one","two","three","four","five"]
 var text = "Numbers:"
for (var i=0; i<number.length; i++){
     document.getElementById("id1").innerHTML+=text+" "+ number[i]+"</br>";
}
function display (salary,x) {
    var income=salary(x)
    alert("salary")
}
var income=500;
if (income<400) {
    var message="dabali xelfasi"
}
else if (income>=400 && income<=500) {
    alert("sashualo xelfasi")
}
else {
    alert=("magali xelfasi")
}
var string1=prompt("xelfasi")
display(income,string1);
var myArray=[15,53,22,198,10,28,16,70,33,951];
var result=myArray.filter((n) =>n%2 ==1)
document.write(result);


