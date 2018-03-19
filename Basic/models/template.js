const mongoose = require('mongoose'); 

const templateSchema = mongoose.Schema({

    template_id: mongoose.Schema.Types.ObjectId,
    title: String,
    entry: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: String
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String
        }],
        doorbell: [{
            quality: String,
            img_album: String,
            note: String
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: String
        }]
    }],
    bedroom: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: String
        }],
        windowcoverings: [{
            quality: String,
            img_album: String,
            note: String
        }],
        windows: [{
            quality: String,
            img_album: String,
            note: String
        }],
        screens: [{
            quality: String,
            img_album: String,
            note: String
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: String
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: String
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: String
        }],
        smokealarm: [{
            quality: String,
            img_album: String,
            note: String
        }],
    }],
    bathroom: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: String           
        }],
        cabinets: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        towelrack: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        countertop: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        showerdoor: [{
            quality: String,
            img_album: String,
            note: String           
        }],
        shower: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        mirror: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        sink: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        faucet: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        exhaustfan: [{
            quality: String,
            img_album: String,
            note: String
        }],
        toilet: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        toilettissuedispenser: [{
            quality: String,
            img_album: String,
            note: String            
        }]
    }],
    halls: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        stairs: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        smokealarm: [{
            quality: String,
            img_album: String,
            note: String            
        }],
        carbonmono: [{
            quality: String,
            img_album: String,
            note: String            
        }] 
    }],
    stairs: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: String
        }],
        stairs: [{
            quality: String,
            img_album: String,
            note: String
        }],
        railings: [{
            quality: String,
            img_album: String,
            note: String
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: String
        }],
        smokealarm: [{
            quality: String,
            img_album: String,
            note: String
        }],
        carbonmono: [{
            quality: String,
            img_album: String,
            note: String
        }]
    }],
    kitchen: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: String
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: String
        }],
        cupboards: [{
            quality: String,
            img_album: String,
            note: String
        }],
        countertop: [{
            quality: String,
            img_album: String,
            note: String
        }],
        pantry: [{
            quality: String,
            img_album: String,
            note: String
        }],
        refrigerator: [{
            quality: String,
            img_album: String,
            note: String
        }],
        oven: [{
            quality: String,
            img_album: String,
            note: String
        }],
        stovetop: [{
            quality: String,
            img_album: String,
            note: String
        }],
        exhaustfan: [{
            quality: String,
            img_album: String,
            note: String
        }],
        sink: [{
            quality: String,
            img_album: String,
            note: String
        }],
        faucet: [{
            quality: String,
            img_album: String,
            note: String
        }],
        garbagedisp: [{
            quality: String,
            img_album: String,
            note: String
        }],
        microwave: [{
            quality: String,
            img_album: String,
            note: String
        }],
        dishwasher: [{
            quality: String,
            img_album: String,
            note: String
        }]
    }],
    livingroom: [{
        walls: [{
            quality: String,
            img_album: String,
            note: String
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: String
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: String
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: String
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: String
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: String
        }],
        windows: [{
            quality: String,
            img_album: String,
            note: String
        }],
        screens: [{
            quality: String,
            img_album: String,
            note: String
        }]
    }],
});


module.exports=mongoose.model('Templates', templateSchema);