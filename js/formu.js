var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        //Expresión para validar edad de 18 a 60 años
        var expr2 = /^1[8-9]|[2-5]\d|60$/;
	 

	$(document).ready(function(){
		$("h1").after('<div id="formu"><form><div id="cabezera"></div><table></label><tr><td><label>Nonbre</label></td></tr><tr><td><input type="text"   class="inp" id="Nombre" name="nombre" placeholder="Nombre"  required="required"><div id="dos"></div></td></tr><tr><td><label>Pais de Procedencia</label></td></tr><tr><td><div id="mensaje3"></div><input type="text" name="pais" id="pais" placeholder="Ingrese el pais..." required="required"><div id="dos1"></div></td></tr><tr><td><label>Correo Electronico</label></td></tr><tr><td><input type="email" name="correo" id="apellidotxt" placeholder="Apellido"><div id="dos2"></div></td></tr><tr><td></td></tr><tr><td><label>Comentario</label></td></tr><tr><td><input type="text" name="apellido" id="nombretxt"  required="required"></select></td></tr><tr><td><input type="button" name="add" id="btnAgregar" value="Agregar" ></td></tr><tr><td><div id="resultado"></div></td></tr></form></div>')

		
		$("#dos").hide();
		});

	
            //aquie se crea el.formulario el id dos es el contiene el mensaje
$(document).ready(function(){
$(document).on("click", "#btnAgregar", function (){

 
                //Guardar en variables el valor que tengan las cajas de texto
                //Por medio de los id's
                //Y tener mejor manipulación de dichos valores
                var nombre = $("#Nombre").val();
                var correo = $("#apellidotxt").val();
                var asunto = $("#pais").val();
                var edad = $("#itEdad").val();
 
                // --- Condicionales anidados ----
                //Si nombre está vacío
                //Muestra el mensaje
                //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
                if(nombre == ""){
								$("#dos").show();
				$("#dos").html("Ingrese nombre");
				$("#dos").fadeOut(5000).hide(500);
				$("#dos").css("background-color","#FA5858");

                    return false;
                }
                //en otro caso, el mensaje no se muestra
                else{
                     $("#dos").fadeOut();
			
				
                    //Si correo está vacío y la expresión NO corresponde -test es función de JQuery
                    //Muestra el mensaje
                    //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
                    if(asunto == ""){

                $("#mensaje3").show();
				$("#mensaje3").html("ingrese su pais");
				$("#mensaje3").fadeOut(5000).hide(500);
				$("#mensaje3").css("background-color","#FA5858");

                            return false;
                        }
                        else{
                            $("#mensaje3").fadeOut();

                    if(correo == "" || !expr.test(correo)){
                   $("#dos2").show();
				 $("#dos2").html("correo incorecto");
				$("#dos2").fadeOut(5000).hide(500);
				$("#dos2").css("background-color","#FA5858");
                        return false;
                    }
                    else{
                        $("#dos2").fadeOut();
 
                        
                          
 
                            if(edad == "" || !expr2.test(edad)){
                                $("#mensaje4").fadeIn("slow");
                                return false;
                            }
                        }
                    }
                }
 
            });//click
//funcion para guardar los datos
});





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
  
 
