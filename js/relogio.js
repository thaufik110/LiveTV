function chamaRelogio() {
    var tipoHora = "AM";
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        tipoHora = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var horario = h + ":" + m + ":" + s + " " + tipoHora;
    document.getElementById("Reloginho").innerText = horario;
    document.getElementById("Reloginho").textContent = horario;

    setTimeout(chamaRelogio, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    chamaRelogio();
});
