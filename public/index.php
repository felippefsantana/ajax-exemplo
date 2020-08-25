<?php require '../config.php'; ?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"><!-- BOOTSTRAP -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- FONT AWESOME(ICONES) -->
</head>
<body>
    
    <div class="container">

        <div class="row">

            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#cidades">Cidades</a></li>
                <li><a data-toggle="tab" href="#home">Users</a></li>
                <li><a data-toggle="tab" href="#menu1">Cadastrar</a></li>
                <li><a data-toggle="tab" href="#menu2">Busca</a></li>
            </ul>

            <div class="tab-content">

                <div id="cidades" class="tab-pane fade in active">
                    <br>
                    <?php 
                        $estado = new app\models\Estado;
                        $estadosEncontrados = $estado->all();
                    ?>
                    <form action="" class="form-inline">
                        <div class="form-group">
                            <select id="select-estados" class="form-control">
                                <option value="" selected="selected">Escolha um estado</option>
                                <?php foreach($estadosEncontrados as $estado): ?>
                                <option value="<?php echo $estado->id_estado; ?>"><?php echo utf8_encode($estado->nome); ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                        <div class="form-group">
                            <select id="select-cidades" class="form-control">
                                <option value="">Escolha uma cidade</option>
                            </select>
                        </div>
                    </form>
                    <hr>

                    <div id="users"></div>

                </div>

                <div id="home" class="tab-pane">
                    <br>
                    <button id="btn-users" class="btn btn-primary btn-xs">Listar users</button>
                    <hr>
                    <div id="div-users"></div>
                </div>

                <div id="menu1" class="tab-pane face">
                    <br>
                    <div id="div-create"></div>
                    <form action="" method="POST" id="form-cadastrar" enctype="multipart/form-data">

                        <div class="form-group">
                            <label for="">Nome</label>
                            <input type="text" class="form-control" name="name" placeholder="Nome">
                        </div>

                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="text" class="form-control" name="email" placeholder="Email">
                        </div>

                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    
                    </form>
                </div>

                <div id="menu2" class="tab-pane fade in">
                    <br>
                    <form action="" id="form-buscar">
                    
                    <input type="text" name="name">
                    <button type="submit">Buscar</button>
                    <hr>
                    <div id="div-busca"></div>

                    </form>
                </div>

            </div>
            <hr>

        </div>
    </div>

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="assets/js/user.js"></script>
    <!-- <script src="assets/js/cidades.js"></script> -->
    <script src="assets/js/xhttp.js"></script>
</body>
</html>