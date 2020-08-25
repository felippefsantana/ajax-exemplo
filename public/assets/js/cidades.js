window.onload = function(){

    var select_estados = document.querySelector('#select-estados');
    var select_cidades = document.querySelector('#select-cidades');

    select_estados.onchange = function(){
        
        let idEstado = this.value;
        
        xmlHttpGet('ajax/cidades', function(){

            beforeSend(function(){
                select_cidades.innerHTML = `<option>Aguarde...</option>`;
            });

            success(function(){
                // console.log(xhttp);

                var cidades = JSON.parse(xhttp.responseText);
                var selectCidades;
                if(cidades.length == 0){
                    selectCidades = `<option>Nenhuma cidade encontrada para esse estado</option>`
                }else{
                    cidades.forEach(function(cidade){
                        selectCidades += `<option>${cidade.nome}</option>`;
                    });
                }
                select_cidades.innerHTML = selectCidades;
            });

        }, '?id='+idEstado);
    }

}