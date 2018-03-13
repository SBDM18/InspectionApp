$(document).ready(function () {
    $("#loginModal").hide();
    $("#myRegModal").hide();
    $("#addUnitModal").hide();
});

//calls leanModal to display a modal based off of the ID
$("#login").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton:".close"
});
$('#register').leanModal({
    top:100,
    overlay: 0.6,
    closeButton: ".close"
});
$(".addUnit").leanModal({
    top:100,
    overlay:0.6,
    closeButton:".close",   
});

$(document).on('click', '.addUnit', function () {
    $(".addUnit").leanModal({
        top: 40,
        overlay: 0.6,
        closeButton: ".close",
    });
});


//retrieves data from login modal
$('#loginBtn').on("click", function(event){
    event.preventDefault();
    let newUser ={
        userpass: $("#password").val(),
        username: $("#username").val()       
    };
    
    console.log("This user:" + newUser);
    $.ajax("/login", {
        type: "PUT",
        data: newUser
    }).done(res => {
        console.log("information sent to server for login");
        console.log(res);
        window.location = '/home';
    });
    // $(".containerFront").hide();//hide the login page and show the home page
    
    //redirect route to home.handlebars


    //Create an IF statement, if login is valid send to home page if not send alert saying incorrect try again
    $("#loginModal").hide();
    
});


//retrieves data from the register modal
$("#regBtn").on("click", function(event){
    event.preventDefault();
    let newReg ={
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        username:$("#userNameReg").val(),
        password: $("#passWordReg").val(),
        company: $("#companyName").val(),
        email: $("#email").val(),
        phoneNumber: $("#phoneNum").val() 
    };

    //If registration successful create an alet/modal to thank individual for registering with INsightful Inspection
    console.log(newReg);
    $.ajax("/register",{
        type:"POST",
        data: newReg
    }).then(res =>{
        console.log("information sent to server for registration");
        console.log(res);
        window.location = '/admin';
        // res.render('/admin');        
    });
    $("#myRegModal").hide();
    // redirect to home page (possibly admin page since they will be a user)
 
});
$("#submitUnit").on("click", event =>{    
    event.preventDefault();
    let newUnit ={
        street: $("#street").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zip: $("#zip").val(),
        bedroomTotal: 2,
        bathroomTotal: 3,
        yard: $("input[name='yard']:checked").val().trim(),
        garage: $(".garage:checked").val(),        
    };
    //after addunit insert jwt id to authenticate the user/ manager 
    $.ajax("/api/addunit",{
        type:"POST",
        data: newUnit
    }).then(res =>{
        console.log("information sent to server for adding a unit");
        console.log(res);
        alert("You successfully added a unit");
        $("#addUnitModal").hide();             
    });
   
});

$("#unitSearch").on('click', function(){
    console.log('working');
    
});
$(".addUnit").on('click', function(){
    console.log('working');
    
});

// javascript for functioning plus and minus in the addUnitModal for Bed and bath


//javascript for validatin input 
/*==================================================================
    [ Validate ]*/



// JAVASCRIPT FOR AJAX ON TEMPLATE PAGE
//======================================
//======================================
$(document).on('click', '.template', function(){

    $.ajax("/template", {
        type: "GET",
    }).then(res => {
        console.log("Going to template page");
        console.log(res);
        window.location = '/template';
        // res.render('/admin');        
    });
    
})









