/*
**javascript
**/


 // Jquerys //

 $(document).ready(function(){
   // Icon set
   const icons = [
       {
         name: 'cat',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'crow',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'dog',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'dove',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'dragon',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'horse',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'hippo',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'fish',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
       },
       {
         name: 'carrot',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
       },
       {
         name: 'apple-alt',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
       },
       {
         name: 'lemon',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
       },
       {
         name: 'pepper-hot',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
       },
       {
         name: 'user-astronaut',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
       },
       {
         name: 'user-graduate',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
       },
       {
         name: 'user-ninja',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
       },
       {
         name: 'user-secret',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
       },
   ];

   // referenze //

   // array color //
   const color = [
     "blue",
     "orange",
     "purple"
   ];


   // the destination of printing //
   const container = $(".icons");

  // print icons in html with a function

  printinhtml(icons,container)


  // print icons in html with  color in a new array //

  const iconsColored = matchcolor(icons,color)
  // testing
  console.log(iconsColored)





 }); //<-- end here//


 // FUNCTION //




  // function of printing in screnn with due paramets

 function printinhtml(array,destination){
     // Trasforming the object value in variable
     array.forEach((element) => {
          const {family,prefix, name} = element;



       // creation variable printable //
          const html =
          `<div class="icon">
             <i class="${family} ${prefix}${name}"></i>
             <div class ="title">${name}</div>
          </div>`;

              // printing in screen //
             destination.append(html);

     });


 };

 // function that help pairing the color with the right type //

 function matchcolor(normalArray,arrayColor){
        // get the different type //
        const type = getType(normalArray);
 }


 /*
 ** finding the variuos type in an array with object
 **/

 function getType(array){
   const type = [];

   array.forEach((element) => {

   });

 };
