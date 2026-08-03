input = ""

document.getElementById("satu").onclick = function () {
    input = input + "1"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("dua").onclick = function () {
    input = input + "2"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("tiga").onclick = function () {
    input = input + "3"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("empat").onclick = function () {
    input = input + "4"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("lima").onclick = function () {
    input = input + "5"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("enam").onclick = function () {
    input = input + "6"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("tujuh").onclick = function () {
    input = input + "7"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("delapan").onclick = function () {
    input = input + "8"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("sembilan").onclick = function () {
    input = input + "9"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("nol").onclick = function () {
    input = input + "0"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("tambah").onclick = function () {
    input = input + "+"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("kurang").onclick = function () {
    input = input + "-"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("kali").onclick = function () {
    input = input + "*"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("bagi").onclick = function () {
    input = input + "/"
    document.getElementById("tampilan").textContent = input
}
document.getElementById("hapus").onclick = function () {
    input = ""
    document.getElementById("tampilan").textContent = "0"
}
document.getElementById("samadengan").onclick = function () {
    document.getElementById("modalLangganan").classList.add("tampil");
}

document.getElementById("tutupModal").onclick = function () {
    document.getElementById("modalLangganan").classList.remove("tampil");
}