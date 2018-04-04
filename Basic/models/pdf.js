let inspectPDF = {
    content: {
        content: [

            {
                table: {
                    widths: ['auto', '*'],
                    body: [
                        [
                            {
                                image: 'sampleImage.jpg', width: 150, height: 150
                            },
                            {
                                width: '*',
                                alignment: 'left',
                                stack: [
                                    {
                                        style: 'header',
                                        text: 'Move In Inspection'
                                    },
                                    {
                                        style: 'street',
                                        text: '3668 Quimby St'
                                    },
                                    {
                                        style: 'city',
                                        text: 'San Diego, CA 92106'
                                    },
                                    {
                                        style: 'dateTable',
                                        table: {
                                            body: [
                                                [
                                                    {
                                                        border: [false, false, false, false],
                                                        fillColor: '#cccccc',
                                                        text: 'Inspected on April 3, 2018 3:31PM   |   Report Created on April 3, 2018 1:30 PM'
                                                    },
                                                ]
                                            ]
                                        }
                                    }

                                ]
                            }
                        ]
                    ]
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
            // {
            //     table:{
            //         body:[
            //             [
            //                 {
            //                     rowSpan: 4,
            //                     stack:[
            //                         { image: 'sampleImage.jpg', margin: [20, 20, 20, 20] },
            //                         { image: 'sampleImage.jpg', margin: [20, 20, 20, 20] },
            //                         { image: 'sampleImage.jpg', margin: [20, 20, 20, 20] },
            //                         { image: 'sampleImage.jpg', margin: [20, 20, 20, 20] },
            //                         { image: 'sampleImage.jpg', margin: [20, 20, 20, 20] },
            //                         { image: 'sampleImage.jpg', margin: [20, 20, 20, 20] },
            //                     ]
            //                 }
            //             ]
            //         ]
            //     }
            // },        
            {
                table: {
                    body: [
                        [
                            {
                                border: [false, false, false, true],
                                text: '                                                          '
                            }
                        ]
                    ]
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
                margin: [0, 15, 15, 5]
            }
        },
        defaultStyle: {

        }
    }
}