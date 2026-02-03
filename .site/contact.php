<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>SNF Forms - Medical Forms</title>
<link href="css/main.css" rel="stylesheet" type="text/css">
<link href="css/pages.css" rel="stylesheet" type="text/css">
<link href="css/dd.css" rel="stylesheet" type="text/css">
<link href="css/print.css" rel="stylesheet" type="text/css" media="print">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.supersleight.js"></script>
<script type="text/javascript" src="js/jquery.clearfield.packed.js"></script>
<script type="text/javascript" src="js/jquery.maximage.js"></script>
<script type="text/javascript" src="js/jquery.dd.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>
<body><img src="images/bg.jpg" id="bgImage" alt>
<div id="container">
<div id="dropdown_container"><div id="dropdown" class="iepngfix"></div></div>
<div id="menu_container" class="iepngfix">
<div id="menu">
<ul class="menu">
	<li id="menu_home"><a href="index.html"><img src="images/logo_small.png" width="20" height="26" alt border="0" id="menu_home_logo">Home&nbsp;&nbsp;</a></li>
	<li id="menu_contact"><a href="contact.php">Contact Us</a></li>
	<li id="menu_login"><a href="login.php">Corporate Login</a></li>
	<li id="menu_signup"><a href="sign-up.php">Sign Up</a></li>
	<li id="menu_catalogue_search"><a href="javascript:void(0);"><div id="menu_search_spacer">&nbsp;</div>Form Catalog</a></li>
</ul>
<div id="menu_search"><form action method="get" id="search_form" name="search_form"><input type="image" src="images/menu_search_icon.png" width="22" height="22" border="0" id="menu_search_icon"><input name="q" type="text" value id="menu_search_query"></form></div>
</div>
</div>
<div id="dropdown_container2"><div id="dropdown_content"></div></div>
<div id="content_wrap">
<div id="menu_space"></div>
<div style="padding-top: 100px; width: 984px; margin: 0 auto;">
<form action="process_contact.php" method="post">
<table border="0" cellspacing="5" cellpadding="0" align="center" style="line-height: 30px; font-size: 14px;">
	<tr>
		<td align="right" style="color: #808285;">Name:</td>
		<td width="259"><input name="contact_name" type="text" value class="text_input" maxlength="255"></td>
		<td align="right" style="color: #808285;">Email:</td>
		<td width="259"><input name="contact_email" type="text" value class="text_input" maxlength="255"></td>
	</tr>
	<tr>
		<td align="right" style="color: #808285;">Organization:</td>
		<td><input name="contact_organization" type="text" value class="text_input" maxlength="255"></td>
		<td align="right" style="color: #808285;">Phone:</td>
		<td><input name="contact_phone1" type="text" value class="text_input_3digit" maxlength="3"><input name="contact_phone2" type="text" value class="text_input_3digit" maxlength="3"><input name="contact_phone3" type="text" value class="text_input_4digit" maxlength="4"></td>
	</tr>
	<tr>
		<td align="right" style="color: #808285;">Address:</td>
		<td><input name="contact_address" type="text" value class="text_input" maxlength="255"></td>
		<td align="right" style="color: #808285;">City:</td>
		<td><input name="contact_city" type="text" value class="text_input" maxlength="255"></td>
	</tr>
	<tr>
		<td align="right" style="color: #808285;">Zip:</td>
		<td><input name="contact_zip" type="text" value class="text_input" maxlength="10"></td>
		<td align="right" style="color: #808285;">State:</td>
		<td><select name="contact_state" style="width: 259px;" class="select_dropdown">
<option value>Select State</option>
<option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select></td>
	</tr>
	<tr>
		<td align="right" style="color: #808285;" valign="top"><div style="line-height: 18px; padding-top: 5px;">Questions/<br>Comments</div></td>
		<td colspan="3"><textarea name="contact_comments" class="textarea_input"></textarea></td>
	</tr>
</table>
<input name="submit" type="hidden" value="Submit">
<div style="text-align: center; margin-top: 15px;"><input type="image" src="images/button_send.gif" alt="Send" border="0"></div>
</form>

<div style="font-size: 14px; text-align: center; padding-top: 100px; line-height: 17px;">Corporate Headquarters<br>
15532 Computer Lane, Huntington Beach, CA<br>
Phone: (714) 901-6868<br>
Fax: (714) 901-6858</div>

</div>
<div id="footer_space"><div id="footer2"><img src="images/modman-logo.gif" width="41" height="13" alt="ModMan" style="float: right; margin-top: 12px;"><img src="images/clear.gif" width="41" height="13" alt style="float: left; margin-top: 12px;">&copy; SNF Forms 2026.</div></div>
</div>
</div>
<div id="footer"><img src="images/modman-logo.gif" width="41" height="13" alt="ModMan" style="float: right; margin-top: 12px;"><img src="images/clear.gif" width="41" height="13" alt style="float: left; margin-top: 12px;">&copy; SNF Forms 2026.</div>
</body>
</html>
