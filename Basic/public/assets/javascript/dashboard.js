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
})

function unitDashFolders(){

    let html = `
                <div class="row">
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="city" style="color:#BFC1D2;">
                                    <i class="fas fa-folder fa-5x"></i>
                                    <p class="cityTitle">San Diego</p>
                                </div>
                            </div>
                            <div class="col-sm-4" style="color:#BFC1D2;">
                                <div class="city">
                                    <i class="fas fa-folder fa-5x"></i>
                                    <p class="cityTitle">San Diego</p>
                                </div>
                            </div>
                            <div class="col-sm-4" style="color:#BFC1D2;">
                                <div class="city">
                                    <i class="fas fa-folder fa-5x"></i>
                                    <p class="cityTitle">San Diego</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <button class="addUnit button" href="#addUnitModal">Add Unit</button>
                    </div>
                </div> `  
                var but = document.getElementsByClassName('addUnit');
                console.log(but);
                
    $(".dash-main").html(html);
}
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
                                    <td>3668 Quimby St.</td>
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
function inspectDashCards(){
    
    let html = `

            <div class="row">
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card" style="width: 250px;">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card" style="width: 250px;">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card" style="width: 250px;">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card" style="width: 250px;">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card" style="width: 250px;">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card" style="width: 250px;">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 timeline-cont">
                    <h1 class="timelineTitle">Timeline</h1>
                    <table class="table table-striped table-hover timeTable" style="background-color:white;">
                        <tbody>
                            <tr>
                                <td>House 1</td>
                            </tr>
                            <tr>
                                <td>House 2</td>
                            </tr>
                            <tr>
                                <td>House 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`
    $('.dashTitle').replaceWith("<h1 class='dashTitle'>Inspections</h1>");
    $(".dash-main").html(html);
}
function inspectSlideCards(){
    let htlml = ''
    $(".main").html(html);
}
function reportDash(){

    let html = `       
            <div class="row">
                <div class="col-sm-11">
                    <table class="table table-striped table-hover reportTab" style="background-color:white;">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3668 Quimby St.</td>
                                <td>San Diego</td>
                                <td>Move In</td>
                                <td>2/22/2018</td>
                                <td>Completed</td>
                                <td>Daniel</td>
                            </tr>
                            <tr>
                                <td>3668 Tennyson St.</td>
                                <td>San Diego</td>
                                <td>Move In</td>
                                <td>2/22/2018</td>
                                <td>Completed</td>
                                <td>Daniel</td>
                            </tr>
                            <tr>
                                <td>3668 Poe St.</td>
                                <td>San Diego</td>
                                <td>Move Out</td>
                                <td>2/22/2018</td>
                                <td>Draft</td>
                                <td>Daniel</td>
                            </tr>
                            <tr>
                                <td>3668 Homer St.</td>
                                <td>San Diego</td>
                                <td>Move In</td>
                                <td>2/12/2018</td>
                                <td>In progress</td>
                                <td>Daniel</td>
                            </tr>
                            <tr>
                                <td>3668 Curtis St.</td>
                                <td>San Diego</td>
                                <td>Move In</td>
                                <td>2/22/2018</td>
                                <td>Completed</td>
                                <td>Daniel</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`
    $(".dash-main").html(html);
}
function templateDash(){
    let html = ''
    $('.dash-main').html(html);
};

$(".overview").on("click", function(){
    $('.dash-main').empty();

});
$(".units").on("click", function () {
    $(".dash-main").empty();

    unitDashFolders();

});
$(".city").on("click", function(){   
    
    $(".dash-main").empty();
    unitDashList()
});
$(".inspection").on("click", function () {
    $(".dash-main").empty();
    inspectDashCards();

});
$(".template").on("click", function () {
    $(".dash-main").empty();
    templateDash();

});
$(".report").on("click", function () {
    $(".dash-main").empty();
    
    reportDash();
});



$(document).on('click', '.addUnit', function(){
    $(".addUnit").leanModal({
        top: 100,
        overlay: 0.6,
        closeButton: ".close",
    });
})