$(document).ready(function () {
    $(".wrapper").hide();
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

let newUser ={};
//retrieves data from login modal
$('#loginBtn').on("click", function(){
    let newUser ={
        userpass: $("#password").val(),
        username: $("#username").val()       
    };
    
    console.log(newUser);
  
    $(".containerFront").hide();//hide the login page and show the home page
    $(".wrapper").show();
    //Create an IF statement, if login is valid send to home page if not send alert saying incorrect try again
    $("#loginModal").hide();
    return newUser;
});
//retrieves data from the register modal
$("#regBtn").on("click", function(){
    let newReg ={
        firstname: $("#firstName").val(),
        lastname: $("#lastName").val(),
        regUsername:$("#userNameReg").val(),
        regPass: $("#passWordReg").val(),
        company: $("#companyName").val(),
        email: $("#email").val(),
        phone: $("#phoneNum").val() 
    };    
    //If registration successful create an alet/modal to thank individual for registering with INsightful Inspection
    console.log("This is new user info: " + newReg);
 $("#myRegModal").hide();
});
$("#addUnit1").on("click", function(){    


    alert("You successfully added a unit");
    $("#addUnitModal").hide();
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









