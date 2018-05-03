 
 
 <html>
        <head>
                <title></title>
        </head>
        
		
			<script>
               document.addEventListener("scroll", yScroll);

function yScroll() {

  var yPos = window.pageYOffset;

  if (yPos > 10) {
    document.getElementById("top-btn").style.bottom = "10px";
  } else {
    document.getElementById("top-btn").style.bottom = "-50px";
  }
}

function ScrollTop() {

  var i = window.pageYOffset;

  var intervalTimer = setInterval(function() {
    if (i > 0) {
      window.scrollTo(0, i);
      i -= 15;
    } else {
      document.getElementById("top-btn").style.bottom = "-50px";
      clearInterval(intervalTimer);
    }
  }, 0.5);
}
	 
                </script>
				<style>
				/* Roboto Font (Not important) */

@import url(https://fonts.googleapis.com/css?family=Roboto);

/* Style button */

#top-btn {
  width: 50px;
  height: 50px;
  bottom: -50px;
  right: 20px;
  position: fixed;
  text-align: center;
  border-radius: 100px;
  background-color: #3DCC8E;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.12), 3px 4px 8px 0px rgba(0, 0, 0, 0.11);
  -webkit-transition: all .8s;
  transition: all .8s;
}

#top-btn:hover {
  background-color: #1aa469;
}

#top-btn:hover i {
  padding-top: 5px;
}

#top-btn i {
  padding-top: 15px;
  font-size: 20px;
  /line-height: 50px;
  color: #FFFFFF;
  -webkit-transition: all .8s;
  transition: all .8s;
}




/* Not important */

* {
  margin: 0;
  padding: 0;
}


/* Set height from div so it's scrollable */

#main {
  height: 2000px;

}

/* ------- */
				</style>
				
				<body>
				<!-- Font icons -->


<div id="main">

 

</div>

<!-- Button -->
<div onclick="ScrollTop()" id="top-btn">
  <i class="fa fa-angle-up"></i>
</div>
<!-- -->
        </body>
</html>
 
 