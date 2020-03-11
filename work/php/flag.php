<?php

$PageTitle="Flag";

include "view/header.php";
include "view/menu.php";

?> 
<link rel = "stylesheet" type = "text/css" href = "css/flags.css" />
    <div id="content">
        <a href="#" id="draw-denmark">Denmark</a>
        <div id="danishFlag"></div>
        <a href="#" id="draw-sweden">Sweden</a>
        <div id="swedishFlag"></div>
        <a href="#" id="draw-norway">Norway</a>
        <div id="norwayFlag"></div>
    </div>
<script src="js/flags.js"></script> 
<?php include "view/footer.php"; ?>