 document.addEventListener('DOMContentLoaded',inicio_estudiante); //inicioEstudiante
 //document.addEventListener('DOMContentLoaded', () => {
 //   Codigo fuente de lo que deseo hacer
 //});
function inicio_estudiante ()
{ 
   document.getElementById('btn_busc_cod').addEventListener('click', buscarCodigo);
   document.getElementById('txt_codigo').addEventListener('change',validarCodigoEstudiante);
}

function buscarCodigo()
{
    var cod= document.getElementById('txt_codigo').value;

    //mostrar
    var txt_nom=document.getElementById('p_nomb');    
    var txt_not1=document.getElementById('not1');
    var txt_not2=document.getElementById('not2');
    var txt_not3=document.getElementById('not3');
    var txt_def=document.getElementById('definitiva');
    var txt_estado=document.getElementById('estado');

    let encontrado=false;
    estudiantes_notas.forEach(function(dato_estudiante){
        if(dato_estudiante.codigo == cod)
        {
            encontrado=true;
            txt_nom.innerText=dato_estudiante.nombre;
            txt_not1.innerText=txt_not1.innerText+dato_estudiante.previo_1;
            txt_not2.innerText="Nota 2: "+dato_estudiante.previo_2;
            
            let acumulado=0;
            dato_estudiante.previo_3.forEach(function(nota){
              acumulado+=nota;
            });

            txt_not3.innerText="Nota 3: "+(acumulado/dato_estudiante.previo_3.length).toString();
            txt_def.innerText="Definitiva: "+dato_estudiante.definitiva;
            
            if(dato_estudiante.definitiva >= 3)
              txt_estado.innerHTML='Estado: <span style="color: green;">Aprobado</span>'; //txt_estado.innerText="Estado: Aprobado";
            else
              txt_estado.innerHTML='Estado: <span style="color: red;">No Aprobado</span>'; //txt_estado.innerText="Estado: No Aprobado";
        }
    });
    
    if(!encontrado) // !false = true o !true = false
    {
       alert(`Estudiante con codigo: ${cod} no encontrado`);    // alert('Estudiante con codigo: '+cod+' no encontrado');
       document.getElementById('txt_codigo').focus();
    }   
}