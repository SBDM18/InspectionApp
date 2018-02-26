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



    $('.overview').on('click', function(){
        let html = `
        <div class="row">
            <div class="col-sm-12 pageHeader">
                <span style="width:75%; background-color:#BFC1D2; border-radius:10px; 
                text-align:center; padding-top:20px; padding-bottom:20px; 
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);">Account Overview</span>
            </div>
            <div class="col-sm-6 addUnitBlock">
                <div class="pageHeader">Add a Unit</div>
                <button class="btn close addUnit addUnitBtn" href="#addUnitModal">Add a Unit</button>
            </div>
            <div class="col-sm-6 importExportBlock">
                <div class="pageHeader">Import export</div>
                <button class="btn close addUnit addUnitBtn" href="#addUnitModal">Import</button>
                <button class="btn close addUnit addUnitBtn" href="#addUnitModal">Export</button>
            </div>
        </div>
        `
        $('.dashboard-body').html(html);
    })
})