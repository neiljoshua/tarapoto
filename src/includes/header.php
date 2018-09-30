<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0" >
		<meta name="Description" content="Tarapoto Resort, A gem in the Peruvian Amazon">
		<meta title="Tarapoto Resort">
		<meta name="keywords" content="HTML,CSS,JavaScript">
  	<meta name="author" content="Neil McGrath">
		<title>Tarapoto Resort</title>
		<link rel="stylesheet" type="text/css" href="dist/css/styles.css">
		<link rel="stylesheet" type="text/css" href="dist/css/plugins.css">
		<link rel="shortcut icon" href="/src/images/favicon.ico" type="image/x-icon" />
		<script src="dist/js/jquery.min.js"></script>
		<script src="dist/js/vendor.min.js"></script>
		<script src="dist/js/tarapoto.min.js"></script>

	</head>
	<body class="<?php echo $thisPage;?>">
		<header>
			<a href="/" class="logo">
				<img class="logo__image" src="src/images/nazca_monkey_stroke.svg" alt="Tarapoto logo">
			</a>
			<a href="#" class="hamburger hamburger--rot"><span>toggle menu</span></a>
			<?php
				include('src/includes/menu.php');
			?>
		</header>

