function resultado() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados digitados!')
    } else 
        {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            
        }
            if (fsex[0].checked) 
                {genero = 'Homem'
                if (idade >= 0 && idade < 10)
                {//criança
                    res.innerHTML = `Detectamos uma  criança com ${idade} anos`
                    img.setAttribute('src', 'imagem/bm.png')
                    img.style.width = '300px'
                    img.style.padding = '15px'
                    
                }

                else if (idade <= 25) 
                    {//jovem
                        res.innerHTML = `Detectamos um  jovem com ${idade} anos`
                    img.setAttribute('src', 'imagem/jm.png')
                    img.style.width = '300px'
                    img.style.padding = '15px'
                    }
                else if (idade < 50) 
                {// adulto
                    res.innerHTML = `Detectamos um  adulto com ${idade} anos`
                    img.setAttribute('src', 'imagem/am.png')
                    img.style.width = '300px'
                    img.style.padding = '15px'
                }
                else {
                    //idoso
                    res.innerHTML = `Detectamos um senhor da melhor idade com ${idade} anos`
                    img.setAttribute('src', 'imagem/velho.png')
                    img.style.width = '300px'
                    img.style.padding = '15px'
                }
            }
            else  if (fsex[1].checked)
            {genero = 'Mulher'
            if (idade >= 0 && idade <= 10)
                {//criança
                    res.innerHTML = `Detectamos uma  criança com ${idade} anos`
                    img.setAttribute('src', 'imagem/bf.png')
                    img.style.width = '300px'
                    img.style.padding = '15px'
                }

                else if (idade <= 25) 
                    {//jovem
                        res.innerHTML = `Detectamos uma  jovem com ${idade} anos`
                        img.setAttribute('src', 'imagem/jf.png')
                        img.style.width = '300px'
                        img.style.padding = '15px'
                    }
                else if (idade <50) 
                {// adulto
                    res.innerHTML = `Detectamos uma  senhorita com ${idade} anos`
                    img.setAttribute('src', 'imagem/af.png')
                    img.style.width = '300px'
                    img.style.padding = '15px'
                }
                else {
                //idoso
                res.innerHTML = `Detectamos uma  senhora com ${idade} anos`
                img.setAttribute('src', 'imagem/senhora.png')
                img.style.width = '300px'
                img.style.padding = '15px'
               
                }
        
        }
        
        res.style.textAlign = 'center'
        res.appendChild(img)
        

    }