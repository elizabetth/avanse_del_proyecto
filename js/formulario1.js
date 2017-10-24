
	$(document).ready(function(){
		$("h1").after('<div id="formu"><form><div id="cabezera"></div><table></label><tr><td><label>Nonbre</label></td></tr><tr><td><input type="text"   class="inp" name="nombre" placeholder="Nombre"  required="required"></td></tr><tr><td><label>Pais de Procedencia</label></td></tr><tr><td><input type="text" name="pais" placeholder="Ingrese el pais..." required="required"></td></tr><tr><td><label>Correo Electronico</label></td></tr><tr><td><input type="email" name="correo" id="apellidotxt" placeholder="Apellido"></td></tr><tr><td><div id="dos"></div></td></tr><tr><td><label>Comentario</label></td></tr><tr><td><input type="text" name="apellido" id="nombretxt"  required="required"></select></td></tr><tr><td><input type="button" name="add" id="btnAgregar" value="Agregar" ></td></tr><tr><td><div id="resultado"></div></td></tr></form></div>')
		
		$("#dos").hide();
		});    //aquie se crea el.formulario el id dos es el contiene el mensaje


	$(document).on("click", "#btnAgregar", function(){ //esta funciom es para agregar el comumtario y supiestamente validar el formulario
			
		if($("input[name=correo]").val().match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)){
		

									
				$("#dos").show();
				$("#dos").html("Datos agregados exitosamente");
				$("#dos").fadeOut(5000).hide(500);
				$("#dos").css("background-color","#58FAAC");
			}else{

				$("#dos").show();
				$("#dos").html("Correo electronico ingresado incorrecto");
				$("#dos").fadeOut(5000).hide(500);
				$("#dos").css("background-color","#FA5858");

			}


		});
//funcion para guardar los datos

$(document).on("click", "#btnAgregar", function tt(){

//esta funciom es para guardar rn local el set item es de un placholder.
		 var nom =  $("#nombretxt").val();  
        var apel = $("#apellidotxt").val();
        /*Guardando los datos en el LocalStorage*/   
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
      
        var nom = $("#nombretxt").val('');    
        var apel = $("#apellidotxt").val('');
     
});

	


   
 
       $(document).on("click", "#boton-cargar", function gggg(){
       	 
   var resultado= "<h4>comentario:</h4><br>"+localStorage.getItem("Nombre")+"<br>";
  
$("#campos").append(resultado);  //llama al contendio del placeholder guardandolo en un div llamado campo
  
 



});

        
