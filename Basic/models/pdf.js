let street = '4212 Poe';
let city = 'La Mesa, CA 92129';

let data = {
    headTitle: 'Move Out Inspection',
    street: '4222 Poe St',
    city: 'San Diego, CA 92106',
    imageHead: 'sampleImage.jpg',
    inspectDate: 'April 3, 2018 3:31 PM',
    reportDate: 'April 3, 2018 1:30 PM',
            
};

function zData(data) {
    //console.log(data.sections);
    //console.log( Object.keys(data.sections));
    let pdfObjectHolder = [];//hold all objects
    let tempObject = {};//
    let body = [];//hold body array for sections
    let header = [{ text: 'Items', style: 'dataHeader' }, { text: 'Clean', style: 'dataHeader' },
    { text: 'Undamaged', style: 'dataHeader' }, { text: 'Working', style: 'dataHeader' },
    { text: 'Notes', style: 'dataHeader' }];

    body.push(header);

    let tempArray = [];
    let currentKey = "Entry";
    const sectionLength = data.sections.length;

    data.sections.map((item, index) => {

        let key = Object.keys(item)[0]; //entry, livingroom, etc
        console.log("currentKey: ", currentKey, "and key: ", key);

        //section is done so create entire object for pdfObjectHolder
        if (currentKey !== key) {
            console.log('new key : ', currentKey);
            createPdfObject(pdfObjectHolder, currentKey, body);
            // wrap existing array in an array 
            // body.push(arrayWrapper);
            body = [];
            currentKey = key;

            let header = [{ text: 'Items', style: 'dataHeader' }, { text: 'Clean', style: 'dataHeader' },
            { text: 'Undamaged', style: 'dataHeader' }, { text: 'Working', style: 'dataHeader' },
            { text: 'Notes', style: 'dataHeader' }];

            body.push(header);

        }

        //console.log(item[key]); //the array for entry livingroom
        item[key].map(item => {
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

        if (index === (sectionLength - 1)) {
            //on the last item 
            // body.push(arrayWrapper);
            createPdfObject(pdfObjectHolder, key, body);
        }

    });
    return pdfObjectHolder;
}

function createPdfObject(pdfObjectHolder, key, body) {
    pdfObjectHolder.push({
        "text": key,
        "style": "section"
    });

    pdfObjectHolder.push(
        {
            style: "sectionTable",
            table: {
                "headerRows": 1,
                "body": body  //body is the array of values for each section
            },
            layout: {
                hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 2 : 1;
                },
                vLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                },
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                },
                paddingLeft: function (i, node) { return 16; },
                paddingRight: function (i, node) { return 10; },
                paddingTop: function (i, node) { return 5; },
                paddingBottom: function (i, node) { return 5; },
                // fillColor: function (i, node) { return null; }
            }
        }
    );

    //{ text: 'Entry Photos', style: 'photoText' }, //section property ie. entry, liviing room  + "Photos", style static
    pdfObjectHolder.push(
        { text: key + " Photos", style: "photoText" },
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
                    ]


                ]
            },
            layout: 'noBorders'
        },
        {
            style: 'line',
            table: {
                widths: ['*'],
                body: [[" "], [" "]]
            },
            layout: {
                hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 2;
                },
                vLineWidth: function (i, node) {
                    return 0;
                },
            }
        }



    );

}

function buildHeadTable(info) {
    let body = [];
    let dateBox = `Inspected on ${data.inspectDate}  |  Created on ${data.reportDate}`;

    let dataHead = [{
        style: 'header',
        text: data.headTitle
    }, {
        style: 'street',
        text: data.street
    }, {
        style: 'city',
        text: data.city
    }, {
        style: 'dateTable',
        table: {
            body: [
                [{
                    border: [false, false, false, false],
                    fillColor: '#cccccc',
                    text: dateBox
                }]
            ]
        }
    }];
    let imgHead = {
        image: data.imageHead,
        width: 175,
        height: 175
    };
    let textHead = {
        width: '*',
        alignment: 'left',
        stack: dataHead
    };
    body.push(imgHead);
    body.push(textHead);

    return body;
}

function tableHead(data) {
    return {
        table: {
            widths: ['auto', '*'],
            body: [
                buildHeadTable(data)
            ]

        },
        layout: {
            hLineWidth: function (line) { return line === 1; },
            vLineWidth: function () { return 0; },
            paddingBottom: function () { return 5; }
        }
    }
}

var dd = {
    content: [
        tableHead(data),
        zData(data),
    ],
    styles: {
        header: {
            fontSize: 26,
            bold: true,
            margin: [5, 0, 0, 10],
        },
        street: {
            fontSize: 14,
            bold: true,
            margin: [5, 35, 5, 5],
        },
        city: {
            fontSize: 14,
            bold: true,
            margin: [5, 0, 5, 21],
        },
        dateTable: {
            margin: [5, 23, 20, 15],
            fontSize: 9
        },
        section: {
            fontSize: 26,
            bold: true,
            margin: [0, 20, 5, 20]
        },
        sectionTable: {
            margin: [15, 0, 0, 10]
        },
        dataHeader: {
            fontSize: 14,
            bold: true,
            color: 'black',
            fillColor: '#cccccc'
        },
        photoText: {
            fontSize: 16,
            bold: true,
            margin: [0, 20, 15, 20]
        },
        line: {
            margin: [0, 30, 0, 30]
        }
    },
    defaultStyle: {
    }
}