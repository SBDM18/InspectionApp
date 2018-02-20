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

//retrieves data from login modal
$('#loginBtn').on("click", function(){
    let userName = $("#username").val();
    let passWord = $("#password").val();

    console.log(userName);
    console.log(passWord);
    $(".containerFront").hide();//hide the login page and show the home page
    $(".wrapper").show();
    //Create an IF statement, if login is valid send to home page if not send alert saying incorrect try again
    $("#loginModal").hide();
});
//retrieves data from the register modal
$("#regBtn").on("click", function(){
    let username = $("#user").val();
    let password = $("#pass").val();
    let company = $("#company").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    //If registration successful create an alet/modal to thank individual for registering with INsightful Inspection
    console.log("This is new user information: " + username + "," + password + "," + company +"," + email + "," +phone );
    $("#myRegModal").hide();
});
$("#addUnit1").on("click", function(){
    


    alert("You successfully added a unit");
    $("#addUnitModal").hide();
});

// javascript for functioning plus and minus in the addUnitModal for Bed and bath












