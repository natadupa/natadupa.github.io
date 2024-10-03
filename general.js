let estudiantes_notas=[
    {
        "codigo" : "152001",
        "nombre" : "Pedro Cardenas",
        "correo" : "pdro@gmail.com.co",
        "previo_1"  : 4.5,
        "previo_2"  : 3.8,
        "previo_3"  : [3.6 , 4.1, 4.8, 2],
        "definitiva" : 3.93
    }
];

document.addEventListener('DOMContentLoaded', inicio_general);

let li_docente, li_estudiante, li_publico, sec_docente, sec_estudiante, sec_publico;

function inicio_general(){
    li_docente= document.getElementById('li_docente');
    li_docente.addEventListener('click', mostrarDocente);

    li_estudiante=document.getElementById('li_estudiante');
    li_estudiante.addEventListener('click', mostrarEstudiante);

    li_publico=document.getElementById('li_publico');
    li_publico.addEventListener('click', mostrarpublico);

    sec_docente=document.getElementById('sec_docente');
    sec_estudiante= document.getElementById('sec_estudiante');
    sec_publico=document.getElementById('sec_publico');
}

function mostrarDocente(event)
{
   li_docente.style.backgroundColor="darkgray";
   li_estudiante.style.backgroundColor="blanchedalmond";
   li_publico.style.backgroundColor="blanchedalmond";
   sec_docente.style.display="block";
   sec_estudiante.style.display="none";
   sec_publico.style.display="none";
}

function mostrarEstudiante(event)
{
    li_estudiante.style.backgroundColor="darkgray";
    li_docente.style.backgroundColor="blanchedalmond";
    li_publico.style.backgroundColor="blanchedalmond";
    sec_docente.style.display="none";
    sec_estudiante.style.display="block";
    sec_publico.style.display="none";
}

function mostrarpublico(event)
{
    let tabla_publico= document.getElementsByTagName('tbody')[0];
    tabla_publico.innerHTML="";

    var fila, colum_codigo, texto_codigo; 
    var colum_nombre, texto_nombre;
    estudiantes_notas.forEach(function(estudiante){
        fila = document.createElement("tr");
        //fila.setAttribute('id', estudiante.codigo);
        fila.id=estudiante.codigo;

        colum_codigo = document.createElement("td");
        texto_codigo = document.createTextNode(estudiante.codigo);
        colum_codigo.appendChild(texto_codigo);
        fila.appendChild(colum_codigo);
        
        colum_nombre = document.createElement("td");
        texto_nombre = document.createTextNode(estudiante.nombre);
        colum_nombre.appendChild(texto_nombre);
        fila.appendChild(colum_nombre);

        colum_nota1 = document.createElement("td");
        texto_nota1 = document.createTextNode(estudiante.previo_1);
        colum_nota1.appendChild(texto_nota1);
        fila.appendChild(colum_nota1);

        colum_nota2 = document.createElement("td");
        texto_nota2 = document.createTextNode(estudiante.previo_2);
        colum_nota2.appendChild(texto_nota2);
        fila.appendChild(colum_nota2);
        
        let acumulado=0;
        estudiante.previo_3.forEach(function(nota){
            acumulado+=nota;
        });

        colum_nota3 = document.createElement("td");
        texto_nota3 = document.createTextNode((acumulado/estudiante.previo_3.length).toString());
        colum_nota3.appendChild(texto_nota3);
        fila.appendChild(colum_nota3);

        colum_definitiva = document.createElement("td");
        texto_definitiva = document.createTextNode(estudiante.definitiva);
        colum_definitiva.appendChild(texto_definitiva);
        fila.appendChild(colum_definitiva);

        tabla_publico.appendChild(fila);
    });

    li_publico.style.backgroundColor="darkgray";
    li_docente.style.backgroundColor="blanchedalmond";
    li_estudiante.style.backgroundColor="blanchedalmond";
    sec_docente.style.display="none";
    sec_estudiante.style.display="none";
    sec_publico.style.display="block";
}

function validarNombrePersona(evento)
{
    /*var input_nombre = document.getElementById('nomb').value;
    var input_nombre = this.value;
    var input_nombre = evento.target.value;*/
    
    var input_nombre = this;
    var letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    if (!letras.test(input_nombre.value)) 
    {
            alert('El campo solo debe contener letras y símbolos válidos.');
            input_nombre.value="";
            input_nombre.focus();
    }   
}

function validarCodigoEstudiante(evento) 
{
    var input_cod = evento.target;
    var numeros = /^[0-9]+$/; // Solo números
    if (!numeros.test(input_cod.value))
    {
        alert('Solo se permiten números.');
        input_cod.value="";
        input_cod.focus();
    }   
}  

function validarNotaEstudiante(evento) 
{
    var input_nota = evento.target;
    var nota = /(^[0-5]{1}|^[0-9]{1}.[0-9]{2})+$/; // Solo números
    if (!nota.test(input_nota.value))
    {
        alert('Solo se permiten notas con dos decimales');
        input_nota.value="";
        input_nota.focus();
    }
    else if(parseFloat(input_nota.value) > 5)
    {
        alert('La nota no puede ser mayor a 5. Por favor ingrese un valor válido.');
        input_nota.value="";
        input_nota.focus();
    }  
}  

