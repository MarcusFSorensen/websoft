<?php
/**
 * Config file, should be included by all page controllers
 */

// Enable verbose output of error (or include from config.php)
error_reporting(-1);              // Report all type of errors
ini_set("display_errors", 1);     // Display all errors

// Create an array with the connection details
$dsn = [
    "dsn"       => "mysql:host=localhost;port=3306;dbname=websoft;charset=UTF8",  
    "username"  => "root",
    "password"  => "root",
];
