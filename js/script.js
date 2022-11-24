function cambiarDados(){
    let valores = [getNumero(), getNumero(), getNumero()]

    for (let i = 0; i < 3; i++) {
        document.getElementById("dado"+(i+1)).src = './img/lado'+valores[i]+'.png'
    }

    document.getElementById('puntos').innerText = 'Punteo: '+(valores[0]+valores[1]+valores[2])
}

function getNumero(){
    return Math.floor(Math.random() * 6) + 1
}

function cambiarDistribucion(){
    let caras = document.getElementById("caras")
    if (caras.style.flexDirection == 'column') {
        caras.style.flexDirection = "row";
        caras.style.height = '100px'
        caras.style.width = '300px'
    }else{
        caras.style.flexDirection = "column";
        caras.style.height = '300px'
        caras.style.width = '100px'
    }
}

cambiarDados()
