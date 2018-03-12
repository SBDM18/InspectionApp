


const html = `
    <div class="container-fluid">

        <div class="row">

            <div class="col-sm-12 body">

                <div id="accordion" role="tablist" aria-multiselectable="true">

                </div>

            </div>

        </div>

    </div>
`

const cards = `
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h5 class="mb-0">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </a>
                            </h5>
                        </div>
                
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                            <div class="card-block">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
`
let quanitity = 0;
const condition = ['clean', 'dirty', 'not working'];
let note = '';


var template = {
    templateName1: {
        entry: {
            walls: [0, condition, note], 
            ceiling: [quanitity, condition, note],
            doors: [quanitity, condition, note],
            flooring: [quanitity, condition, note],
            baseboards: [quanitity, condition, note],
            doorbell: [quanitity, condition, note],
            lights: [quanitity, condition, note]
        },
        bedroom: {
            walls: "clean", 
            ceiling: "clean",
            doors: "clean",
            windowcoverings: 'clean',
            windows: 'clean',
            screens: 'clean',
            flooring: 'clean',
            baseboards: 'clean',
            closet: 'clean',
            poweroutlets: 'clean',
            closet: 'clean',
            smokealarm: 'clean',
        },
        bathroom: {
            walls: 'clean',
            ceiling: 'clean',
            doors: 'clean',
            flooring: 'clean',
            doors: 'clean',
            baseboards: 'clean',
            lights: 'clean',
            poweroutlets: 'clean',
            cabinets: 'clean',
            towelrack: 'clean',
            countertop: 'clean',
            showerdoor: 'clean',
            shower: 'clean',
            mirror: 'clean',
            sink: 'clean',
            faucet: 'clean',
            exhaustfan: 'clean',
            toilet: 'clean',
            toilettissuedispenser: 'clean'
        },
        halls: {
            walls: 'clean',
            ceiling: 'clean',
            flooring: 'clean',
            baseboards: 'clean',
            lights: 'clean',
            stairs: 'clean',
            closet: 'clean',
            smokealarm: 'clean',
            carbonmono: 'clean'        
        }
    }
}

//button constructor
function button(template){
    this.bedrooms = template.bedrooms,
    this.baths = template.baths,
    this.kitchen = template.kitchen,
    this.livingroom = template.livingroom,
    this.makeButton = function(id){

        $('.body').append(cards);
    }
}

