<?php

$PageTitle="Scools";

include "view/header.php";
include "view/menu.php";

?> 

<h1>List of schools for chosen swedish municipality</h1>
    <input type="button" value="Click me!" onclick="fetchSchools()"/>
    <div id="content">
        <p>Lets fetch and display some data. You need to run this web page using a web server, you can not use <code>file:///</code>.</p>
    </div>

<table id="schools">
    <thead>
    <tr>
        <th>Skolenhetskod</th>
        <th>skolenhetsnamn</th>
        <th>Kommunkod</th>
        <th>PeOrgNr</th>
    </tr>
    </thead> 
<tbody id="teabody"></tbody>
</table>


<?php include "view/footer.php"; ?>