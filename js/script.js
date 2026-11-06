let horas, min
horas = new Date().getHours()
min = new Date().getMinutes()

document.getElementById("horario").innerHTML = `Agora são ${horas} horas e ${min} minutos.`

if (horas < 12) {
    document.getElementById("saudacao").innerHTML = "Bom dia!"
    img.src = "img/dia.jpg"
    document.body.style.background = "#70afe6"
}
else if (horas >= 12 && horas < 18) {
    document.getElementById("saudacao").innerHTML = "Boa tarde!"
    img.src = "img/tarde.jpg"
    document.body.style.background = "#e4953a"
}
else {
    document.getElementById("saudacao").innerHTML = "Boa noite!"
    img.src = "img/noite.jpg"
    document.body.style.background = "#2a2a2a"
}