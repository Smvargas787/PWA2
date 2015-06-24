/*  
	Your Project Title
	Author: You
	Week 3
*/

(function($){

 	

/* ======================= tooltip ======================= */ 

	$('.masterTooltip').hover(function(){
	  // Hover over code
	  var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>')
		  .text(title)
		  .appendTo('body')
		  .fadeIn('slow');
	}, function() {
	  // Hover out code
	  $(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
	}).mousemove(function(e) {
	  var mousex = e.pageX + 20; //Get X coordinates
	  var mousey = e.pageY + 10; //Get Y coordinates
		$('.tooltip')
		.css({ top: mousey, left: mousex })
	});

  
/* ======================= Project Modal======================= */	
	
	$('.modalClick').on('click', function(e){
		e.preventDefault();
		$('#overlay')
			.fadeIn()
			.find('#modal')
			.fadeIn();
	});
	
		
	$('.close').on('click', function(e){
		e.preventDefault();
		$('#overlay')
		.fadeOut()
		.find('#modal')
		.fadeOut();
	});
	

/* ======================= Fading Status Option for Modal ======================= */	

	$('.mystatus').mouseover(function(){
		$(this).fadeTo(100, 3);
	});

	$('.mystatus').mouseout(function() {
		$(this).fadeTo(100, 1);
	});



/* ======================= Accordion For Projects Page ======================= */	


	$('#tabs p').hide().eq(0).show();
	//$('#tabs p:not(:first)').hide();
	
	$('#tabs-nav li').click(function(e) {
		e.preventDefault();
		  $('#tabs p').hide();
	
	$('#tabs-nav .current').removeClass("current");
	  $(this).addClass('current');
		var clicked = $(this).find('a:first').attr('href');
		
	  $('#tabs ' + clicked).fadeIn('fast');
	}).eq(0).addClass('current');
	


/* ======================= Login ======================= */

	$('#signinButton').on('click' , function(e){
		e.preventDefault();
		var user = $('#user').val();
		var pass = $('#pass').val();
		//console.log("This notifies you if the password is working");
		$.ajax({
			url:'xhr/login.php',
			type: 'post',
			dataType: 'json',
			data: {
				username: user,
				password: pass
			},
			success:function(response){
				console.log("Test User");
				if(response.error) {
					alert(response.error);
				}else{
					window.location.assign('admin.html');
				};
			}
		});
	});



		
	
/* ======================= Register ======================= */	
	$("#register").on("click", function(e){
		e.preventDefault();
		var firstname = $('#first').val(),
			lastname = $('#last').val(),
			username = $('#userName').val(),
			email = $('#email').val(),
			password = $('#password').val();
	//	console.log(firstname+'  '+lastname' '+username+' '+email+' '+password');

		$.ajax({
			url:'xhr/register.php',
			type: 'post',
			dataType: 'json',
			data: {
				firstname: firstname,
				lastname: lastname,
				username: username,
				email: email,
				password: password
			},

			success:function(response){
				if(response.error) {
					alert(response.error);
				}else{
					window.location.assign('admin.html');
				}
			}
		})
	});
	
	
	
	
	
	
	
/* ======================= Display Username ======================= */

	$.getJSON("xhr/check_login.php", function(data){
		console.log(data);
		$.each(data, function (key, val) {
			console.log(val.first_name);
			$(".userid").html("Welcome User: " + val.first_name);
		})
	});
	
	
	


/* ======================= Go to Profile page ======================= */


	$('#profilebtn').on('click', function(e){
		e.preventDefault();
		window.location.assign('profile.html');
	});

    
/* ======================= Go to projects page ======================= */	

	$('.projectsbtn').on('click' , function(e){
		e.preventDefault();
		window.location.assign('projects.html');
	});

	
	
	
		
			  
/* ======================= Go to add projects page ======================= */	

	$('.addbtn').on('click' , function(e){
		e.preventDefault();
		window.location.assign('add.html');
	});

/* ======================= Go to Projects page ======================= */

	$('.dashboard').on('click', function(e){
		e.preventDefault();
		window.location.assign('admin.html');
	});





	/* ======================= Go to Update Account page ======================= */

	$('.accountbtn').on('click', function(e){
		e.preventDefault();
		window.location.assign('profile.html');
	});


/* ======================= New Projects ======================= */	





$('#addButton').on('click' , function (e) {
	e.preventDefault();
	var projName = $('#projectName').val(),
		projDesc= $('#projectDescription').val(),
		projDue = $('#projectDueDate').val(),
		status = $('input[name = "status"]:checked').prop("id");

	$.ajax({
		url:"xhr/new_project.php",
		type:"post"
		dataType: "json",
		data: {
			projectName: projName,
			projectDescription: projDesc,
			dueDate: projDue,
			status: status
		},

		success:function(reponse){
			console.log('Testing for success');

			if(reponse.error) {
				alert(reponse)
			}else{
				window.location.assign("projects.html")
			};
		}
	});
});




  
  /* ======================= Get Projects    =======================  */

	var projects = function(){

		$.ajax({
			url: 'xhr/get_projects.php',
			type:'get',
			dataType: 'json',
			success: function(response){
				if(reponse.error) {
					console.log(reponse.error);
				}else{

					for(var i = 0, j=response.projects.length; i<j; i++){
						var result = response.projects[i];

						$(".projects").append(
							'<div style = "border: 1px solid black">' +
								"<input class='projectid' type='hidden' value='" + result.id + "'>" +
								"Project Name: " +result.projectName + "<br>" +
								"Project Due Date: " +result.dueDate + "<br>" +
								"Project Description: " +result.projectDescription + "<br>" +
								"Project Status: " +result.status + "<br>"
							+ '<button class="deletebtn">Delete</button>'
							+ '<button class="editbtn">Edit</button>'
							+ '</div> <br'
						);

					};
						$('deletebtn').on('click' , function (e) {
							var pid= $(this).parent().find('.projectid').val();
							console.log('test delete');
							$.ajax({
								url: 'xhr/delete_project.php',
								data: {
									projectID: pid
								},
								type: 'POST'
								dataType: 'json'
								success: function(reponse){
									console.log('Testing for Success');

									if(reponse.error){
								}
							}
						})

				});
			}

		}
	});







/* ======================= Account Info    =======================  */







/* ======================= Display Avatar ======================= */




/* ======================= Logout ======================= */

$('#logOut').click(function(e){
	e.preventDefault();
	$.get('xhr/logout.php', function () {
		window.location.assign('index.html');
	});
});







})(jQuery)