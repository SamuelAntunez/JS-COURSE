# Javascript Curso

**ES6 (ECMAScript6)** Es el estándar técnico que define cómo debe funcionar JavaScript. 

## Tipos de Datos
### Datos Primitivos 

* **Booleanos**: True/False
* **Null**: Sin valor en lo absoluto
* **Undefined**: Variable declarada que aún no se le asigna un valor
* **Number**: Númerico
* **String**: Cadena de Carácteres
* **Symbol**: Valór 

>Los datos **Primitivos** son datos que no son objetos y son inmutables, los datos que no son primitivos son objetos en **Javascript**

## Comandos Básicos

### Delaraciones de Variable
*   **`var`:**  Tiene alcance de función o global. Si se declara dentro de una función, solo es accesible dentro de esa función, permite reasignar el valor después de su declaración
*   **`const`:** Tiene alcance de bloque, No permite reasignar el valor
*   **`let`:** Tiene alcance de bloque , permiten reasignar el valor después de su declaración

>Se recomienda utilizar `let` y `const` en lugar de `var` para evitar problemas de alcance y redeclaración
***
### Comandos de Consola
*   **`console.log( )`:** Muestra en la consola
*   **`console.clear( )`:** Limpia la consola
*   **`console.warn( )`:** Envía una advertencia en la consola 
*   **`console.table( )`:** Envía una tabla en la consola

***
### Comandos Window

*   **`alert()`:** Indica al ordenador de mostrar un dialogo con un mensaje
*   **`variable = prompt()`**: Envía el mensaje y lo guarda en un espacio de memoria

*  **`Confirm`**: Devuelve true/false

***

### Arreglos

Son objetos muy parecidos a una lista de información, que contiene un grupo de elementos

#### Creación de Arreglos

* **`const arr = new Array(10)`** Indica que sera un arreglo con 10 espacios
* **`const arr = []`** indica que sera un arreglo vacío
* **`arr[0]`** indica la primera posicion del arreglo

> Los strings tambien se pueden recorrer como arreglos

#### Métodos de los arreglos

* **`arr.slice([inicio [, fin]])`**: devuelve una copia de una parte del array dentro de un nuevo array empezando por la posición de inicio(0) hasta fin (fin no incluido). El array original no se modificará
* **`arr.length`**: devuelve la cantidad de elementos en esa matriz.
* **`arr.push()`**: añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
* **`arr.unshift()`**: agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
* **`arr.pop()`**: elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
* **`arr.splice(1, 0, '')`**: El primer parametro indica la posición, el segundo cuantos elementos se eliminaran, y del tercero en adelante los elementos que se agregarán
* **`arr.includes()`**: determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
* **`arr.indexOf()`**: retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
* **`arr.filter( arr => condicion)`**: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
* **`Arr.map()`**: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
* **`Arr.forEach()`**: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

***
### Objetos Literales

es una forma sencilla y directa de crear un objeto usando una sintaxis basada en pares clave-valor

```js
const persona = {
  nombre: "Samuel",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};
```
Para llamar a los objetos literales

* **`console.log(persona.nombre)`** 

* **`console.log(persona.['nombre'])`** 

Mensaje en consola
```text
Samuel
```

#### Métodos de los Objetos Literales

* **`delete persona.nommbre`**: Borra la propiedad indicada
* **`object.entries(persona)`**: convierte un objeto en una matriz de pares clave-valor.
* **`object.freeze(persona)`**: sirve para congelar un objeto en JavaScript, es decir, evita que sus propiedades sean agregadas, eliminadas o modificadas.

* **`object.getOwnPropertyNames(persona) `**: te devuelve un arreglo con los nombres de todas las propiedades propias

* **`object.values(persona)`**: nos da los valores en vez de las propiedades

## Estructuras de Control

### if-else
Es una estructura de control condicional que te permite ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.

#### Sintaxis Basica 
```js
if (condición) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

#### Tambien se puede utilizar else if para manejar multiples condiciones

```js
const nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```
> Este tipo de control es fundamental para crear decisiones lógicas en formularios, juegos, validaciones, etc.

### switch
en JavaScript es otra forma de manejar múltiples condiciones, similar a `if...else`, pero más legible cuando tienes muchas comparaciones contra el mismo valor.

#### Sintaxis Basica

```js
switch (expresión) {
  case valor1:
    // Código si expresión === valor1
    break;
  case valor2:
    // Código si expresión === valor2
    break;
  default:
    // Código si ninguna condición se cumple
}
```

> `break` evita que el codigo siga al `case` siguiente, en caso de no omitirlo, los demas casos tambien se ejecutaran

## Ciclos
### while
Es una estructura de control que ejecuta un bloque de código mientras una condición sea verdadera

#### Sintaxis Basica
```js
while (condición) {
  // Código que se ejecuta si la condición es true
}
```

> Si la condicion nunca se vuelve falsa, el ciclo se vuelve infinito

### do-while
 Es una estructura de control que siempre ejecuta al menos una vez el bloque de código, incluso si la condición es falsa desde el principio. Esto lo distingue del ciclo `while`, que primero evalúa la condición antes de ejecutar.

#### Sintaxis Basica

```js
do {
  // Código que se ejecuta
} while (condición);
```

> Esto es útil cuando quieres asegurarte de que cierto código se ejecute por lo menos una vez, como mostrar menús interactivos o recibir input del usuario.

## Funciones
es un bloque de código reutilizable que se ejecuta cuando lo llamas.

### Declarar una función

```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
  return 'Hola'
}

saludar("Tijiz"); // Hola, Tijiz
let saludo = saludar('Tijiz') // Hola
```

Caracteristicas clave

* **saludar**: es el nombre de la funcion
* **nombre**: es el parametro que recibe la funcion( pueden ser mas de uno)
* **return**: especifica el valor devuelto por la funcion
* Son objetos de primera clase: puedes pasarlas como argumentos, devolverlas desde otras funciones o asignarlas a variables

Otras manera de declarar una funcion 

```js
const saludar = function() {
  console.log("¡Hola!");
};
```

#### Funciones flecha

```js
const saludar = () => {
  console.log("¡Hola!");
};
```
#### Dentro de un objeto

```js
const persona = {
  nombre: "Tijiz",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
```

## DOM

El **DOM** (Document Object Model) es una representación estructurada del contenido de un documento HTML o XML que los navegadores crean internamente. 

En el **DOM**, los atributos son pares clave-valor que proporcionan información adicional sobre un elemento HTML. Son los mismos que ves en HTML como `id`, `class`, `href`, `src`, `type`, etc

Palabra reservada para trabajar con el **DOM**: `document.`

### Comandos para la manipulacion del **DOM**

* **`document.querySelector()`**: te permite seleccionar el primer elemento del **DOM** que coincida con un selector CSS

```js
const parrafo = document.querySelector(".mensaje");
console.log(parrafo.innerText); // Hola Tijiz
```
* **`document.querySelectorAll()`**: te permite seleccionar todos los elementos del **DOM** que coincidan con un selector CSS específico. A diferencia de querySelector, que solo devuelve el primero, este devuelve un arreglo

* **`document.querySelector().innerHTML`**  Es una forma de acceder o modificar el contenido HTML interno de un elemento en el **DOM**

```js
document.querySelector("#contenido").innerHTML = "<p>Nuevo contenido</p>";
```
>Al reemplazar innerHTML, se borran todos los elementos hijos anteriores y se renderiza desde cero.

* **`document.querySelector().innerText`**: Te permite acceder o modificar el texto “visible” que hay dentro de un elemento del **DOM**

```js
const texto = document.querySelector("#mensaje").innerText = 'Nuevo texto';

```

* **`document.getElementById`**:  te permite seleccionar un elemento del **DOM** por su atributo `id` no usa # como en querySelector

* **`document.getElementsByClassName`**: Te devuelve un elemento por su atributo `class`
* **`document.createElement(img/button/div)`**:te permite crear un nuevo elemento HTML desde cero. No lo agrega automáticamente al DOM: primero lo creas, luego puedes configurarlo y finalmente insertarlo donde quieras
 
 ```js
const parrafo = document.createElement("p");
parrafo.innerText = "Este párrafo fue creado dinámicamente";
document.body.appendChild(parrafo);
 ```
> Cuando manipulamos el DOM con document. Javascript hace una llamada al documento HTML  y lo recorre cada vez, es recomendable guardarlo en una variable para ahorrar recursos

* **`element.setAttribute()`**: añade o actualiza un atributo del elemento HTML seleccionado.


```js
const parrafo = document.getElementById("saludo");
parrafo.setAttribute("class", "mensaje");

// <p id="saludo" class="mensaje">Hola</p>
```

* **`element.classList.add()`**: te permite agregar una o más clases CSS a un elemento del DOM sin reemplazar las que ya tiene.

```js
const caja = document.getElementById("caja");
caja.classList.add("resaltado", "borde-redondeado");
// <div id="caja" class="resaltado borde-redondeado">Contenido</div>
```
***
### addEventListener

* **`elemento.addEventListener()`**: te permite escuchar eventos que ocurren en elementos del DOM y ejecutar una función cuando ese evento sucede.

```js
elemento.addEventListener("evento", funcion);
```
**Ejemplo**
```js
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  alert("¡Botón clickeado!");
});
```

#### Diferentes tipos de eventos

* **Eventos de Ratón**
```js
element.addEventListener("click", () => {
  console.log("¡Hiciste clic!");
});

element.addEventListener("mouseover", () => {
  console.log("Pasaste el mouse por encima");
});
```
* **Eventos de Teclado (keydown)**
```js
document.addEventListener("keydown", e => {
  console.log("Presionaste: " + e.key);
});

document.addEventListener("keyup", e => {
  console.log("Soltaste: " + e.key);
});
```
* **Eventos de Teclado (keyup)**
```js
input.addEventListener("keyup", (e) => {
  console.log("Tecla soltada:", e.key);
  console.log("Contenido actual:", e.target.value);
});
```
* **Eventos de Formulario**
```js
input.addEventListener("input", e => {
  console.log("Valor actual:", e.target.value);
});

form.addEventListener("submit", e => {
  e.preventDefault(); // Evita que se recargue la página
  console.log("Formulario enviado");
});
```
* **Eventos de Ventana**
```js
window.addEventListener("resize", () => {
  console.log("Tamaño de la ventana cambió");
});

window.addEventListener("scroll", () => {
  console.log("Estás haciendo scroll");
});
```
* **Eventos cuando el DOM carga**
```js
document.addEventListener("DOMContentLoaded", () => {
  console.log("El DOM está listo para usarse");
});
```
