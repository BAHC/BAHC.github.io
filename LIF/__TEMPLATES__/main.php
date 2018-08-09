<head>
<meta name="author" value="github.com/BAHC">
<?=$_assets?>
</head>
<body onscroll="myFunction()">

<div id="header">
    <input type="text" name="mapTitle" id="mapTitle" class="mapTitle" placeholder="Town name" title="Название города">
</div>

<div id="navbar">
<?=$_navigation?>
<a id="mapNew" href="/town/" title="Новый город / New Town"><i class="fas fa-plus-square"></i></a>
<a id="saveMap" class="active" href="javascript:void(0)" title="Сохранить">Save</a>
<i id="mapKey" class="fas fa-key"></i><input id="mapPassword" class="mapPassword" type="password" name="mapPassword" placeholder="Password">
<div id="mapMessages">
    <div id="mapInfo"></div>
    <div id="mapError"></div>
</div>
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
