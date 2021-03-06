<?php $thisPage="history"; ?>
<?php
  include('src/includes/header.php');
?>
  <nain>
    <section class="hero">
      <div class="hero__image">
        <img src="<?php echo cdnURL ?>images/pool.jpg" alt="History Tarapoto">
      </div>
      <div class="history-hero">
        <h2 class="history-hero__title">Tarapoto Resort</h2>
        <p class="history-hero__copy">
          Tarapoto Resort is located in Iquitos, in the heart of Loreto, one of Loreto’s finest food and amenities areas, with stunning river views that since 22 June 1980 have featured on the list of most Latin Amrican's visitied destinations.
        </p>
      </div>
    </section>

    <section class="item">
      <p class="item__copy">Tarapoto Resort strives towards building up a lifelong relationship with its guests. Building upon this ideology, the Resort has laid down four parameters which form the building blocks for such a kind of a strong relationship.
      To be the first priority for the tourists visiting Tarapoto, where they will be appreciable towards the Customer Satisfaction approach of the resort.</p>
    </section>

    <section class="gallery">
      <div class="row">
        <div class="row__image">
          <img src="<?php echo cdnURL ?>images/about.jpg" alt="Experience">
        </div>
        <div class="row__copy">
          <div class="copy-center">
            <h2>Experience</h2>
            <p>All the tourists visiting Tarapoto will experince the best customer service.  Customer Satisfaction is top priority in Tarapoto.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row__image">
          <img src="<?php echo cdnURL ?>images/enchanting.jpg" alt="Enchanting ">
        </div>
        <div class="row__copy">
          <div class="copy-center">
            <h2>Enchanting</h2>
            <p>Situated in the amazon, the mix of traditional Amazonean and contemporary architecture boasts a distinctively sophisticated, able to create a unique atmosphere.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row__image">
          <img src="<?php echo cdnURL ?>images/design.jpg" alt="Design">
        </div>
        <div class= "row__copy">
          <div class="copy-center">
            <h2>Design</h2>
            <p>The warm elegance of the interiors and the exquisite attention to detail come together to shape the inviting ambience of a private home.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class= "row__image">
          <img src="<?php echo cdnURL ?>images/amenities.jpg" alt="Amenities">
        </div>
        <div class= "row__copy">
          <div class="copy-center">
            <h2>Amenities</h2>
            <p>The courtyard, with the beautiful amazon views, terrace and green corners, is the heart of Tarapoto.
            </p>
          </div>
        </div>
      </div>

      <?php
        include('src/includes/menu.php');
      ?>

    </section>
  </nain>
  <?php
    include('src/includes/footer.php');
  ?>




