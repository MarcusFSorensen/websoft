<?php

require "config.php";
require "src/functions.php";

$label = $_POST["label"] ?? null;
$type = $_POST["type"] ?? null;
$create = $_POST["create"] ?? null;

if($create){
    $db = connectDatabase($dsn);

    //create new item
    $sql = "INSERT INTO tech (label, type) VALUES(?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->execute([$label, $type]);

    //Get results to show an item has been created
    $sql = "SELECT * FROM tech";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $res = $stmt->fetchAll();
}

$PageTitle="Create";

include "view/header.php";
include "view/menu.php";

?> 
<form method="post">
    <fieldset>
        <legend>Create</legend>
        <p>
            <label>Label:
                <input type="text" name="label" placeholder="Enter label">
            </label>
        </p>
        <p>
            <label>Type:
                <input type="text" name="type" placeholder="Enter type">
            </label>
        </p>
        <p>
            <input type="submit" name="create" value="Create">
        </p>
    </fieldset>
</form>

<?php if($res ?? null) : ?>
    <table>
        <tr>
            <th>Id</th>
            <th>Label</th>
            <th>Type</th>
        </tr>

    <?php foreach ($res as $row) : ?>
        <tr>
            <td><?= $row["id"] ?></td>
            <td><?= $row["label"] ?></td>
            <td><?= $row["type"] ?></td>
<?php endforeach;?>

</table>

<?php endif; ?>

<?php include "view/footer.php";?>