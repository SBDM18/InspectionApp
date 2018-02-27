module.exports = htmlPages = {
    unitDashFolders: function(){
        let html = `<div class="row">
                    <div class="col-sm-2">
                        <div style="color: Blue ">
                            <i class="fas fa-caret-square-left fa-4x"></i>
                        </div>
                    </div>                    
                    <div class="col-sm-10">
                        <div style="font-size: 24px; color: lightblue ">
                            <h1>Units</h1>
                        </div>
                    </div>
                </div>
                <div class="row search-cont">
                    <div class="col-sm-8">
                        <div class="search">
                            <span class="fas fa-search"></span>
                            <input type="text" class="unitSearch" placeholder="Search for specific unit">                            
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <button id="unitSearch" class="button">Search</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="city" style="color:white;">
                                    <i class="fas fa-folder fa-5x"></i>
                                    <p class="cityTitle">San Diego</p>
                                </div>
                            </div>
                            <div class="col-sm-4" style="color:white;">
                                <div class="city">
                                    <i class="fas fa-folder fa-5x"></i>
                                    <p class="cityTitle">San Diego</p>
                                </div>
                            </div>
                            <div class="col-sm-4" style="color:white;">
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
                </div> `;
        $(".main").html(html);
    },
    unitDashList: function () {
        
    },
    inspectDashCards: function(){

    },
    inspectSlideCards: function(){

    },
    reportDash: function(){

    },
    templateDash: function(){

    }
};