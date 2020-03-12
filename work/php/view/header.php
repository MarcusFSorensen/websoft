<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?= isset($PageTitle) ? $PageTitle : "Default Title"?></title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="favicon.ico">
    <?php if (function_exists('customPageHeader')){
      customPageHeader();
    }?>
</head>
<body>





