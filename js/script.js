var txt_num = window.document.getElementById('selecao')
var div = window.document.getElementById('tabuada')

function gerar_tabuada(){
    if(Number(txt_num.options[txt_num.selectedIndex].value) == 0){
        window.alert('Escolha um opção para gerar a tabuada.')
    }else{
        div.innerText = ''
        for(let i=1;i<=10;i++){
            div.innerHTML += `<p>${Number(txt_num.options[txt_num.selectedIndex].value)} x ${i} = <input type='number' id='res${i}'></p>`
        }
        window.document.getElementById('corrigir').removeAttribute('hidden')
    }
}

function corrigir(){
    for(let i=1;i<=10;i++){
        if(Number(document.getElementById(`res${i}`).value) == (Number(txt_num.options[txt_num.selectedIndex].value)*i)){
            document.getElementById(`res${i}`).style.boxShadow = '3px 3px 5px #008000'
        }else{
            document.getElementById(`res${i}`).style.boxShadow = '3px 3px 5px red'
        }
    }
}