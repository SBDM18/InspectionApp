$(document).ready(function () {
    $("#loginModal").hide();
    $("#myRegModal").hide();
    $("#addUnitModal").hide();
    $("#editModal").hide();
    $("#addUserModal").hide();
    $("#deleteModal").hide();
    $("#startInsp").hide();
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
    top:20,
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
    closeButton: ".close"
});
$(".startIns").leanModal({
    top:40,
    overlay:0.6,
    closeButton: ".close"
});

$(".startIns").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".close",
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

// var tempBtns = [];

$(document).on('click', '.temp-btn', function () {
    
    
    if ($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).css({ 'background-color': 'grey' })
    } else {
        $(this).css({ 'background-color': '#656aff' })
        $(this).addClass('selected');
        // tempBtns.push($(this).text());
    }
    
});

$(document).on('click', '#tempSubBtn', function(e){
    e.preventDefault();
    let user = localStorage.getItem('type');
    let newTemp = {
        user: user,
        title: $('#temp-title').val(),
        entry: $('#entryToggle').hasClass('selected'),
        numentries: $('#entry-num').val() ? $('#entry-num').val() : 0,
        bedroom: $('#bedroomToggle').hasClass('selected'),
        numbed: $('#bed-num').val() ? $('#bed-num').val() : 0,
        bathroom: $('#bathroomToggle').hasClass('selected'),
        numbath: $('#bath-num').val() ? $('#bath-num').val() : 0,
        halls: $('#hallsToggle').hasClass('selected'),
        numhalls: $('#hall-num').val() ? $('#hall-num').val() : 0,
        stairs: $('#stairsToggle').hasClass('selected'),
        numstairs: $('#stair-num').val() ? $('#stair-num').val() : 0,
        kitchen: $('#kitchenToggle').hasClass('selected'),
        numkitchen: $('#kitchen-num').val() ? $('#kitchen-num').val() : 0,
        livingroom: $('#livingroomToggle').hasClass('selected'),
        numlr: $('#lr-num').val() ? $('#lr-num').val() : 0
    }

    // let city = localStorage.setItem('city');
    let auth = localStorage.getItem("auth");

    console.log(newTemp);
    $.ajax("/templates/"+auth, {
        type: "POST",
        data: newTemp,
        headers: { "Authorization": localStorage.getItem("token") }
    }).done((res, err) => {
        err ? console.log(err) : console.log('No error');
        window.location = '/templist/'+auth;
    });
    
})

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

});



// ++++++++++++++++++++++++++++++++++++
// ====================================
// ====================================
//      Start Inspection Button
// ====================================
// ====================================
// ++++++++++++++++++++++++++++++++++++

$(document).on('click', '.temp-selector', function(e){
    e.preventDefault();

    let auth = localStorage.getItem("auth");
   
    let title = $('#temp-title').text();
    let template = $(this).attr('id');
    let username = localStorage.getItem('username');


    let newIns = {
        insTitle: title,
        insTemplate: template,
        username: username
    }

    console.log(newIns);
    $.ajax("/templates/" + auth, {
        type: "POST",
        data: newIns,
        headers: { "Authorization": localStorage.getItem("token") }
    }).done((res, err) => {
        err ? console.log(err) : console.log('No error');
        window.location = '/inspect/' + auth;
    });
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
    
    let username = $(".username").val();
    localStorage.setItem('username', username);

    console.log( newReg);
    $.ajax("/login", {
        type: "POST",
        data: newReg
    }).done((res,err) => {
        console.log(err);               
        localStorage.setItem("token" , res.token);
        localStorage.setItem("auth" , res.authTok);
        localStorage.setItem('type', res.userType);
        localStorage.getItem('id', res.userId)

        console.log(res.userType);
        console.log(res.authTok);    
        console.log(res.token);
         window.location = '/home/' + localStorage.getItem("auth");        
        }).fail((errorThrown)=>{
            swal("Username or Password are invalid");
        });
    // $(".containerFront").hide();//hide the login page and show the home page

    //Create an IF statement, if login is valid send to home page if not send alert saying incorrect try again
    $("#loginModal").hide();
    
});


//retrieves data from the register modal, creates a new registered manager
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
    }).fail((errorThrown)=>{
        swal("Error", "Registering new manager could not be completed some information was invalid");
    });
    $("#myRegModal").hide();
    // redirect to home page (possibly admin page since they will be a user)
 
});
//Creates a new unit
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

    let city = localStorage.setItem('city', newUnit.city);
    
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
    }).fail((errorThrown)=>{
        swal("Try again","There was an error adding the unit. ");
    });
   
});
//Create new user underneath the respective manager that is logged in
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
       
    }).fail((errorThrown)=>{
        swal("There was an error in the information provided to create a new user");
    });
    $("#addUserModal").hide();
});

//Admin delete button click takes email value and searches db than deletes said user
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
    }).fail((errorThrown)=>{
        swal("Email entered did not match a user and no delete occured");
    });  
    $("#deleteModal").hide();
});
//Admin edit button click grabs data to edit user
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
    }).fail((errorThrown)=>{
        swal("Could not edit the user that was entered");
    });
    $("#editModal").hide();
});
//Button click for city folders to display data with respective data-id="city"

$(document).on("click",".city", function(){
    let cityClick = $(this).data("city");
    console.log(cityClick);
    var replaced = cityClick.split(' ').join('+');
    let auth = localStorage.getItem("auth");
    console.log(auth);
    let route = `${auth}/${replaced}`;
    
    $.ajax("/unitlist/"+route+"", {
        type: "GET",
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => {
        console.log("grabbed data from specific city");
        $(".dash-main").empty();         
        $(".dash-main").append(res);       
    }).fail((errorThrown)=>{
        swal("Error in unit request");
    });
});

// $(document).on("click", ".startIns", function(){
//     let unitID = $(this).data("id");
//     let street = $(this).data("street");    
//     let auth = localStorage.getItem("auth");
//     console.log(auth);
//     console.log(unitID, street);
    

//     $.ajax("/temp/" + auth + "/"+ unitID , {
//         type: "GET",
//         headers: { "Authorization": localStorage.getItem("token") }
//     }).then(res => {
//         console.log("grabbed data from template");
        
//     });
// });



$(document).on("click", ".backBtn", () =>{
    console.log("Working");

    $.ajax("/back", {
        type: "GET",
        data: JSON
    }).then(res =>{
        window.location = '/home/' +localStorage.getItem('auth');
    });
    
});
$(document).on("click", ".logOut", () =>{
    console.log("Working");
    var empty = {};

    $.ajax("/logout", {
        type: "POST",
        data: empty
    }).then(res => {
        localStorage.clear();
        window.location = '/';
    });    
});


$("#unitSearch").on('click', function(){
    console.log('working');
    
});
$(".addUnit").on('click', function(){
    console.log('working');
    
});

// javascript for functioning plus and minus in the addUnitModal for Bed and bath


//javascript for bed/bath buttons
/*==================================================================*/
// This button will increment the value
$('.qtyplus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
    }
});
// This button will decrement the value till 0
$(".qtyminus").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
    }
});
   
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







