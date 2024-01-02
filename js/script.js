// function 1
function ngitungLuas(){
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    const luas =  (1/2 * parseFloat(alas) ) * (parseFloat(tinggi))
    if(!isNaN(luas)){
    document.getElementById("luas").innerHTML = (`Luas segitiga kamu adalah ${luas} cm^2`);
    } else {
        document.getElementById("luas").innerHTML = ("masukin angkanya ajah pak")
    }
    const hasilLuas = document.getElementById('luas');
    hasilLuas.classList.add('hasilLuas')
}
// funcion 2
function ngitungKeliling(){
    let sisi1 = document.getElementById('sisi1').value;
    let sisi2 = document.getElementById('sisi2').value;
    let sisi3 = document.getElementById('sisi3').value;
    const sum = (parseFloat(sisi1) + parseFloat(sisi2)) + parseFloat(sisi3);
    if(!isNaN(sum)){
        document.getElementById('keliling').innerHTML = (`Keliling segitiga kamu adalah ${sum} cm`)
    } else {
        document.getElementById('keliling').innerHTML = ("angka nya ajah pak")
    }
    const hasilKeliling = document.getElementById('keliling');
    hasilKeliling.classList.add('hasilKeliling');
}
// refresh function
function refresh(){
    const btnRefresh = document.getElementById('btnRefresh');
    btnRefresh.addEventListener("click", () => {
        window.location.reload();
    })
}