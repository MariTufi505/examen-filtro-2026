# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Tu nombre completo -->
**Fecha:** <!-- Fecha del examen, ej: 21/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
--> Cuando observé y leí el documento, me di cuenta de que constantemente utilizaba DIV en casos donde podrían utilizarse otras etiquetas semánticas del HTML. Intenté corregir algunos, pero corregirlo a mano llevaría demasiado tiempo.  
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->

En el siguiente documento index.html, no se respetan las etiquetas semánticas de HTML, utilizando constantemente DIV. A su vez, también utiliza los atributos correspondientes en cada caso: Por ejemplo, Alt para las descripciones de las imagenes. Asocia cada campo del formulario con su <label> correspondiente (usando for e id).

```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
--> La IA se enfocó en cambiar los elementos semánticos del HTML. 
El resultado fue lo que esperaba en su mayoría, pero aun así seguía utilizando DIV en diversas secciones. Corrgirlos llevaría tiempo, por lo que preferí resolverlo en otro prompt incluyendo a su vez la accesibilidad. 
Me resultó util como punto de partida el hecho de que en el documento original se especifique que era lo que había que cambiar. En el head del HTML, faltaban varios elementos importantes. La IA no lo resolvió, por lo que recurrí a otro lado para poder acordarme de las etiquetas o atributos faltantes: Lang, Viewport, Link. 
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
El error era semántico, ya que continuaba utilizando div. Al leer el código, lo seguía utilizando. Estaba incorrecto debido a que le especifiqué que utilice las etiquetas semánticas correspondiente en cada caso, destacando el hecho de que el Div era constantemente usado. Ya que llevará tiempos resolverlos, preferí dejarlo para otro prompt y concentrarme en el CSS. 
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
En este punto, vi que había varias funcionalidades para agregar en el archivo script.js. Por esa razón, lo que hice fue utilizar Claude para brindarle lo que necesitaba hacer y a continuación pedirle que este me generara un prompt para darselo al chat de Visual Studio Code. Lo leí y modifiqué para que no me generara un archivo nuevo. 
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->

You are a JavaScript coding assistant helping a student complete a RPG character exercise.

The student must modify the JavaScript file script.js following these strict requirements:

Character stats
Declare the following variables using const or let as appropriate (never var):

name (string): character name
characterClass (string): class (e.g. warrior, mage)
level (number): current level
health (number): current health points
mana (number): current mana points
attack (number): attack value
defense (number): defense value
Functions to implement
calculateDamage(attack, defense) — regular declared function

Returns the difference between attack and defense
If the result is negative, return 0 instead
isAlive(health) — arrow function

Returns true only if health is strictly greater than 0
Negative values must also return false
canCastSpell(currentMana, spellCost, isStunned) — arrow function

Returns true only if there is enough mana AND the character is not stunned
currentMana: available mana
spellCost: mana cost of the spell
isStunned: boolean
getPresentation(name, characterClass, level) — regular declared function

Returns a string in this exact format: 'Name — Class (Nivel N)'
Example: 'Zara Darkbane — Hechicera (Nivel 7)'
Required output
Call each function using the declared variables as arguments (no magic numbers) and log each result with console.log.

Rules you must enforce
Never use var
No magic numbers: always pass the declared variables as arguments
Descriptive names only (no x, a, temp, etc.)
If the student writes incorrect code, explain the mistake clearly before showing the fix
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
--> La IA tomó el enfoque de crear el archivo con las especificaciones, teniendo en cuenta de que le he pedido que actue como un asistente de codigo de JAvascript que ayuda a un estudiante a completar un ejercicio de un personaje RPG. El resultado era el que esperaba, ya que al modificar los valores pude comprobar que se cumplían las condiciones. Me resultó útil como partida tener los valores de los cuales la IA debía guiarse, es decir, no tener que crear nuevos valores. De la misma manera, fue util poder tener los requerimientos de las funcionalidades que se necesitaba agregar al archivo js. 
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
Me pareció correcto ya que pude verificarlo en la consola del navegador. 
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
--> Tuve que corregir el uso del div en el archivo html. Lo que resolvió bien a la primera es el haber creado las funciones en JavaScript con los detalles del personaje. Si, le cambiaría mi manera de pedirle los cambios y ser mucho más especifica, brindandole un mayor contexto. 
```
