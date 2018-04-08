
let data = {
    headTitle: 'Move Out Inspection',
    street: '4222 Poe St',
    city: 'San Diego, CA 92106',
    imageHead: 'sampleImage.jpg',
    inspectDate: 'April 3, 2018 3:31 PM',
    reportDate: 'April 3, 2018 1:30 PM',
    sections:[
        {entry: {
            title: 'Entry',
            walls:{
                clean:'No',
                working:'yes',
                undamaged:'yes',
                notes:''
            },
            

        }
        
        
        },
        {livingroom:{
            title:'Livingroom',

        }
        },
    ]
};



        let body = [];
        let dateBox = `Inspected on ${data.inspectDate}    |    Created on ${data.reportDate}`;


        let dataHead = [{
            style: 'header',
            text: 'data.headTitle'
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
            width: 150,
            height: 150
        };
        let textHead = {
            width: '*',
            alignment: 'left',
            stack: dataHead
        };


        body.push(imgHead);
        body.push(texHead);
        
        return body;




function tableHead(data){
    return {
        table:{
            widths: ['auto','*'],
            body:[
                buildHeadTable(data)
            ]

        }
    }
}


let inspectPDF = {
    content: [

        {
            table: {
                widths: ['auto', '*'],
                body: body
            },
            layout: {
                hLineWidth: function (line) { return line === 1; },
                vLineWidth: function () { return 0; },
                paddingBottom: function () { return 5; }
            }
        },
        { text: 'Entry', style: 'section' },
        {
            style: 'sectionTable',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Items', style: 'dataHeader' }, { text: 'Clean', style: 'dataHeader' },
                    { text: 'Undamaged', style: 'dataHeader' }, { text: 'Working', style: 'dataHeader' },
                    { text: 'Notes', style: 'dataHeader' }],
                    ['Doors', 'No', 'Yes', 'Yes', 'There was dust and minor stains left on the wall'],
                    ['Walls', '', '', '', ''],
                    ['Ceiling', '', '', '', ''],
                    ['Flooring', '', '', '', ''],
                    ['Windows', '', '', '', ''],
                    ['Screens', '', '', '', ''],
                    ['Window Coverings', '', '', '', ''],
                ]
            }
        },
        { text: 'Entry Photos', style: 'photoText' },
        {
            style: 'photoTable',
            table: {
                widths: [125, 125, 125, 125],
                body: [
                    [
                        { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 },
                    ],
                    [
                        { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 },
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
        },
        { text: 'Livingroom', style: 'section' },
        {
            style: 'sectionTable',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Items', style: 'dataHeader' }, { text: 'Clean', style: 'dataHeader' },
                    { text: 'Undamaged', style: 'dataHeader' }, { text: 'Working', style: 'dataHeader' },
                    { text: 'Notes', style: 'dataHeader' }],
                    ['Doors', 'No', 'Yes', 'Yes', 'There was dust and minor stains left on the wall'],
                    ['Walls', '', '', '', ''],
                    ['Ceiling', '', '', '', ''],
                    ['Flooring', '', '', '', ''],
                    ['Windows', '', '', '', ''],
                    ['Screens', '', '', '', ''],
                    ['Window Coverings', '', '', '', ''],
                ]
            }
        },
        { text: 'Livingroom Photos', style: 'photoText' },
        {
            style: 'photoTable',
            table: {
                widths: [125, 125, 125, 125],
                body: [
                    [
                        { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 },
                    ],
                    [
                        { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 }, { image: 'sampleImage.jpg', width: 125, height: 150 },
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
        },

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
            margin: [5, 0, 20, 15],
            fontSize: 9
        },
        section: {
            fontSize: 26,
            bold: true,
            margin: [0, 20, 5, 20]
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
            margin: [3, 30, 0, 20]
        }
    },
    defaultStyle: {

    }
}