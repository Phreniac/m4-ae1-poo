//PARADIGMA DE DE LA PROGRAMACIÓN
//POO:Programación orientada a objetos
//PILARES: Herencia, Polimorfismo, Encapsulamiento y Abstracción
//ABSTRACCION

// Persona: nombre, edad, genero, nacionalidad, altura, peso, color de piel, color de pelo

function Persona (nombre, edad, genero, nacionalidad, rut) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.nacionalidad = nacionalidad;
    let _rut = rut;

    //Encapsulamiento
    //setters y getters
    //definicion de getter y setter para el RUT
    // Object.defineProperty(this, 'rut', {
    //     get: function(){
    //         return _rut;
    //     },
    //     set: function(rut){
    //         _rut = rut
    //     }
    // });

    //metodo setter para el rut
    this.setRut = function(rut){
        _rut = rut
    }

    //metodo getter para el rut
    this.getRut = function(){
        return _rut;
    }
   
}

function Profesor(nombre, edad, genero, rut, sala, curso, materia){
    this.sala = sala;
    this.curso = curso;
    this.materia = materia;
    //Herencia desde clase Persona
    Persona.call(this, nombre, edad, genero,'',rut);

}

function Estudiante (nombre, edad, genero, nacionalidad, rut, sala, curso, materia){
    this.sala = sala;
    this.curso = curso;
    this.materia = materia;

    Persona.call(this, nombre, edad, genero, nacionalidad, rut );
}

//Herencia de metodos
Profesor.prototype = Object.create(Persona.prototype);

//Herencia de metodos
Estudiante.prototype = Object.create(Persona.prototype);
console.log('PROTOTYPE: ', Estudiante.prototype);
console.log('CONSTRUCTOR: ', Estudiante.prototype.constructor);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.saludar = function (){
    const gen = this.genero == "Masculino" ? 'el':'la';
    return "hola! soy "+ gen +" estudiante " + this.nombre;
}

//Metodo para saludar
Persona.prototype.saludar = function(){return "hola! soy la persona "+this.nombre};
Persona.prototype.metodoHerencia = function(){
    return 10 + 10;
}
const persona1 = new Persona('Jorge',26,'Masculino','Chileno','123123123');
//Llamada al metodo setRut
//persona1.setRut('12341234');
//Llamada al metodo getRut
// console.log('get RUT: ', persona1.rut);
// const persona2 = new Persona('Josefa',29,'Femenino','Chilena');

const profesor1 = new Profesor('Rodrigo',35,'Masculino','12344321','01','00013','JavaScript');
const estudiante1 = new Estudiante('Marcela',30,'Femenino','Chilena','123456523','02','0002','JavaScript');
const estudiante2 = new Estudiante('Juan',23,'Masculino','Chileno','123412372','01','00013','JavaScript');
const estudiante3 = new Estudiante('Roberto',30,'Masculino','Argentino','127381412','01','00013','JavaScript');

console.log('Estudiante: ', estudiante1.saludar());
console.log('Profesor rut: ', profesor1.getRut());
console.log('Presor: ', profesor1.metodoHerencia());


const contenido_tabla = document.getElementById('contenido_tabla');
const lista_usuarios = [estudiante1, estudiante2, estudiante3];
let contenido = '';

lista_usuarios.forEach(estudiante => {
    contenido +=`<tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.getRut()}</td>
        <td>${estudiante.saludar()}</td>
    </tr>`;
});
contenido_tabla.innerHTML = contenido;

console.log('usuarios', lista_usuarios);

function Proyecto (nombre_proyecto, trabajadores){
    this.nombre_proyecto = nombre_proyecto;
    this.trabajadores = trabajadores;
// se genera un getter y setter para trabajadores
    Object.defineProperty(this, 'trabajador', {
            get: function(){
                return this.trabajadores;
            },
            set: function(trabajadores){
                this.trabajadores = trabajadores
            }
    });
}

Proyecto.prototype.obtenerTodosLosTrabajadores = function(){
    return this.trabajadores;
};

function Trabajador(nombre, rut, cargo){
    this.nombre = nombre;
    this.rut = rut;
    this.cargo = cargo;
}

const trabajador1 = new Trabajador('Juanito','1233','operador');
const trabajador2 = new Trabajador('Pedrito','1234','operador');
const trabajador3 = new Trabajador('Jorgito','1235','jefe');

const proyecto1 = new Proyecto('Impresión de poleras con neon', [trabajador1, trabajador2, trabajador3]);

console.log('trabajadores: ', proyecto1.obtenerTodosLosTrabajadores());
proyecto1.trabajador = [trabajador1, trabajador2];
console.log('trabajadores: ', proyecto1.trabajador);



