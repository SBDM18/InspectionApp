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
    
    console.log(newUser);
    $.ajax("/login", {
        type: "POST",
        data: newUser
    }).then(res => {
        console.log("information sent to server for registration");
        console.log(res);
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
        firstname: $("#firstName").val(),
        lastname: $("#lastName").val(),
        regUsername:$("#userNameReg").val(),
        regPass: $("#passWordReg").val(),
        company: $("#companyName").val(),
        email: $("#email").val(),
        phone: $("#phoneNum").val() 
    };
    $.ajax("/api/reg",{
        type:"POST",
        data: newReg
    }).then(res =>{
        console.log("registration information sent to server");
        
        console.log(res);
        
    });
    //If registration successful create an alet/modal to thank individual for registering with INsightful Inspection
    console.log(newReg);
    $.ajax("/registration",{
        type:"POST",
        data: newReg
    }).then(res =>{
        console.log("information sent to server for registration");
        console.log(res);
        
    });
    $("#myRegModal").hide();
    // redirect to home page (possibly admin page since they will be a user)
 
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









