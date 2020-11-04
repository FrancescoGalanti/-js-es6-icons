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

   console.log(color);


   // the destination of printing //
   const container = $(".icons");

  // print icons in html with a function

  // printinhtml(icons,container)


  // print icons in html with  color in a new array //

  const iconsColored = matchcolor(icons,color)
  // testing
  console.log(iconsColored)
   // printing with a existing function //
   printinhtml(iconsColored,container)


   // event in the tag select that create the following option: all, animal, vegetable, user, //

   // tag select //
   const select = $("#type");
   // get the different type with an existing function in a new array //
   const arrayTypes = getType(icons);
   console.log(types)

   // generation option with a function //

   generateOption(arrayTypes, select)





 }); //<-- end here//


 // FUNCTION //




  // function of printing in screnn with due paramets

 function printinhtml(array,destination){
     // Trasforming the object value in variable
     array.forEach((element) => {
          const {family,prefix, name,color} = element;



       // creation variable printable //
          const html =
          `<div class="icon">
             <i class="${family} ${prefix}${name}"
             style="color: ${color}"></i>
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
        console.log(type);

        // duplicate the array and adding color //
        const pairColor = normalArray.map((element) => {
              // variable containing the macthing type with color using indexOf //
              const indexType = type.indexOf(element.type)
              return{
                // spreding inside a map //
                ...element,
                  // matching the color with the right type  //
                color: arrayColor[indexType]
              }
        });
        // result //
        return pairColor;
 }


 /*
 ** finding the variuos type in an array with object
 **/

 function getType(array){
   // variable type//
   const types = [];
   // get the type without duplicate the value //
   array.forEach((element) => {
     if(! types.includes(element.type)){
        types.push(element.type)
     };
   });
   // result //
   return types;

 };

/*
**function that generates as many options as types
*/
 function generateOption(arrayTypes,option) {
   arrayTypes.forEach((element) => {
        select
   });

 }
