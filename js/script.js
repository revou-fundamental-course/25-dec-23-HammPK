// function 1
function countWide(){
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    const wideAreas =  (1/2 * parseFloat(base) ) * (parseFloat(height))
    if(!isNaN(wideAreas)){
    document.getElementById("countWide").innerHTML = (`Luas segitiga kamu adalah ${wideAreas} cm^2`);
    } else {
        document.getElementById("countWide").innerHTML = ("masukin angkanya ajah pak")
    }
    const wides = document.getElementById('countWide');
    wides.classList.add('wide')
}
// funcion 2
function countCircumFerence(){
    let side1 = document.getElementById('side1').value;
    let side2 = document.getElementById('side2').value;
    let side3 = document.getElementById('side3').value;
    const sumOfAllSide = (parseFloat(side1) + parseFloat(side2)) + parseFloat(side3);
    if(!isNaN(sumOfAllSide)){
        document.getElementById('circumference').innerHTML = (`Keliling segitiga kamu adalah ${sumOfAllSide} cm`)
    } else {
        document.getElementById('circumference').innerHTML = ("angka nya ajah pak")
    }
    const sumStyle = document.getElementById('circumference');
    sumStyle.classList.add('circumference');
}
// refresh function
function refresh(){
    const btnRefresh = document.getElementById('btnRefresh');
    btnRefresh.addEventListener("click", () => {
        window.location.reload();
    })
}