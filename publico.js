document.addEventListener('DOMContentLoaded',inicio_publico);
//document.addEventListener('DOMContentLoaded', () => {}

function inicio_publico()
{
    document.getElementById('txt_busq_nombre').addEventListener('change',validarNombrePersona);
    document.getElementById('btn_busc_nom').addEventListener('click', buscarNombreTabla);
}

function buscarNombreTabla(evento)
{    
    let tabla_publico= document.getElementsByTagName('tbody')[0];
    //Todos los td del primer tr de tbody
    //console.log(tabla_publico.children[0].children);
    
    for (const tr_estudiante of tabla_publico.children) 
      tr_estudiante.style="";

    //for (var i=0; i < tabla_publico.children.length; i++) 
    //    tabla_publico.children[i].style="";
    
    let txt_busq=document.getElementById('txt_busq_nombre');
    estudiantes_notas.forEach(function(estudiante){
        if(estudiante.nombre.toLowerCase().includes(txt_busq.value.toLowerCase().trim()))
          document.getElementById(estudiante.codigo).style.backgroundColor="red";
    });
}


