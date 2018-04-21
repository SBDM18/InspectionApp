$(document).ready(function(){

    let navlink = $('.nav-links');
    let navicon = $('.nav-icon');
    let linkname = $('.link-name');

    $(navlink).on('click', function(){
        $(linkname).hide();
        $(navicon).removeClass('shrink-icon');
        $(linkname).removeClass('letter-color-select');

        $(this).find(linkname).show();
        $(this).find(navicon).addClass('shrink-icon');
        $(this).find(linkname).addClass('letter-color-select');

        // $(this).find(linkname).toggle();
        // $(this).find(navicon).toggleClass('shrink-icon');
        // $(this).find(linkname).toggleClass('letter-color-select');
    });
    
});


function unitDashList(){
       
    let html = `
                    <div class="col-sm-9">
                        <table class="table table-striped table-hover" style="background-color:#BFC1D2;">
                            <thead class="thead-light">

                         <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>  
                                <tr>
                                    <th scope="row">1</th>
                                    <td>3668 Quimby St.<button>Start Inspection</button></td>                                    
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>3668 Tennyson St.</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>3668 Poe St.</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>3668 Homer St.</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>3668 Curtis St.</td>
                                </tr>
                            </tbody>
                        </table>                        
                    </div>
                    <div class="col-sm-3">
                        <button class="addUnit button" href="#addUnitModal">Add Unit</button>
                    </div>
                </div>
                `
    $(".dash-main").html(html);
}

function inspectSlideCards(){
    let htlml = ''
    $(".main").html(html);
}

$(".inspectBTN").on('click', function(){
        console.log("working");
        $.ajax('/inspectinfo', {
            type:"POST",
            headers: { "Authorization": localStorage.getItem("token") }
        }).then(res =>{
            console.log("information sent to server");
            swal("successfuly added inspection");            
        }).fail((errorThrown)=>{
            swal("try again");
        });
});

$(".inCard").on("click", function(){
    let clicked = $(this).data('id');
    console.log("Status ",clicked);
    let auth = localStorage.getItem("auth");
    let route = `${auth}/${clicked}`

    $.ajax("/inspectdash/" + route,{
        type:"GET",
        headers: { "Authorization": localStorage.getItem("token") }
    }).done(res =>{
            console.log("info grabbed");
            console.log(res.inspDoc);
            
            $(".dash-main").empty();
            $('.dash-main').append(res);
              
    }).fail((errorThrown)=>{
        swal("error occured");
    });    
});

$(".inspecCardD").on("click", function(){
    let clicked= $(this).data('id');
    console.log(clicked);
    
})


$("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $(".carousel-item")
                    .eq(i)
                    .appendTo(".carousel-inner");
            } else {
                $(".carousel-item")
                    .eq(0)
                    .appendTo(".carousel-inner");
            }
        }
    }
});


function checked(class) {
    if ($(class).val() === 'Yes'){
        return "Yes";
    } else {
        return "No";
    }
}


$(".inspectSubmit").on('click', function(e){
    e.preventDefault();

    

        let data ={
            sections:[
                {
                    Entry:[
                        { title: 'Walls', clean: $(".c-entWalls:checked").val(), undamaged: $(".u-entWalls:checked").val(), working: $(".w-entWalls:checked").val(), note: '' },
                        { title: 'Doors', clean: $(".c-entDoors:checked").val(), undamaged: $(".u-entDoors:checked").val(), working: $(".w-entDoors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-entCeiling:checked").val(), undamaged: $(".u-entCeiling:checked").val(), working: $(".w-entCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-entFlooring:checked").val(), undamaged: $(".u-entFlooring:checked").val(), working: $(".w-entFlooring:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-entWindows:checked").val(), undamaged: $(".u-entWindows:checked").val(), working: $(".w-entWindows:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-entScreens:checked").val(), undamaged: $(".u-entScreens:checked").val(), working: $(".w-entScreens:checked").val(), note: '' },
                        { title: 'Window Coverings', clean: $(".c-entWindow:checked").val(), undamaged: $(".u-entWindow:checked").val(), working: $(".w-entWindow:checked").val(), note: '' },
                        { title: 'Doorbell', clean: $(".c-entDoorbell:checked").val(), undamaged: $(".u-entDoorbell:checked").val(), working: $(".w-entDoorbell:checked").val(), note: '' }, 
                    ]
                },
                {
                    Halls:[
                        { title: 'Walls', clean: $(".c-halWalls:checked").val(), undamaged: $(".u-halWalls:checked").val(), working: $(".w-halWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-halCeiling:checked").val(), undamaged: $(".u-halCeiling:checked").val(), working: $(".w-halCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-halFlooring:checked").val(), undamaged: $(".u-halFlooring:checked").val(), working: $(".w-halFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-halBaseboards:checked").val(), undamaged: $(".u-halBaseboards:checked").val(), working: $(".w-halBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-halLights:checked").val(), undamaged: $(".u-halLights:checked").val(), working: $(".w-halLights:checked").val(), note: '' },
                        { title: 'Stairs', clean: $(".c-halStairs:checked").val(), undamaged: $(".u-halStairs:checked").val(), working: $(".w-halStairs:checked").val(), note: '' },
                        { title: 'Closet', clean: $(".c-halCloset:checked").val(), undamaged: $(".u-halCloset:checked").val(), working: $(".w-halCloset:checked").val(), note: '' },
                        { title: 'Smoke Alarms', clean: $(".c-halSmoke:checked").val(), undamaged: $(".u-halSmoke:checked").val(), working: $(".w-halSmoke:checked").val(), note: '' },
                        { title: 'CO2 Detector', clean: $(".c-halCO2:checked").val(), undamaged: $(".u-halCO2:checked").val(), working: $(".w-halCO2:checked").val(), note: '' },
                    ]
                },
                {
                    Bedroom:[
                        { title: 'Walls', clean: $(".c-bedWalls:checked").val(), undamaged: $(".u-bedWalls:checked").val(), working: $(".w-bedWalls:checked").val(), note: '' },
                        { title: 'Doors', clean: $(".c-bedDoors:checked").val(), undamaged: $(".u-bedDoors:checked").val(), working: $(".w-bedDoors:checked").val(), note: '' },
                        { title: 'Window Coverings', clean: $(".c-bedWindow:checked").val(), undamaged: $(".u-bedWindow:checked").val(), working: $(".w-bedWindow:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-bedWindows:checked").val(), undamaged: $(".u-bedWindows:checked").val(), working: $(".w-bedWindows:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-bedScreens:checked").val(), undamaged: $(".u-bedScreens:checked").val(), working: $(".w-bedScreens:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-bedFlooring:checked").val(), undamaged: $(".u-bedFlooring:checked").val(), working: $(".w-bedFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-bedBaseboards:checked").val(), undamaged: $(".u-bedBaseboards:checked").val(), working: $(".w-bedBaseboards:checked").val(), note: '' },
                        { title: 'Closet', clean: $(".c-bedCloset:checked").val(), undamaged: $(".u-bedCloset:checked").val(), working: $(".w-bedCloset:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-bedPower:checked").val(), undamaged: $(".u-bedPower:checked").val(), working: $(".w-bedPower:checked").val(), note: '' },
                        { title: 'Smoke Alarm', clean: $(".c-bedSmoke:checked").val(), undamaged: $(".u-bedSmoke:checked").val(), working: $(".w-bedSmoke:checked").val(), note: '' }
                    ]
                },
                {
                    Bathroom:[
                        { title: 'Walls', clean: $(".c-batWalls:checked").val(), undamaged: $(".u-batWalls:checked").val(), working: $(".w-batWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-batCeiling:checked").val(), undamaged: $(".u-batCeiling:checked").val(), working: $(".w-batCeiling:checked").val(), note: '' },
                        { title: 'Doors', clean: $(".c-batDoors:checked").val(), undamaged: $(".u-batDoors:checked").val(), working: $(".w-batDoors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-batFlooring:checked").val(), undamaged: $(".u-batFlooring:checked").val(), working: $(".w-batFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-batBaseboards:checked").val(), undamaged: $(".u-batBaseboards:checked").val(), working: $(".w-batBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-batLights:checked").val(), undamaged: $(".u-batLights:checked").val(), working: $(".w-batLights:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-batPower:checked").val(), undamaged: $(".u-batPower:checked").val(), working: $(".w-batPower:checked").val(), note: '' },
                        { title: 'Cabinets', clean: $(".c-batCabinets:checked").val(), undamaged: $(".u-batCabinets:checked").val(), working: $(".w-batCabinets:checked").val(), note: '' },
                        { title: 'Towel Rack', clean: $(".c-batTowel:checked").val(), undamaged: $(".u-batTowel:checked").val(), working: $(".w-batTowel:checked").val(), note: '' },
                        { title: 'Countertop', clean: $(".c-batCountertop:checked").val(), undamaged: $(".u-batCountertop:checked").val(), working: $(".w-batCountertop:checked").val(), note: '' },
                        { title: 'Shower Door', clean: $(".c-batShower Door:checked").val(), undamaged: $(".u-batShower Door:checked").val(), working: $(".w-batShower Door:checked").val(), note: '' },
                        { title: 'Shower', clean: $(".c-batShower:checked").val(), undamaged: $(".u-batShower:checked").val(), working: $(".w-batShower:checked").val(), note: '' },
                        { title: 'Mirror', clean: $(".c-batMirror:checked").val(), undamaged: $(".u-batMirror:checked").val(), working: $(".w-batMirror:checked").val(), note: '' },
                        { title: 'Sink', clean: $(".c-batSink:checked").val(), undamaged: $(".u-batSink:checked").val(), working: $(".w-batSink:checked").val(), note: '' },
                        { title: 'Faucet', clean: $(".c-batFaucet:checked").val(), undamaged: $(".u-batFaucet:checked").val(), working: $(".w-batFaucet:checked").val(), note: '' },
                        { title: 'Exhaust Fan', clean: $(".c-batExhaust:checked").val(), undamaged: $(".u-batExhaust:checked").val(), working: $(".w-batExhaust:checked").val(), note: '' },
                        { title: 'Toilet', clean: $(".c-batToilet:checked").val(), undamaged: $(".u-batToilet:checked").val(), working: $(".w-batToilet:checked").val(), note: '' },
                        { title: 'Toilet Tissue Dispenser', clean: $(".c-batToilet Tissue:checked").val(), undamaged: $(".u-batToilet Tissue:checked").val(), working: $(".w-batToilet Tissue:checked").val(), note: '' },


                    ]
                },
                {
                    Stairs:[
                        { title: 'Walls', clean: $(".c-staWalls:checked").val(), undamaged: $(".u-staWalls:checked").val(), working: $(".w-staWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-staCeiling:checked").val(), undamaged: $(".u-staCeiling:checked").val(), working: $(".w-staCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-staFlooring:checked").val(), undamaged: $(".u-staFlooring:checked").val(), working: $(".w-staFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-staBaseboards:checked").val(), undamaged: $(".u-staBaseboards:checked").val(), working: $(".w-staBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-staLights:checked").val(), undamaged: $(".u-staLights:checked").val(), working: $(".w-staLights:checked").val(), note: '' },
                        { title: 'Steps', clean: $(".c-staSteps:checked").val(), undamaged: $(".u-staSteps:checked").val(), working: $(".w-staSteps:checked").val(), note: '' },
                        { title: 'Railings', clean: $(".c-staRailings:checked").val(), undamaged: $(".u-staRailings:checked").val(), working: $(".w-staRailings:checked").val(), note: '' },
                        { title: 'Closet', clean: $(".c-staCloset:checked").val(), undamaged: $(".u-staCloset:checked").val(), working: $(".w-staCloset:checked").val(), note: '' },
                        { title: 'Smoke Alarm', clean: $(".c-staSmoke:checked").val(), undamaged: $(".u-staSmoke:checked").val(), working: $(".w-staSmoke:checked").val(), note: '' },
                        { title: 'C02 Detector', clean: $(".c-staCO2:checked").val(), undamaged: $(".u-staCO2:checked").val(), working: $(".w-staCO2:checked").val(), note: '' },
                    ]
                },
                {
                    Kitchen:[
                        { title: 'Walls', clean: $(".c-kitWalls:checked").val(), undamaged: $(".u-kitWalls:checked").val(), working: $(".w-kitWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-kitCeiling:checked").val(), undamaged: $(".u-kitCeiling:checked").val(), working: $(".w-kitCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-kitFlooring:checked").val(), undamaged: $(".u-kitFlooring:checked").val(), working: $(".w-kitFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-kitBaseboards:checked").val(), undamaged: $(".u-kitBaseboards:checked").val(), working: $(".w-kitBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-kitLights:checked").val(), undamaged: $(".u-kitLights:checked").val(), working: $(".w-kitLights:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-kitPower :checked").val(), undamaged: $(".u-kitPower :checked").val(), working: $(".w-kitPower :checked").val(), note: '' },
                        { title: 'Cupboards', clean: $(".c-kitCupboards:checked").val(), undamaged: $(".u-kitCupboards:checked").val(), working: $(".w-kitCupboards:checked").val(), note: '' },
                        { title: 'Countertops', clean: $(".c-kitCountertops:checked").val(), undamaged: $(".u-kitCountertops:checked").val(), working: $(".w-kitCountertops:checked").val(), note: '' },
                        { title: 'Pantry', clean: $(".c-kitPantry:checked").val(), undamaged: $(".u-kitPantry:checked").val(), working: $(".w-kitPantry:checked").val(), note: '' },
                        { title: 'Refigerator', clean: $(".c-kitRefigerator:checked").val(), undamaged: $(".u-kitRefigerator:checked").val(), working: $(".w-kitRefigerator:checked").val(), note: '' },
                        { title: 'Oven', clean: $(".c-kitOven:checked").val(), undamaged: $(".u-kitOven:checked").val(), working: $(".w-kitOven:checked").val(), note: '' },
                        { title: 'Stove Top', clean: $(".c-kitStove:checked").val(), undamaged: $(".u-kitStove:checked").val(), working: $(".w-kitStove:checked").val(), note: '' },
                        { title: 'Exhaust Fan', clean: $(".c-kitExhaust:checked").val(), undamaged: $(".u-kitExhaust:checked").val(), working: $(".w-kitExhaust:checked").val(), note: '' },
                        { title: 'Sink', clean: $(".c-kitSink:checked").val(), undamaged: $(".u-kitSink:checked").val(), working: $(".w-kitSink:checked").val(), note: '' },
                        { title: 'Faucet', clean: $(".c-kitFaucet:checked").val(), undamaged: $(".u-kitFaucet:checked").val(), working: $(".w-kitFaucet:checked").val(), note: '' },
                        { title: 'Garbage Disposal', clean: $(".c-kitGarbage:checked").val(), undamaged: $(".u-kitGarbage:checked").val(), working: $(".w-kitGarbage:checked").val(), note: '' },
                        { title: 'Microwave', clean: $(".c-kitMicrowave:checked").val(), undamaged: $(".u-kitMicrowave:checked").val(), working: $(".w-kitMicrowave:checked").val(), note: '' },
                        { title: 'Dishwasher', clean: $(".c-kitDishwasher:checked").val(), undamaged: $(".u-kitDishwasher:checked").val(), working: $(".w-kitDishwasher:checked").val(), note: '' },
                    ]
                },
                {
                    Livingroom:[
                        { title: 'Walls', clean: $(".c-livWalls:checked").val(), undamaged: $(".u-livWalls:checked").val(), working: $(".w-livWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-livCeiling:checked").val(), undamaged: $(".u-livCeiling:checked").val(), working: $(".w-livCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-livFlooring:checked").val(), undamaged: $(".u-livFlooring:checked").val(), working: $(".w-livFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-livBaseboards:checked").val(), undamaged: $(".u-livBaseboards:checked").val(), working: $(".w-livBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-liveLights:checked").val(), undamaged: $(".u-liveLights:checked").val(), working: $(".w-liveLights:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-livPower:checked").val(), undamaged: $(".u-livPower:checked").val(), working: $(".w-livPower:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-livWindows:checked").val(), undamaged: $(".u-livWindows:checked").val(), working: $(".w-livWindows:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-livScreens:checked").val(), undamaged: $(".u-livScreens:checked").val(), working: $(".w-livScreens:checked").val(), note: '' }
                    ]
                },
                {
                    Laundry:[
                        { title: 'Walls', clean: $(".c-lauWalls:checked").val(), undamaged: $(".u-lauWalls:checked").val(), working: $(".w-lauWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-lauCeiling:checked").val(), undamaged: $(".u-lauCeiling:checked").val(), working: $(".w-lauCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-lauFlooring:checked").val(), undamaged: $(".u-lauFlooring:checked").val(), working: $(".w-lauFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-lauBaseboards:checked").val(), undamaged: $(".u-lauBaseboards:checked").val(), working: $(".w-lauBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-lauLights:checked").val(), undamaged: $(".u-lauLights:checked").val(), working: $(".w-lauLights:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-lauPower:checked").val(), undamaged: $(".u-lauPower:checked").val(), working: $(".w-lauPower:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-lauWindows:checked").val(), undamaged: $(".u-lauWindows:checked").val(), working: $(".w-lauWindows:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-lauScreens:checked").val(), undamaged: $(".u-lauScreens:checked").val(), working: $(".w-lauScreens:checked").val(), note: '' },
                        { title: 'Washing Machine', clean: $(".c-lauWashing:checked").val(), undamaged: $(".u-lauWashing:checked").val(), working: $(".w-lauWashing:checked").val(), note: '' },
                        { title: 'Dryer', clean: $(".c-lauDryer:checked").val(), undamaged: $(".u-lauDryer:checked").val(), working: $(".w-lauDryer:checked").val(), note: '' },
                        { title: 'Vents', clean: $(".c-lauVents:checked").val(), undamaged: $(".u-lauVents:checked").val(), working: $(".w-lauVents:checked").val(), note: '' },
                        { title: 'Cabinets', clean: $(".c-lauCabinets:checked").val(), undamaged: $(".u-lauCabinets:checked").val(), working: $(".w-lauCabinets:checked").val(), note: '' },
                        { title: 'Sink', clean: $(".c-lauSink:checked").val(), undamaged: $(".u-lauSink:checked").val(), working: $(".w-lauSink:checked").val(), note: '' },
                        { title: 'Faucet', clean: $(".c-lauFaucet:checked").val(), undamaged: $(".u-lauFaucet:checked").val(), working: $(".w-lauFaucet:checked").val(), note: '' },
                    ]
                },
                {
                    FamilyRoom:[
                        { title: 'Walls', clean: $(".c-famWalls:checked").val(), undamaged: $(".u-famWalls:checked").val(), working: $(".w-famWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-famCeiling:checked").val(), undamaged: $(".u-famCeiling:checked").val(), working: $(".w-famCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-famFlooring:checked").val(), undamaged: $(".u-famFlooring:checked").val(), working: $(".w-famFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-famBaseboards:checked").val(), undamaged: $(".u-famBaseboards:checked").val(), working: $(".w-famBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-famLights:checked").val(), undamaged: $(".u-famLights:checked").val(), working: $(".w-famLights:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-famPower:checked").val(), undamaged: $(".u-famPower:checked").val(), working: $(".w-famPower:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-famWindows:checked").val(), undamaged: $(".u-famWindows:checked").val(), working: $(".w-famWindows:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-famScreens:checked").val(), undamaged: $(".u-famScreens:checked").val(), working: $(".w-famScreens:checked").val(), note: '' },
                        { title: 'Fireplace', clean: $(".c-famFireplace:checked").val(), undamaged: $(".u-famFireplace:checked").val(), working: $(".w-famFireplace:checked").val(), note: '' },
                    ]
                },
                {
                    Garage:[
                        { title: 'Walls', clean: $(".c-garWalls:checked").val(), undamaged: $(".u-garWalls:checked").val(), working: $(".w-garWalls:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-garCeiling:checked").val(), undamaged: $(".u-garCeiling:checked").val(), working: $(".w-garCeiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-garFlooring:checked").val(), undamaged: $(".u-garFlooring:checked").val(), working: $(".w-garFlooring:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-garBaseboards:checked").val(), undamaged: $(".u-garBaseboards:checked").val(), working: $(".w-garBaseboards:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-garLights:checked").val(), undamaged: $(".u-garLights:checked").val(), working: $(".w-garLights:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-garPower:checked").val(), undamaged: $(".u-garPower:checked").val(), working: $(".w-garPower:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-garWindows:checked").val(), undamaged: $(".u-garWindows:checked").val(), working: $(".w-garWindows:checked").val(), note: '' },
                        { title: 'Garage Door', clean: $(".c-garGarage Door:checked").val(), undamaged: $(".u-garGarage Door:checked").val(), working: $(".w-garGarage Door:checked").val(), note: '' },
                        { title: 'Garage Motor', clean: $(".c-garGarage Motor:checked").val(), undamaged: $(".u-garGarage Motor:checked").val(), working: $(".w-garGarage Motor:checked").val(), note: '' },
                        { title: 'Water Heater', clean: $(".c-garWater:checked").val(), undamaged: $(".u-garWater:checked").val(), working: $(".w-garWater:checked").val(), note: '' }
                    ]
                },
                {
                    External:[
                        { title: 'Roof', clean: $(".c-extRoof :checked").val(), undamaged: $(".u-extRoof :checked").val(), working: $(".w-extRoof :checked").val(), note: '' },
                        { title: 'Gutters', clean: $(".c-extGutters:checked").val(), undamaged: $(".u-extGutters:checked").val(), working: $(".w-extGutters:checked").val(), note: '' },
                        { title: 'Eaves', clean: $(".c-extEaves:checked").val(), undamaged: $(".u-extEaves:checked").val(), working: $(".w-extEaves:checked").val(), note: '' },
                        { title: 'Fascia', clean: $(".c-extFascia:checked").val(), undamaged: $(".u-extFascia:checked").val(), working: $(".w-extFascia:checked").val(), note: '' },
                        { title: 'Balcony', clean: $(".c-extBalcony:checked").val(), undamaged: $(".u-extBalcony:checked").val(), working: $(".w-extBalcony:checked").val(), note: '' },
                        { title: 'Patio', clean: $(".c-extPatio:checked").val(), undamaged: $(".u-extPatio:checked").val(), working: $(".w-extPatio:checked").val(), note: '' },
                    ]
                },
                {
                    Misc:[
                        { title: 'Mailbox', clean: $(".c-misMailbox:checked").val(), undamaged: $(".u-misMailbox:checked").val(), working: $(".w-misMailbox:checked").val(), note: '' },
                        { title: 'Recycling Bin', clean: $(".c-misRecycling:checked").val(), undamaged: $(".u-misRecycling:checked").val(), working: $(".w-misRecycling:checked").val(), note: '' },
                        { title: 'Garbage Bin', clean: $(".c-misGarbage:checked").val(), undamaged: $(".u-misGarbage:checked").val(), working: $(".w-misGarbage:checked").val(), note: '' },
                        { title: 'House Key', clean: $(".c-misHouse:checked").val(), undamaged: $(".u-misHouse:checked").val(), working: $(".w-misHouse:checked").val(), note: '' },
                        { title: 'Garage Remote', clean: $(".c-misGarage:checked").val(), undamaged: $(".u-misGarage:checked").val(), working: $(".w-misGarage:checked").val(), note: '' },
                        { title: 'Common Area Keys', clean: $(".c-misCommon:checked").val(), undamaged: $(".u-misCommon:checked").val(), working: $(".w-misCommon:checked").val(), note: '' },
                    ]
                },
                {
                    Equipment:[
                        { title: 'Air Conditioning', clean: $(".c-equAir:checked").val(), undamaged: $(".u-equAir:checked").val(), working: $(".w-equAir:checked").val(), note: '' },
                        { title: 'Heating Unit', clean: $(".c-equHeating:checked").val(), undamaged: $(".u-equHeating:checked").val(), working: $(".w-equHeating:checked").val(), note: '' },
                    ]
                }
            ]
        }
        
        console.log(data);

});


// still need to create a back button and a route for home.handlebars unless they are within the 2nd page of units or inspection than it would go back to their respective beginning page (have a this statement check which class was picked and than decide what function to perform within the button click)

// create on click for the cards in inspectionDashcards... allowing user to pick a type of inspection and display the information in a list form with the other cards displayed in a carousel







