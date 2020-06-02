function load_content(page_title) {
	// var nav_content = '';
	// if (page_title == 'index') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link active"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }
	// else if (page_title == 'call_for_papers') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link active"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'keynote') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link active"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'important_dates') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link active"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'committee') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link active"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'authors') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link active" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'registration') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link active" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'program') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link active"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'accommodation') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link active" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'nearby') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link active"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	// else if (page_title == 'contact') {
	// 	nav_content = '<nav class="navbar navbar-default"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="navbar-collapse-1"><ul class="nav nav-pills"><li class="nav-link"><a href="index.html">Home</a></li><li class="nav-link"><a href="call_for_papers.html">Call for Papers</a></li><li class="nav-link"><a href="important_dates.html">Important Dates</a></li><li class="nav-link"><a href="committee.html">Committee</a></li><!-- li class="nav-link"><a href="authors.html">For Authors</a></li><li class="nav-link"><a href="registration.html">Registration</a></li> --><li class="nav-link" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a><ul class="dropdown-menu"><li class="nav-link"><a href="authors.html">Submission Guidelines</a></li><li class="nav-link"><a href="registration.html">Registration</a></li><li class="nav-link"><a href="accommodation.html">Accommodation</a></li></ul></li><li class="nav-link"><a href="program.html">Program</a></li><li class="nav-link"><a href="keynote.html">Keynote Speakers</a></li><li class="nav-link"><a href="nearby.html">Nearby Attractions</a></li><li class="nav-link active"><a href="contact.html">Contact Us</a></li></ul></div></nav>';
	// }

	var nav_content = '<nav class="navbar navbar-default">\
						<div class="navbar-header">\
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">\
								<span class="sr-only">Toggle navigation</span>\
								<span class="icon-bar"></span>\
								<span class="icon-bar"></span>\
								<span class="icon-bar"></span>\
							</button>\
						</div>\
						<div class="collapse navbar-collapse" id="navbar-collapse-1">\
							<ul class="nav nav-pills">\
								<li id="index" class="nav-link"><a href="/">Home</a></li>\
								<li id="call_for_papers" class="nav-link"><a href="/call_for_papers">Call for Papers</a></li>\
								<li id="important_dates" class="nav-link"><a href="/important_dates">Important Dates</a></li>\
								<li id="authors" class="nav-link"><a href="/authors">Guidelines to Authors</a></li>\
								<li id="registration" class="nav-link"><a href="/registration">Registration</a></li>\
								<!--<li id="accomodation" class="nav-link"><a href="/accommodation">Accommodation</a></li>-->\
								<!--<li id="authors" class="nav-link" class="dropdown">\
									<a class="dropdown-toggle" data-toggle="dropdown" href="#">Author Info<span class="caret"></span></a>\
									<ul class="dropdown-menu">\
										<li class="nav-link"><a href="authors.html">Submission Guidelines</a></li>\
										<li class="nav-link"><a href="registration.html">Registration</a></li>\
										<li class="nav-link"><a href="accommodation.html">Accommodation</a></li>\
									</ul>\
								</li>-->\
								<!--<li id="crc" class="nav-link"><a href="crc.html">CRC Info</a></li>\
								<li id="program" class="nav-link"><a href="program.html">Program</a></li>\
								<li id="keynote" class="nav-link"><a href="keynote.html">Keynote Speakers</a></li>\-->\
								<!--<li id="nearby" class="nav-link"><a href="/nearby">Key Attractions</a></li>-->\
								<li id="committee" class="nav-link"><a href="/committee">Committee</a></li>\
								<li id="contact" class="nav-link"><a href="/contact">Contact Us</a></li>\
							</ul>\
						</div>\
						</nav>';

	var header_html = '    <style>        #myBtn {            display: none;            position: fixed;            bottom: 20px;            right: 30px;            z-index: 99;            font-size: 16px;            border: none;            outline: none;            background-color: #035ab3;            color: white;            cursor: pointer;            padding: 12px;            border-radius: 4px;          }</style>                  <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>        <script>                // When the user scrolls down 20px from the top of the document, show the button                window.onscroll = function() {scrollFunction()};                                function scrollFunction() {                  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {                    document.getElementById("myBtn").style.display = "block";                  } else {                    document.getElementById("myBtn").style.display = "none";                  }                }                                // When the user clicks on the button, scroll to the top of the document                function topFunction() {                  document.body.scrollTop = 0;                  document.documentElement.scrollTop = 0;                }                </script><div class="row text-center"><div class="col-md-2 "><a href="index.html"><img class="logo_nitk" src="resource/img/nitk_logo_color.jpeg" alt="nitk_logo">                    </a></div>   <div class="col-md-8">	<span style="color:#035ab3; text-shadow: 1px 1px 4px rgb(180, 219, 219);">	   <h3>National Conference <br>on<br></h3><h2><strong>Convergence of Management Practices <br>in the Era of Industry 4.0 </strong> <h2><h3> July 22 - 23, 2020 </h3></span><a href="http://www.nitk.ac.in" target="_blank" data-toggle="tooltip" title="Visit NITK Website"><h3>National Institute of Technology Karnataka Surathkal, India</h3></a> </div>	<div class="col-md-2 "><a href="index.html"><img class="logo_dj"  src="resource/img/DJ_logo.jpg" alt="DJ_logo"> </a></div>      </div><!--Menu section-->'+nav_content+'<!--slider section--->	<div id="myCarousel" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li><li data-target="#myCarousel" data-slide-to="4"></li><li data-target="#myCarousel" data-slide-to="5"></li><li data-target="#myCarousel" data-slide-to="6"></li></ol><!-- Wrapper for slides --><div class="carousel-inner"><div class="item active"><img src="resource/img/slide_aerial1.png" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption"><h2>NITK Surathkal</h2><p>Aerial View</p></div></div><div class="item"><img src="resource/img/lighthouse.jpg" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption"><h2>Light House</h2><p>Surathkal</p></div></div><div class="item "><img src="resource/img/nitk4.jpeg" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption"><h2>NITK Surathkal</h2><p>During Night</p></div></div><div class="item"><img src="resource/img/Yakshagana.jpg" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption"><h2>Yakshagana</h2><p>Traditional theatre form</p></div></div><div class="item"><img src="resource/img/Peacock.jpg" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption">			<h2>Peacock in the campus</h2><p>Indian National Bird</p></div></div><div class="item"><img src="resource/img/slider_images/nitk3.png" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption"><h2>NITK Beach</h2><p>Private beach of NITK</p></div></div><div class="item"><img src="resource/img/slider_images/kudremukha.jpeg" alt="" style="width: 1200px; height: 400px"><div class="carousel-caption"><h2>Kudremukha</h2><p>Mountain range nearby</p></div></div></div><!-- Left and right controls --><a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div><!--End slider section---><marquee onmouseover="this.stop();" onmouseout="this.start();" style="color:red;" behavior="scroll" direction="left" scrollamount="10">THE CONFERENCE WILL NOW BE CONDUCTED THROUGH ONLINE MODE  || <!--<a href="important_dates.html" target="_blank">Click Here</a> to know more about updated important dates.--></marquee>-->';

	var footer_html = '<footer><center><h5 style="color: #D3D3D3;">Developed &amp; Maintained by School of Management, NITK Surathkal. Copyright &copy; SOM 2020.</h5></center></footer>';

	document.getElementById('header_content').innerHTML = header_html;
	document.getElementById('footer_content').innerHTML = footer_html;

	document.getElementById(page_title).setAttribute("class", "nav-link active");

}
