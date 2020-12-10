            var getData = function(){
                myWindow1 = window.open('','Nueva Ventana', 'width = 300, height = 200');
                myWindow1.document.write('<title>ventana secundaria</title>');
                myWindow1.document.writeln('Apellidos y Nombres: '); 
                myWindow1.document.write('<li>PINCAY ANCHUNDIA</li><li>JONATHAN MIGUEL</li>'); 

                myWindow1.document.write("<input type=\"button\" value=\"Cerra ventana\" id=\"btn2\">");
                myWindow1.document.getElementById("btn2").addEventListener("click", () =>{
                 myWindow1.close();
            });
           
                };

   