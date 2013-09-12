<html>
<head><title>Shell executer</title>
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="EasyJax.js"></script>
<script type="text/javascript" src="shell.js"></script>
<style type="text/css">
div.credentials {
	text-align: center;
}
input#cmd {
	width: 500px;
}
div.query-results {
/*	display: none;*/
}
</style>
</head>
<body>
<?
/*
<div class="credentials">
Server: <input type="text" id="host">
Username: <input type="text" id="username">
Password: <input type="password" id="password">
Database: <input type="text" id="db">
</div>
*/
?>
<div class="query-results">
<input type="text" id="cmd">
<div id="results"></div>
</div>
</body></html>