document.addEventListener('DOMContentLoaded', inicio_docente);

let notas_3=[];
let def_nota3=0;

function inicio_docente(){
    document.getElementById('btn_add_nota3').addEventListener('click', agregarNota3);
    document.getElementById('btn_reg_notas_estudiante').addEventListener('click', registrarNotas);
    document.getElementById('nomb').addEventListener('change',validarNombrePersona);
    document.getElementById('cod').addEventListener('change',validarCodigoEstudiante);
    document.getElementById('nota1').addEventListener('change',validarNotaEstudiante);
    document.getElementById('nota2').addEventListener('change',validarNotaEstudiante);
    document.getElementById('nota3').addEventListener('change',validarNotaEstudiante);
  }

function agregarNota3(event)
{
  let txt_nota3=document.getElementById('nota3');
    if(txt_nota3.value.trim() != "")
    {
        notas_3.push(parseFloat(txt_nota3.value));
        let acum_nota3=0;
        let cad_acum_nota3="";

        notas_3.forEach(function(nota){
            acum_nota3+=nota;
            
            if(cad_acum_nota3 == "")
              cad_acum_nota3+=nota.toString();
            else
              cad_acum_nota3+="+"+nota.toString();
        });

        /*for(i=0; i< notas_3.length; i++)
          acum_nota3+=notas_3[i];
        */

        def_nota3=(acum_nota3/notas_3.length).toFixed(2);
        document.getElementById('rta_nota3').innerText="Acumulado Nota 3: ("+cad_acum_nota3+ ")/"+notas_3.length+" = "+(def_nota3);
        
        txt_nota3.value="";
        txt_nota3.focus();
    }
    else
      alert('Debe ingresar una nota, intentelo de nuevo');
}

function registrarNotas(evento)
{
    //event.stopPropagation();
    evento.preventDefault();
    //console.log(evento.currentTarget);
    //console.log(evento.target);
    //console.log(this);

    if(notas_3.length)
    {
      let txt_nota1=document.getElementById('nota1');
      let txt_nota2=document.getElementById('nota2');
      let definitiva=(parseFloat(txt_nota1.value)+parseFloat(txt_nota2.value)+parseFloat(def_nota3))/3;
  
      document.getElementById('rta_definitiva').innerText="Definitiva: "+definitiva.toFixed(2).toString();
  
      let obj_estudiante= {
        "codigo" : document.getElementById('cod').value,
        "nombre" : document.getElementById('nomb').value,
        "correo" : document.getElementById('corr').value,
        "previo_1"  : parseFloat(txt_nota1.value),
        "previo_2"  : parseFloat(txt_nota2.value),
        "previo_3"  : notas_3,
        "definitiva" : parseFloat(definitiva.toFixed(2))
      };
      
      //Otra forma de llenado de un objeto Json
      /*let obj_estudiante2= {};
      obj_estudiante2["codigo"]=document.getElementById('cod').value;
      obj_estudiante2.nombre=document.getElementById('nomb').value;
      obj_estudiante2["correo"]=document.getElementById('corr').value;
      obj_estudiante2.previo_1=txt_nota1.value;
      obj_estudiante2["previo_2"]=txt_nota2.value;
      obj_estudiante2.previo3=notas_3;
      obj_estudiante2["definitiva"]=definitiva.toFixed(2);*/
  
      estudiantes_notas.push(obj_estudiante);
      notas_3=[];
    }
    else
     alert('Debe registrar por lo menos una nota 3');


     document.getElementById('cod').value="";
     document.getElementById('corr').value="";
     document.getElementById('nomb').value="";
     document.getElementById('nota1').value="";
     document.getElementById('nota2').value="";
     txt_nota3=[];  
     document.getElementById('cod').focus();
     // document.getElementById('rta_definitiva').innerText="Definitiva: "+ 0;
     //document.getElementById('rta_nota3').innerText="Acumulado Nota 3: "+ 0;
}