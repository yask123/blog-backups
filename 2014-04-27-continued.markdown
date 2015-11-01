---
author: yask123
comments: true
date: 2014-04-27 09:58:59+00:00
layout: post
slug: continued
title: Continued..
wordpress_id: 35
tags:
- mysql
- php
- tutorial
---

I will try to keep the code as simple as possible.




Our first step is to connect to database , lets see how that is done.




Create a file (connection.php) 




We use <code>mysql_connect()</code> function which takes host , username and password as the parameters.




The we select the particular database my using function <code>mysql_select_db()</code> It takes the database name as the parameter.





Lets write the whole code altogether




<code>

`


<?php   
  
$dbhost = 'localhost';  
$dbuser = 'root';  
$dbpass = ";




$db = 'my_data';




$conn = mysql_connect($dbhost,$dbuser,$dbpass);




mysql_select_db($db);





?>

`


</code>





Awesome , now lets create the main page Index.php




Here we will 




  * include the connection.php file


  * create a variable $query and select data from the people(table)


  * use the function <code> mysql_query()</code> to obtain the query from the table and store it in the $result variable.


  * Next we create a while loop till the data extracted in the array form runs out


  * Display the elements of Array



Lets write the code




<code>

`


<?php  
include 'connection.php';




$query = "SELECT * FROM people";




$result = mysql_query($query);




while($person = mysql_fetch_array($result))  
{  
echo "<h3>".$person['Name']."</h3>";  
}




echo "<h2>YIPEEE , I finally outputted data from mysql !!</h2>";




echo "GREAT SUCCESS!!!!!!!!!";  
?>




</code>

`
