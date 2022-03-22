<?php
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <title>Document</title>
</head>
<body class="">
<header class="p-1 mb-3 border-bottom">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlink:href="#bootstrap"></use>
            </svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary fw-bold">Accueil</a></li>
            <li><a href="#" class="nav-link px-2 link-dark fw-normal">Units</a></li>
            <li><a href="#" class="nav-link px-2 link-dark fw-light">jobs</a></li>
            <li><a href="#" class="nav-link px-2 link-dark fw-lighter">Skill</a></li>
        </ul>
    </div>
</header>

<main class="container-fluid" style="background-color: #DCDCDC">
    <h1 class="text-center fw-light mb-3">LaPlateforme_</h1>
    <div class="d-flex ">
        <div class="card col-2 h-25 ">
            <img src="915144a6.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fs-5">Card title</h5>
                <p class="card-text fs-6 fw-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <a class="btn btn-primary" href="#" role="button">Commander votre propre papillon</a>
            </div>
        </div>
        <div class="col-7 ms-3 ps-2" style="background-color: #E9ECEF">
            <h1 class="fw-light mt-5"> Bonjour le Monde!</h1>
            <p class="fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p class="fs-4 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <hr class="ms-2 me-2 mb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="d-flex justify-content-between mb-5">
                <button type="button" class="btn btn-danger ms-3 mb-5">Rebooter le monde</button>
                <nav aria-label="Page navigation example  " class="float-end mt-5">
                    <ul class="pagination me-3 ">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        <ul class="nav flex-column bg-light ms-3 h-75">
            <li class="nav-item border">
                <a class="nav-link p-3" href="#">L’orgueil</a>
            </li>
            <li class="nav-item border">
                <a class="nav-link p-3" href="#">L’avarice</a>
            </li>
            <li class="nav-item border">
                <a class="nav-link p-3" href="#">La luxure </a>
            </li>
            <li class="nav-item border">
                <a class="nav-link p-3">L’envie</a>
            </li>
            <li class="nav-item border">
                <a class="nav-link p-3">La gourmandise </a>
            </li>
            <li class="nav-item border">
                <a class="nav-link p-3">La colère </a>
            </li>
            <li class="nav-item border">
                <a class="nav-link p-3">La paresse </a>
            </li>
        </ul>
    </div>
    <h5 class=" offset-7 mt-5 mb-0">Installation de AI 9000</h5>
    <div class="container float-center d-flex offset-3">
        <i class="bi bi-arrow-bar-left"></i>
        <div class=" progress col-6 mt-2 ">

            <div class="progress-bar bg-warning p-4 " role="progressbar" style="width: 80%" aria-valuenow="75"
                 aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <i class="bi bi-arrow-bar-right"></i>
    </div>
</main>
</body>
</html>
