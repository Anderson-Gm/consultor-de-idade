function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade <= 25) {
                //Jorvem
                img.setAttribute('src', 'imagens/rapaz.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade <= 25) {
                //Jorvem
                img.setAttribute('src', 'imagens/moça.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} Anos`
        
        res.style.textAlign = 'center'
        res.appendChild(img)
        
        
    }
}