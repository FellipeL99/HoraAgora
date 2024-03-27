function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'manha2.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#7bd3f7'
    } else {
        // Boa noite
        img.src = 'noite2.png'
        document.body.style.background = '#515154'

    }
}