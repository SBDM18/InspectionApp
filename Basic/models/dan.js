//this array will be 10 length approx
//this is the final output for the pdf creator, passed in as argument 
let arrayOfObjects = 
[
{ text: 'Entry', style: 'section' },  //'entry is section title 

{
         style: 'sectionTable', //static
         table: {
            headerRows: 1,  //static
            body: [
               [{ text: 'Items', style: 'dataHeader' }, { text: 'Clean', style: 'dataHeader' },
               { text: 'Undamaged', style: 'dataHeader' }, { text: 'Working', style: 'dataHeader' },
               { text: 'Notes', style: 'dataHeader' }], //this static first item in array
               ['Doors', 'No', 'Yes', 'Yes', 'There was dust and minor stains left on the wall'],
               ['Walls', '', '', '', ''],
               ['Ceiling', '', '', '', ''],
               ['Flooring', '', '', '', ''],
               ['Windows', '', '', '', ''],
               ['Screens', '', '', '', ''],
               ['Window Coverings', '', '', '', ''],  //table.body is the section array
            ]
         }
      },

{ text: 'Entry Photos', style: 'photoText' }, //section property ie. entry, liviing room  + "Photos", style static

//ignore images for now 
{
         table: {
            widths: [125, 125, 125, 125],
            body: [
               [
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
               ],
               [
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
                  {
                     image: 'sampleImage.jpg', width: 125, height: 150
                  },
               ]
            ]
         },
         layout: 'noBorders'
      }
      ];







//entry data, output desired above
let data = {
    headTitle: 'Move Out Inspection',
    street: '4222 Poe St',
    city: 'San Diego, CA 92106',
    imageHead: 'sampleImage.jpg',
    inspectDate: 'April 3, 2018 3:31 PM',
    reportDate: 'April 3, 2018 1:30 PM',
    sections:[
        {
          entry: 
            [
              {title:'Walls',working:'No',clean:'yes',undamaged:'yes',note:''},
              {title:'Doors',working:'Yes',clean:'No',undamaged:'No',note:'dirty'},
              {title:'Outlets',working:'Yes',clean:'Yes',undamaged:'No',note:''}
            ]  
        },
        {livingroom:
        [
          {title:'Walls',working:'No',clean:'Yes',undamaged:'Yes',note:'dirt'},
          {title:'Windows',working:'No',clean:'No',undamaged:'Yes',note:'clean'},
          {title:'Doors',working:'Yes',clean:'Yes',undamaged:'Yes',note:'hole in door'}
        ]
        },
    ]
};




function zData(data)
{
  //console.log(data.sections);
 //console.log( Object.keys(data.sections));
 let pdfObjectHolder = [];//hold all objects
 let tempObject = {};//
 let body = [];//hold body array for sections
 let tempArray = [];
 let currentKey = "entry";
 const sectionLength =  data.sections.length;

 data.sections.map((item, index)=>
 {
  
  let key = Object.keys(item)[0]; //entry, livingroom, etc
  console.log("currentKey: ", currentKey, "and key: ", key);
  
  //section is done so create entire object for pdfObjectHolder
   if(currentKey !== key)
    {
      console.log('new key : ', currentKey);
      createPdfObject(pdfObjectHolder, currentKey, body);
      // wrap existing array in an array 
      // body.push(arrayWrapper);
      body = [];
      currentKey = key;
     
    }

  //console.log(item[key]); //the array for entry livingroom
  item[key].map(item=>
  {
    //create each array
    //if(key == "livingroom"){console.log('living room item ', item);}
    tempArray.push(item.title);
    tempArray.push(item.clean);
    tempArray.push(item.undamaged);
    tempArray.push(item.working);
    tempArray.push(item.note);
    body.push(tempArray);
    tempArray = [];
  });

  if(index === (sectionLength - 1))
    {
    //on the last item 
   // body.push(arrayWrapper);
    createPdfObject(pdfObjectHolder, key, body);
    }
   
  });
  return pdfObjectHolder;
}

function createPdfObject(pdfObjectHolder, key, body)
{
    pdfObjectHolder.push({"text":key,
                            "style":"section"
                           });
    
    pdfObjectHolder.push(
              {
                "style": "sectionTable",
                "table":{
                      "headerRows":1,
                      "body":body  //body is the array of values for each section
                        }

              }
        );

      //{ text: 'Entry Photos', style: 'photoText' }, //section property ie. entry, liviing room  + "Photos", style static
    pdfObjectHolder.push(
              {
                "text":key + " Photos",
                "style": "photoText"
              });

}


let arrayWrapper = [];
function zDataOriginalForArrayOfArrays(data)
{
  //console.log(data.sections);
 //console.log( Object.keys(data.sections));
 let body = [];//push headInfo array first
 let arrayWrapper = [];
 let tempArray = [];
 let currentKey = "entry";
 const sectionLength =  data.sections.length;
 
 data.sections.map((item, index)=>
 {
  //console.log(item);
  //console.log(Object.keys(item));
  
  let key = Object.keys(item)[0]; //entry, livingroom, etc
  console.log("currentKey: ", currentKey, "and key: ", key);
  
  //when key changes, push the array of array into body
  if(currentKey !== key)
  {
    console.log('new key');
    //wrap existing array in an array 
    body.push(arrayWrapper);
    arrayWrapper = [];
    currentKey = key;
  
  }
  //console.log(item[key]); //the array for entry livingroom
  item[key].map(item=>
  {
    //create each array
    //if(key == "livingroom"){console.log('living room item ', item);}
    tempArray.push(item.title);
    tempArray.push(item.clean);
    tempArray.push(item.undamaged);
    tempArray.push(item.working);
    tempArray.push(item.note);
    arrayWrapper.push(tempArray);
    tempArray = [];
  });

  if(index === (sectionLength - 1))
    {
    //on the last item 
    body.push(arrayWrapper);
    }
 
 });
 return body;
}

//final struture array of arrays
// [['Doors', 'No', 'Yes', 'Yes', 'There was dust and minor stains left on the wall'],
//  ['Walls', '', '', '', '']
// ]

function data1 (data){
     let info = data.sections[0].entry;
     //let info1 = data.sections[1].livingroom;
     
  info.map(obj =>{
      // console.log(obj)
  })
  // info1.map(obj1 =>{
  //   console.log(obj1)
  // })
}

console.log("pdfObjectHolder: \n", JSON.stringify(zData(data)));



