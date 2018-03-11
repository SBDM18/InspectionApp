const mongoose = require('mongoose'); 

const templateSchema = mongoose.Schema({

    template_id: mongoose.Schema.Types.ObjectId,
    title: String,
    entry: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        doorbell: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: Blob
        }]
    }],
    bedroom: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        windowcoverings: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        windows: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        screens: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        smokealarm: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
    }],
    bathroom: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        doors: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: Blob           
        }],
        cabinets: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        towelrack: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        countertop: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        showerdoor: [{
            quality: String,
            img_album: String,
            note: Blob           
        }],
        shower: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        mirror: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        sink: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        faucet: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        exhaustfan: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        toilet: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        toilettissuedispenser: [{
            quality: String,
            img_album: String,
            note: Blob            
        }]
    }],
    halls: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        stairs: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        smokealarm: [{
            quality: String,
            img_album: String,
            note: Blob            
        }],
        carbonmono: [{
            quality: String,
            img_album: String,
            note: Blob            
        }] 
    }],
    stairs: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        stairs: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        railings: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        closet: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        smokealarm: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        carbonmono: [{
            quality: String,
            img_album: String,
            note: Blob
        }]
    }],
    kitchen: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        cupboards: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        countertop: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        pantry: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        refrigerator: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        oven: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        stovetop: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        exhaustfan: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        sink: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        faucet: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        garbagedisp: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        microwave: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        dishwasher: [{
            quality: String,
            img_album: String,
            note: Blob
        }]
    }],
    livingroom: [{
        walls: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        ceiling: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        flooring: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        baseboards: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        lights: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        poweroutlets: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        windows: [{
            quality: String,
            img_album: String,
            note: Blob
        }],
        screens: [{
            quality: String,
            img_album: String,
            note: Blob
        }]
    }],
})


module.exports=mongoose.model('Templates', templateSchema);