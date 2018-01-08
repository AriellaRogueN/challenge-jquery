$(document).ready( function(){
 /*Eliminando icono flecha*/ 
	$("#back").remove();

	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

});

$("#recetas").html(function printNews(){
 $("#recetas").html("Nuevas recetas")
	
});

//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

function renderHighlightedRecipes(recipesArray) {
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true) {
			renderRecipe(recipesArray[i]);			
		};
	};
};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/


function renderRecipe(recipe) {
console.log('Voy a pintar la receta: ', recipe)  /*utilizo variables*/
	var titulo = recipe.title 
	var autor = recipe.source.name
	var url= recipe.name
	
	$("#list").append('<a class="item-recipe" href="#">' +
		                  '<span class="attribution">' +
		                  '<span class="title-recipe">' + titulo + '</span>' +
		                  '<span class="metadata-recipe">' +
		                  '<span class="author-recipe">' + autor + '</span>' +
		                  '<span class="bookmarks-recipe">' +
		                  '<span class="icon-bookmark">' +
		                  '</span>' + '</span>' + '</span>' +  '</span>' +
		                  '<img src= "img/recipes/320x350/' + url + '.jpg"/>' +
		                  '</a>')
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for (var i = 0; i < activitiesArray.length; i++){
		 renderActivity(activitiesArray [i])
		 if(activitiesArray[i] > 0){
			 $("#wrapper-msg").hide();
        }  
    }
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/

/*Otra forma*/
function renderActivity(recipe) {
	console.log(recipe);
	$("#activity-list").append("<a href='#' class='item-activity'>" +
		                       "<span class='attribution'>" +
		                       "<span class='avatar'>" +
		                       "<img src='" + recipe.userAvatar + "'class='image-avatar'>" +
		                       "</span>" +
		                       "<span class='meta'>" +
		                       "<span class='author'>" + recipe.userName +
		                       "</span>made" +
		                       "<span class='recipe'>" + recipe.recipeName +
		                       "</span>: " + recipe.text +
		                       "<span class='location'>&mdash;" + recipe.place +
		                       "</span>" + "</span>" +"</span>" +
		                       "<div class='bg-image' style='background-image: url(" + recipe.image + ");'>" +
		                       "</div>" +
		                       "</a >")
}




