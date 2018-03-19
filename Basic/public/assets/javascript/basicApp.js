$(document).ready(function () {
    $("#loginModal").hide();
    $("#myRegModal").hide();
    $("#addUnitModal").hide();
    $("#editModal").hide();
    $("#addUserModal").hide();
    $("#deleteModal").hide();
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
//displays modal for the admin page
$(".delUser").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".close"
});

$('.editUser').leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".close"
});

$(".addUser").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".close",
});

$(document).on('click', '.addUnit', function () {
    $(".addUnit").leanModal({
        top: 40,
        overlay: 0.6,
        closeButton: ".close",
    });
});


// ====================================
//     Parts Matt has added 3/12/2018
// ====================================
// ++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++
// ====================================

$(".addTemplate").leanModal({
    top:100,
    overlay:0.6,
    closeButton: ".close"
});

$(document).on('click', '.temp-btn', function () {
    console.log('Hitting this...');
    
    if ($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).css({ 'background-color': 'grey' })
    } else {
        $(this).css({ 'background-color': '#656aff' })
        $(this).addClass('selected');
    }
});

//on submission get values and show what the req body is posting
$(document).on('click', '#tempSubBtn', function(){

    var title = $('#temp-title').val();

    if ($('#entryToggle').hasClass('selected')){
        var entry = 'entry';
    }
    if ($('#bedroomToggle').hasClass('selected')) {
        var bedroom = 'bedroom';
    }
    if ($('#bathroomToggle').hasClass('selected')) {
        var bathroom = 'bathroom';
    }
    if ($('#hallsToggle').hasClass('selected')) {
        var halls = 'halls';
    }
    if ($('#stairsToggle').hasClass('selected')) {
        var stairs = 'stairs';
    }
    if ($('#kitchenToggle').hasClass('selected')) {
        var kitchen = 'kitchen';
    }
    if ($('#livingroomToggle').hasClass('selected')) {
        var livingroom = 'livingroom';
    }

    console.log('Here is the data: ', title, entry, bedroom, bathroom, halls, stairs, kitchen, livingroom);    

});

// ====================================
//          End of Additions
// ====================================
// ++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++
// ====================================

//retrieves data from login modal
$('#loginBtn').on("click", function(event){
    event.preventDefault();
    let newReg ={
        userpass: $(".password").val(),
        username: $(".username").val()       
    };
    
    console.log( newReg);
    $.ajax("/login", {
        type: "POST",
        data: newReg
    }).done((res,err) => {
        console.log(err);
        
        localStorage.setItem("token" , res.token);
        localStorage.setItem("auth" , res.authTok);
        console.log(localStorage.getItem("auth"));    
        console.log(localStorage.getItem("token"));
        window.location = '/home';
        
    });
    // $(".containerFront").hide();//hide the login page and show the home page

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
        localStorage.setItem("token", res.token);
        console.log(localStorage.getItem("token"));
        swal("Thank you for registering with Insightful Inspection. Please login ");
        console.log("information sent to server for registration");
        console.log(res);
        window.location = '/admin';
        // res.render('/admin');        
    });
    $("#myRegModal").hide();
    // redirect to home page (possibly admin page since they will be a user)
 
});
$("#createUnit").on("click", event =>{    
    event.preventDefault();
    let newUnit ={
        type: $("#type").val(),
        street: $("#street").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zip: $("#zip").val(),
        unitNumber:$("#unitNum").val(),
        storiesNumber:$("#storiesNum").val(),
        bedroomTotal: $("#bedNum").val(),
        bathroomTotal: $("#bathNum").val(),
        yard: $("input[name='yard']:checked").val().trim(),
        garage: $(".garage:checked").val(),        
    };
    console.log(newUnit);
    
    //after addunit insert jwt id to authenticate the user/ manager 
    $.ajax("/addunit",{
        type:"POST",
        data: newUnit,
        headers:{"Authorization": localStorage.getItem("token")}
    }).then(res =>{
        console.log("information sent to server for adding a unit");
        console.log(res);
        swal("You successfully added a unit");
        // $("#addUnitModal").hide();             
    });
   
});

$("#createUser").on("click", event => {
    event.preventDefault();
    let newReg = {
        firstName: $("#firstNAme").val(),
        lastName: $("#lastNAme").val(),
        username: $("#userNAme").val(),
        password: $("#passWOrd").val(),
        company: $("#companyNAme").val(),
        email: $("#Email").val(),
        phoneNumber: $("#phoneNUm").val()
    };
    //If registration successful create an alet/modal to thank individual for registering with INsightful Inspection
    console.log(newReg);
    $.ajax("/adduser", {
        type: "POST",
        data: newReg,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        swal("You have succesfully added a new user");
        console.log("information sent to server for registration");
        console.log(res);
        // window.location = '/admin';
        // res.render('/admin');        
    });
    $("#addUserModal").hide();
});
$(".delUser").on("click", ()=>{
    $.ajax("/deleteInfo",{
        type:"GET",
        headers: {"Authorization": localStorage.getItem("token")}
    }).then(res =>{
        console.log(res);
        
    });
});
$("#delete").on("click", event =>{
    let value = {
        email: $("#delUserEm").val()
    };
    console.log(value);
    $.ajax("/delete",{
        type: "DELETE",
        data: value,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res =>{
        swal("You successfully deleted a User ");
        console.log(res);        
    });    
    $("#deleteModal").hide();
});
$("#edit").on("click", event =>{
    let edit = {
        firstName: $("#firstNAMe").val(),
        lastName: $("#lastNAMe").val(),
        username: $("#userNAMe").val(),
        password: $("#passWORd").val(),
        company: $("#companyNAMe").val(),
        email: $("#EMail").val(),
        phoneNumber: $("#phoneNUM").val()
    };
    $.ajax("/edituser", {
        type:"POST",
        data: edit,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res =>{
        swal("You successfully edited a User");
        console.log(res);        
    });
    $("#editModal").hide();
});

//Click events for navigation bar
$(document).on("click", ".overview", () => {
    $.ajax("/home", {
        type: "GET",
        data: JSON,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        console.log("get request worked");
    });
});
$(document).on("click", ".units", ()=>{
    console.log("button");    
    $.ajax("/units",{
        type:"GET",
        data:JSON,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res =>{
        console.log("get request worked");        
    });
});
$(document).on("click", ".inspection", () => {
    $.ajax("/inspection", {
        type: "GET",
        data: JSON,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        console.log("get request worked");
    });
});
$(document).on("click", ".template", () => {
    $.ajax("/templates", {
        type: "GET",
        data: JSON,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        console.log("get request worked");
    });
});
$(document).on("click", ".units", () => {
    $.ajax("/reports", {
        type: "GET",
        data: JSON,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        console.log("get request worked");
    });
});
$(document).on("click", ".report", () => {
    $.ajax("/admin", {
        type: "GET",
        data: JSON,
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        console.log("get request worked");
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
    window.location = '/template';
    // $.ajax("/template", {
    //     type: "GET",
    // }).then(res => {
    //     console.log("Going to template page");
    //     console.log(res);
    //     window.location = '/template';
    //     // res.render('/admin');        
    // });
});









