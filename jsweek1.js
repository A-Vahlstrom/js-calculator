function adding() {
    let a = document.getElementById("numberInput1").value;
    let b = document.getElementById("numberInput2").value;
    let c = parseFloat(a) + parseFloat(b);
    outputBox.innerHTML = c;
}
function subtracting() {
    let a = document.getElementById("numberInput1").value;
    let b = document.getElementById("numberInput2").value;
    let c = parseFloat(a) - parseFloat(b);
    outputBox.innerHTML = c;
}
function multiplying() {
    let a = document.getElementById("numberInput1").value;
    let b = document.getElementById("numberInput2").value;
    let c = parseFloat(a) * parseFloat(b);
    outputBox.innerHTML = c;
}
function dividing() {
    let a = document.getElementById("numberInput1").value;
    let b = document.getElementById("numberInput2").value;
    let c = parseFloat(a) / parseFloat(b);
    outputBox.innerHTML = c;
}
function clearAll() {
    document.getElementById("numberInput1").value = 0;
    numberInput2.value = 0;
    outputBox.innerHTML = 0;
    console.log("hey");
}