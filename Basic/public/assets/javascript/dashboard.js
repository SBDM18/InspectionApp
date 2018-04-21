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
$(".inspectSubmit").on('click', function(e){
    e.preventDefault();

    

        let data ={
            sections:[
                {
                    Entry:[
                        { title: 'Walls', clean: $(".c-Walls:checked").val(), undamaged: $(".u-Walls:checked").val(), working: $(".w-Walls:checked").val(), note: '' },
                        { title: 'Doors', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Ceiling:checked").val(), undamaged: $(".u-Ceiling:checked").val(), working: $(".w-Ceiling:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Flooring:checked").val(), undamaged: $(".u-Flooring:checked").val(), working: $(".w-Flooring:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-Windows:checked").val(), undamaged: $(".u-Windows:checked").val(), working: $(".w-Windows:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-Screens:checked").val(), undamaged: $(".u-Screens:checked").val(), working: $(".w-Screens:checked").val(), note: '' },
                        { title: 'Window Coverings', clean: $(".c-Window:checked").val(), undamaged: $(".u-Window:checked").val(), working: $(".w-Window:checked").val(), note: '' },
                        { title: 'Doorbell', clean: $(".c-Doorbell:checked").val(), undamaged: $(".u-Doorbell:checked").val(), working: $(".w-Doorbell:checked").val(), note: '' }, 
                    ]
                },
                {
                    Halls:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Stairs', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Closet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Smoke Alarms', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'CO2 Detector', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    Bedroom:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Doors', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Window Coverings', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Closet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Smoke Alarm', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' }
                    ]
                },
                {
                    Bathroom:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Doors', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Cabinets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Towel Rack', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Countertop', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Shower Door', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Shower', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Mirror', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Sink', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Faucet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Exhaust Fan', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Toilet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Toilet Tissue Dispenser', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },


                    ]
                },
                {
                    Stairs:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Steps', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Railings', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Closet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Smoke Alarm', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'C02 Detector', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    Kitchen:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'PowerOutlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Cupboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Countertops', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Pantry', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Refigerator', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Oven', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Stove Top', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Exhaust Fan', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Sink', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Faucet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Garbage Disposal', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Microwave', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Dishwasher', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    Livingroom:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' }
                    ]
                },
                {
                    Laundry:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Washing Machine', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Dryer', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Vents', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Cabinets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Sink', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Faucet', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    FamilyRoom:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Screens', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Fireplace', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    Garage:[
                        { title: 'Walls', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Ceiling', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Flooring', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Baseboards', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Lights', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Power Outlets', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Windows', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Garage Door', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Garage Motor', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Water Heater', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' }
                    ]
                },
                {
                    External:[
                        { title: 'Roof', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Gutters', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Eaves', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Fascia', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Balcony', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Patio', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    Misc:[
                        { title: 'Mailbox', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Recycling Bin', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Garbage Bin', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'House Key', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Garage Remote', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Common Area Keys', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                },
                {
                    Equipment:[
                        { title: 'Air Conditioning', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                        { title: 'Heating Unit', clean: $(".c-Doors:checked").val(), undamaged: $(".u-Doors:checked").val(), working: $(".w-Doors:checked").val(), note: '' },
                    ]
                }
            ]
        }
        
        console.log(data);

});


// still need to create a back button and a route for home.handlebars unless they are within the 2nd page of units or inspection than it would go back to their respective beginning page (have a this statement check which class was picked and than decide what function to perform within the button click)

// create on click for the cards in inspectionDashcards... allowing user to pick a type of inspection and display the information in a list form with the other cards displayed in a carousel







