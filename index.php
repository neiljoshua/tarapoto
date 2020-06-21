<?php $thisPage="home"; ?>
<?php
  include('src/includes/header.php');
?>
  <main>
    <?php
      include('src/includes/preloader.php');
    ?>
    <video poster="/dist/images/tarapoto.jpg" playsinline autoplay loop muted class="home__video">
      <source src="/dist/videos/tarapoto.mp4" type="video/mp4" />
      <source src="Browsing.webm" type="video/webm" />
      <img src="/dist/images/tarapoto.jpg" alt="Tarapoto Resort">
      <p>Your browser doesn't support HTML5 video. Here is
         a <a href="/dist/videos/tarapoto.mp4">link to the video</a> instead.</p>
    </video>
    <?php
      include('src/includes/menu.php');
    ?>
    <h1 class="home__title center">Tarapoto Resort</h1>
  </main>
  <?php
    include('src/includes/footer.php');
  ?>
