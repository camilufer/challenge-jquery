$(document).ready( function(){

     $('.js-back').hide();
     console.log('Activities: ', activities);
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
    printNews();
    console.log('Recipes: ', recipesArray);
  renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function printNews(){
	$('.callout-news').find('p').text('Nuevas recetas');
}

function renderHighlightedRecipes(recipesArray) {
  for (var i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].highlighted) {
      renderRecipe(recipesArray[i]);
    }
  }
	
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
    console.log('Voy a pintar la receta: ', recipe);
  $('.list-recipes').append('<a class="item-recipe" href="#">' +
          '<span class="attribution">'+
          '<span class="title-recipe"> ' +recipe.title +' </span>' +
          '<span class="metadata-recipe">' +
          '<span class="author-recipe"> '+recipe.source.name +' </span>'+
          '<span class="bookmarks-recipe">' +
          '<span class="icon-bookmark"></span>' +
          '</span>'+
          '</span>'+
          '</span>'+
          '<img src="assets/img/recipes/640x480/'+ recipe.name +'.jpg" /></a>');

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	
  for (var i = 0; i < activities.length; i++) {
      renderActivity(activities[i]);
    } 
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log('Activities: ', activities);
  /* El if es innecesario ya que al activarse esta funcion indica que recipe ya tiene mas de un elemento.
   * if (activities.lengh > 0);
  */
    $('.wrapper-message').hide();
}

/**
 * Funcion para asignar texto al parrafo
 * Con el metodo children() obtengo el primer elemento p que se encuentre en el div
 * Con html() le asigno el texto "nuevas recetas".
 */
/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
  
  var avatar = recipe.userAvatar;
  var name = recipe.userName;
  var title = recipe.recipeName;
  var texto = recipe.text;
  var place = recipe.place;
  var image = recipe.image; 
  $('.list-activities').append('<a href="#" class="item-activity">'+
                                  '<span class= "attribution">'+
                                    '<span class="avatar">'+
                                      '<img src="'+avatar+'" class="image-avatar">'+
                                    '</span>'+
                                    '<span class="meta">'+
                                      '<span class="author">'+name+'</span>'+
                                      '<span class="recipe">'+title+'</span>: '+texto+
                                      '<span class="location">&mdash;'+place+'</span>'+
                                    '</span>'+
                                  '</span >'+
                                  '<div class="bg-image" style="background-image: url(' + image +');"></div>'+
                                '</a >'
                              );
}

/**
 * Funcion para asignar texto al parrafo
 * Con el metodo children() obtengo el primer elemento p que se encuentre en el div
 * Con html() le asigno el texto "nuevas recetas".
 */
function printNews() {
  var hijo = $('.callout-news').children('p');
  hijo.html('<b>NUEVAS RECETAS</b>');
}
printNews();



  

