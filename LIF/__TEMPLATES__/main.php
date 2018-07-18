<head>
<meta name="author" value="github.com/BAHC">
<?=$_assets?>
</head>
<body onscroll="myFunction()">

<div id="header">
    <input type="text" name="mapTitle" id="mapTitle" class="mapTitle" placeholder="Название города">
</div>

<div id="navbar">
<?=$_navigation?>
<a id="saveMap" class="active" href="javascript:void(0)">Сохранить</a>
<input id="mapPassword" class="mapPassword" type="password" name="mapPassword">
</div>

<div class="content">
<?=$_content?>
</div>

<script>
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
</script>

</body>
</html>
