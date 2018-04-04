let inspectPDF = {
   content:[
      {
         image: 'sampleImage.jpg',
         width:200,
         height:200
      },
      {text:'Move In Inspection', style: 'header'},
      {text:'3668 Quimby St San Diego, CA 92106', style: 'address'},
   ],
   styles:{
      header:{
         fontSize: 22,
         bold: true,
         margin [5,0,5,20]
      },
      address:{
         fontSize: 16,
         bold:true,
         margin [25,0,5,20]
      },
   },
   defaultStyle:{

   }
}