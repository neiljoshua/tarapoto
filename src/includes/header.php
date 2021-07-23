<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Tarapoto Resort</title>
    <?php
    define('cdnURL', 'https://cdn.tarapoto.neiljoshua.dev/');
    ?>
    <meta charset="utf-8">
    <meta title="Tarapoto Resort">
    <meta name="Description" content="Tarapoto Resort, A gem in the Peruvian Amazon">
    <meta name="keywords" content="HTML,CSS,jQuery,Webpack">
    <meta name="author" content="Neil McGrath">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0" >
    <link rel="shortcut icon" href="<?php echo cdnURL ?>images/favicon.ico" type="image/x-icon" />
    <link href="<?php echo cdnURL ?>styles.css" rel="stylesheet">
    <script async src="<?php echo cdnURL ?>jquery.bundle.js"></script>
    <script async src="<?php echo cdnURL ?>dropkickjs.bundle.js"></script>
    <script src="<?php echo cdnURL ?>main.bundle.js"></script>
  </head>
  <body <?php echo "class=\"$thisPage\""; ?> >
    <header>
      <a href="/" class="logo" rel="noopener">
        <img class="logo__image" src="<?php echo cdnURL ?>images/nazca_monkey_stroke.svg" alt="Tarapoto logo">
      </a>
      <a href="#" class="hamburger hamburger--rot" rel="noopener"><span>toggle menu</span></a>
    </header>

