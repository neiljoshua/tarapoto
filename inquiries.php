<?php $thisPage="inquiries"; ?>
<?php 
	include('src/includes/header.php'); 
?>
	<body class="inquiries">
		<!-- <a href="/" class="close">X</a> -->
		<a href="/">
			<img class="logo" src="src/images/logo.png" alt="Tarapoto logo">
		</a>
		<a href="#" class="c-hamburger c-hamburger--rot"><span>toggle menu</span></a>
		<h1 class="page-title">TARAPOTO RESORT</h1>
		<section class="item">
			<p class="item__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue ipsum, pretium eu suscipit et, fermentum vel ligula. Aliquam non purus nibh. 
			</p>

			<p class="item__copy">Integer sed enim augue.</p>

		</section>

		<section>
			<form id="inquiry">
				<fieldset>
					<input type="text" name="first-name" placeholder="First Name">
					<input type="text" name="last-name" placeholder="Last Name">
				</fieldset>
				<fieldset>
					<input type="text" name="email" placeholder="Email">
					<input type="text" name="phone" placeholder="Phone">
				</fieldset>
				<fieldset>
					<input type="text" name="address" placeholder="Address">
					<select name="country">
						<option default>Country*</option>
			            <option value="Afganistan">Afghanistan</option>
			            <option value="Albania">Albania</option>
			            <option value="Algeria">Algeria</option>
			            <option value="American Samoa">American Samoa</option>
			            <option value="Andorra">Andorra</option>
			            <option value="Angola">Angola</option>
			            <option value="Anguilla">Anguilla</option>
			            <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
			            <option value="Argentina">Argentina</option>
			            <option value="Armenia">Armenia</option>
			            <option value="Aruba">Aruba</option>
			            <option value="Australia">Australia</option>
			            <option value="Austria">Austria</option>
			            <option value="Azerbaijan">Azerbaijan</option>
			            <option value="Bahamas">Bahamas</option>
			            <option value="Bahrain">Bahrain</option>
			            <option value="Bangladesh">Bangladesh</option>
			            <option value="Barbados">Barbados</option>
			            <option value="Belarus">Belarus</option>
			            <option value="Belgium">Belgium</option>
			            <option value="Belize">Belize</option>
			            <option value="Benin">Benin</option>
			            <option value="Bermuda">Bermuda</option>
			            <option value="Bhutan">Bhutan</option>
			            <option value="Bolivia">Bolivia</option>
			            <option value="Bonaire">Bonaire</option>
			            <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
			            <option value="Botswana">Botswana</option>
			            <option value="Brazil">Brazil</option>
			            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
			            <option value="Brunei">Brunei</option>
			            <option value="Bulgaria">Bulgaria</option>
			            <option value="Burkina Faso">Burkina Faso</option>
			            <option value="Burundi">Burundi</option>
			            <option value="Cambodia">Cambodia</option>
			            <option value="Cameroon">Cameroon</option>
			            <option value="Canada">Canada</option>
			            <option value="Canary Islands">Canary Islands</option>
			            <option value="Cape Verde">Cape Verde</option>
			            <option value="Cayman Islands">Cayman Islands</option>
			            <option value="Central African Republic">Central African Republic</option>
			            <option value="Chad">Chad</option>
			            <option value="Channel Islands">Channel Islands</option>
			            <option value="Chile">Chile</option>
			            <option value="China">China</option>
			            <option value="Christmas Island">Christmas Island</option>
			            <option value="Cocos Island">Cocos Island</option>
			            <option value="Colombia">Colombia</option>
			            <option value="Comoros">Comoros</option>
			            <option value="Congo">Congo</option>
			            <option value="Cook Islands">Cook Islands</option>
			            <option value="Costa Rica">Costa Rica</option>
			            <option value="Cote DIvoire">Cote D'Ivoire</option>
			            <option value="Croatia">Croatia</option>
			            <option value="Cuba">Cuba</option>
			            <option value="Curaco">Curacao</option>
			            <option value="Cyprus">Cyprus</option>
			            <option value="Czech Republic">Czech Republic</option>
			            <option value="Denmark">Denmark</option>
			            <option value="Djibouti">Djibouti</option>
			            <option value="Dominica">Dominica</option>
			            <option value="Dominican Republic">Dominican Republic</option>
			            <option value="East Timor">East Timor</option>
			            <option value="Ecuador">Ecuador</option>
			            <option value="Egypt">Egypt</option>
			            <option value="El Salvador">El Salvador</option>
			            <option value="Equatorial Guinea">Equatorial Guinea</option>
			            <option value="Eritrea">Eritrea</option>
			            <option value="Estonia">Estonia</option>
			            <option value="Ethiopia">Ethiopia</option>
			            <option value="Falkland Islands">Falkland Islands</option>
			            <option value="Faroe Islands">Faroe Islands</option>
			            <option value="Fiji">Fiji</option>
			            <option value="Finland">Finland</option>
			            <option value="France">France</option>
			            <option value="French Guiana">French Guiana</option>
			            <option value="French Polynesia">French Polynesia</option>
			            <option value="French Southern Ter">French Southern Ter</option>
			            <option value="Gabon">Gabon</option>
			            <option value="Gambia">Gambia</option>
			            <option value="Georgia">Georgia</option>
			            <option value="Germany">Germany</option>
			            <option value="Ghana">Ghana</option>
			            <option value="Gibraltar">Gibraltar</option>
			            <option value="Great Britain">Great Britain</option>
			            <option value="Greece">Greece</option>
			            <option value="Greenland">Greenland</option>
			            <option value="Grenada">Grenada</option>
			            <option value="Guadeloupe">Guadeloupe</option>
			            <option value="Guam">Guam</option>
			            <option value="Guatemala">Guatemala</option>
			            <option value="Guinea">Guinea</option>
			            <option value="Guyana">Guyana</option>
			            <option value="Haiti">Haiti</option>
			            <option value="Hawaii">Hawaii</option>
			            <option value="Honduras">Honduras</option>
			            <option value="Hong Kong">Hong Kong</option>
			            <option value="Hungary">Hungary</option>
			            <option value="Iceland">Iceland</option>
			            <option value="India">India</option>
			            <option value="Indonesia">Indonesia</option>
			            <option value="Iran">Iran</option>
			            <option value="Iraq">Iraq</option>
			            <option value="Ireland">Ireland</option>
			            <option value="Isle of Man">Isle of Man</option>
			            <option value="Israel">Israel</option>
			            <option value="Italy">Italy</option>
			            <option value="Jamaica">Jamaica</option>
			            <option value="Japan">Japan</option>
			            <option value="Jordan">Jordan</option>
			            <option value="Kazakhstan">Kazakhstan</option>
			            <option value="Kenya">Kenya</option>
			            <option value="Kiribati">Kiribati</option>
			            <option value="Korea North">Korea North</option>
			            <option value="Korea Sout">Korea South</option>
			            <option value="Kuwait">Kuwait</option>
			            <option value="Kyrgyzstan">Kyrgyzstan</option>
			            <option value="Laos">Laos</option>
			            <option value="Latvia">Latvia</option>
			            <option value="Lebanon">Lebanon</option>
			            <option value="Lesotho">Lesotho</option>
			            <option value="Liberia">Liberia</option>
			            <option value="Libya">Libya</option>
			            <option value="Liechtenstein">Liechtenstein</option>
			            <option value="Lithuania">Lithuania</option>
			            <option value="Luxembourg">Luxembourg</option>
			            <option value="Macau">Macau</option>
			            <option value="Macedonia">Macedonia</option>
			            <option value="Madagascar">Madagascar</option>
			            <option value="Malaysia">Malaysia</option>
			            <option value="Malawi">Malawi</option>
			            <option value="Maldives">Maldives</option>
			            <option value="Mali">Mali</option>
			            <option value="Malta">Malta</option>
			            <option value="Marshall Islands">Marshall Islands</option>
			            <option value="Martinique">Martinique</option>
			            <option value="Mauritania">Mauritania</option>
			            <option value="Mauritius">Mauritius</option>
			            <option value="Mayotte">Mayotte</option>
			            <option value="Mexico">Mexico</option>
			            <option value="Midway Islands">Midway Islands</option>
			            <option value="Moldova">Moldova</option>
			            <option value="Monaco">Monaco</option>
			            <option value="Mongolia">Mongolia</option>
			            <option value="Montserrat">Montserrat</option>
			            <option value="Morocco">Morocco</option>
			            <option value="Mozambique">Mozambique</option>
			            <option value="Myanmar">Myanmar</option>
			            <option value="Nambia">Nambia</option>
			            <option value="Nauru">Nauru</option>
			            <option value="Nepal">Nepal</option>
			            <option value="Netherland Antilles">Netherland Antilles</option>
			            <option value="Netherlands">Netherlands (Holland, Europe)</option>
			            <option value="Nevis">Nevis</option>
			            <option value="New Caledonia">New Caledonia</option>
			            <option value="New Zealand">New Zealand</option>
			            <option value="Nicaragua">Nicaragua</option>
			            <option value="Niger">Niger</option>
			            <option value="Nigeria">Nigeria</option>
			            <option value="Niue">Niue</option>
			            <option value="Norfolk Island">Norfolk Island</option>
			            <option value="Norway">Norway</option>
			            <option value="Oman">Oman</option>
			            <option value="Pakistan">Pakistan</option>
			            <option value="Palau Island">Palau Island</option>
			            <option value="Palestine">Palestine</option>
			            <option value="Panama">Panama</option>
			            <option value="Papua New Guinea">Papua New Guinea</option>
			            <option value="Paraguay">Paraguay</option>
			            <option value="Peru">Peru</option>
			            <option value="Phillipines">Philippines</option>
			            <option value="Pitcairn Island">Pitcairn Island</option>
			            <option value="Poland">Poland</option>
			            <option value="Portugal">Portugal</option>
			            <option value="Puerto Rico">Puerto Rico</option>
			            <option value="Qatar">Qatar</option>
			            <option value="Republic of Montenegro">Republic of Montenegro</option>
			            <option value="Republic of Serbia">Republic of Serbia</option>
			            <option value="Reunion">Reunion</option>
			            <option value="Romania">Romania</option>
			            <option value="Russia">Russia</option>
			            <option value="Rwanda">Rwanda</option>
			            <option value="St Barthelemy">St Barthelemy</option>
			            <option value="St Eustatius">St Eustatius</option>
			            <option value="St Helena">St Helena</option>
			            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
			            <option value="St Lucia">St Lucia</option>
			            <option value="St Maarten">St Maarten</option>
			            <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
			            <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
			            <option value="Saipan">Saipan</option>
			            <option value="Samoa">Samoa</option>
			            <option value="Samoa American">Samoa American</option>
			            <option value="San Marino">San Marino</option>
			            <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
			            <option value="Saudi Arabia">Saudi Arabia</option>
			            <option value="Senegal">Senegal</option>
			            <option value="Serbia">Serbia</option>
			            <option value="Seychelles">Seychelles</option>
			            <option value="Sierra Leone">Sierra Leone</option>
			            <option value="Singapore">Singapore</option>
			            <option value="Slovakia">Slovakia</option>
			            <option value="Slovenia">Slovenia</option>
			            <option value="Solomon Islands">Solomon Islands</option>
			            <option value="Somalia">Somalia</option>
			            <option value="South Africa">South Africa</option>
			            <option value="Spain">Spain</option>
			            <option value="Sri Lanka">Sri Lanka</option>
			            <option value="Sudan">Sudan</option>
			            <option value="Suriname">Suriname</option>
			            <option value="Swaziland">Swaziland</option>
			            <option value="Sweden">Sweden</option>
			            <option value="Switzerland">Switzerland</option>
			            <option value="Syria">Syria</option>
			            <option value="Tahiti">Tahiti</option>
			            <option value="Taiwan">Taiwan</option>
			            <option value="Tajikistan">Tajikistan</option>
			            <option value="Tanzania">Tanzania</option>
			            <option value="Thailand">Thailand</option>
			            <option value="Togo">Togo</option>
			            <option value="Tokelau">Tokelau</option>
			            <option value="Tonga">Tonga</option>
			            <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
			            <option value="Tunisia">Tunisia</option>
			            <option value="Turkey">Turkey</option>
			            <option value="Turkmenistan">Turkmenistan</option>
			            <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
			            <option value="Tuvalu">Tuvalu</option>
			            <option value="Uganda">Uganda</option>
			            <option value="Ukraine">Ukraine</option>
			            <option value="United Arab Erimates">United Arab Emirates</option>
			            <option value="United Kingdom">United Kingdom</option>
			            <option value="United States of America">United States of America</option>
			            <option value="Uraguay">Uruguay</option>
			            <option value="Uzbekistan">Uzbekistan</option>
			            <option value="Vanuatu">Vanuatu</option>
			            <option value="Vatican City State">Vatican City State</option>
			            <option value="Venezuela">Venezuela</option>
			            <option value="Vietnam">Vietnam</option>
			            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
			            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
			            <option value="Wake Island">Wake Island</option>
			            <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
			            <option value="Yemen">Yemen</option>
			            <option value="Zaire">Zaire</option>
			            <option value="Zambia">Zambia</option>
			            <option value="Zimbabwe">Zimbabwe</option>
					</select>
				</fieldset>
				<fieldset>
					<select name="room-type">
						<option value="Default">Room type</option>
						<option value="Standard">Standard</option>
						<option value="Deluxe">Deluxe</option>
						<option value="Suite">Suite</option>
						<option value="Penthouse">Penthouse</option>
					</select>
					<select name="guests">
						<option value="default">Number of Guests</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</fieldset>
				<button>Submit</button>
			</form>
			<div class="legal">
				<p class="legal__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue ipsum, pretium eu suscipit et, fermentum vel ligula. Aliquam non purus nibh. Ut laoreet urna est, sed elementum ex tincidunt sit amet.</p>

				<p class="legal__copy">Donec pretium vel erat porttitor tincidunt. In fermentum rhoncus leo, at aliquam nulla aliquet vitae. In hac habitasse platea dictumst. Donec aliquam leo semper, venenatis nisl nec, eleifend libero.</p>
			</div>
		</section>
<?php 
	include('src/includes/menu.php');
?>		
<?php 
	include('src/includes/footer.php'); 
?>