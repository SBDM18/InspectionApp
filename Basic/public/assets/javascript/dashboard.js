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
    console.log(clicked);

    $.ajax("/inspectDash",{
        type:"GET",
        headers: { "Authorization": localStorage.getItem("token") }
    }).then(res =>{
            console.log("info grabbed");
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


// still need to create a back button and a route for home.handlebars unless they are within the 2nd page of units or inspection than it would go back to their respective beginning page (have a this statement check which class was picked and than decide what function to perform within the button click)

// create on click for the cards in inspectionDashcards... allowing user to pick a type of inspection and display the information in a list form with the other cards displayed in a carousel







