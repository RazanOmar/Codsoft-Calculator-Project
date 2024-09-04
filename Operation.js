//Display the values on the textfield
function Display(val){
   var v = document.getElementById('res');
   v.value += val;
}
//Operate on the values
 function Operation(val){
    let x = document.getElementById('res').value
    let y = eval(x);
    document.getElementById('res').value = y
    return y    
 }
 //Clear the textfield
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 //Erase 1 value from the text field
// function Erase(){

// }