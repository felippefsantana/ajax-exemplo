window.onload = function(){

    var btn_users = document.querySelector('#btn-users');

    var div_users = document.querySelector('#div-users');

    var div_create = document.querySelector('#div-create');
    
    var div_busca = document.querySelector('#div-busca');

    var form_cadastrar = document.querySelector('#form-cadastrar');

    var form_buscar = document.querySelector('#form-buscar');


    function listarUsers(users){
        var table = `<table class='table table-striped'>`;

        table += `<thead><tr><td>ID</td><td>Nome</td><td>Email</td></tr></thead>`;

        table += `<tbody>`;

        users.forEach(function(user){
            table += `<tr>`;

            table += `<td>${user.id}</td>`;

            table += `<td>${user.name}</td>`;

            table += `<td>${user.email}</td>`;

            table += `</tr>`;
        });

        table += `</tbody>`;

        table += `</table>`;

        return table;
    }


    form_buscar.addEventListener('submit', function(event){

        event.preventDefault();

        var form = new FormData(form_buscar);

        xmlHttpPost('ajax/buscar', function(){

            beforeSend(function(){

                div_busca.innerHTML = 'Aguarde, estamos buscando...';

            });

            success(function(){

                // console.log(xhttp.responseText);
                if(xhttp.responseText == 'nouser'){
                    div_busca.innerHTML = 'Nenhum usuário encontrado';
                } else {
                    var users = JSON.parse(xhttp.responseText);

                    div_busca.innerHTML = listarUsers(users);
                }

            });

        }, form);

    });


    form_cadastrar.onsubmit = function(event){

        event.preventDefault();

        var form = new FormData(form_cadastrar);

        xmlHttpPost('ajax/create', function(){

            beforeSend(function(){

                div_create.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;

            });

            success(function(){

                var response = xhttp.responseText;

                if(response == 'cadastrado'){
                    div_create.innerHTML = 'Cadastrado com sucesso!!';
                }
                if(response == 'erro'){
                    div_create.innerHTML = 'Ocorreu um erro, tente novamente!!';
                }

            });

        }, form);

    }


    btn_users.onclick = function(){

        xmlHttpGet('ajax/user',function(){
            
            beforeSend(function(){
                div_users.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;
            });

            success(function(){

                // console.log(xhttp);
                var users = JSON.parse(xhttp.responseText);

                div_users.innerHTML = listarUsers(users);
            });

            error(function(){
                div_users.innerHTML = 'Ocorreu um erro';
            });
        
        }, '?id=1');

    }


    // var select_estados = document.querySelector('#select-estados');
    // var select_cidades = document.querySelector('#select-cidades');

    // select_estados.onchange = function(){
        
    //     let idEstado = this.value;
        
    //     xmlHttpGet('ajax/cidades', function(){

    //         beforeSend(function(){
    //             select_cidades.innerHTML = `<option>Aguarde...</option>`;
    //         });

    //         success(function(){
    //             console.log(xhttp);

    //             var cidades = JSON.parse(xhttp.responseText);
    //             var selectCidades;
    //             if(cidades.length == 0){
    //                 selectCidades = `<option>Nenhuma cidade encontrada para esse estado</option>`
    //             }else{
    //                 cidades.forEach(function(cidade){
    //                     selectCidades += `<option>${cidade.nome}</option>`;
    //                 });
    //             }
    //             select_cidades.innerHTML = selectCidades;
    //         });

    //     }, '?id='+idEstado);
    // }


}