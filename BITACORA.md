# Prueba Técnica

Para correr esta aplicación vamos a tener que instalar algunas dependencias.

```
axios       ~>      npm install axios
typescript  ~>      npm install typescript
@types/react ~>     npm install @types/react
@types/react-dom ~> npm install @types/react-dom 
react-host-toast ~> npm install react-hot-toast
react-router ~>     npm install react-router
react-router-dom ~>     npm install react-router-dom

typescript-plugin-css-modules ~> npm install typescript-plugin-css-modules

```

>## axios

####   Para poder realizar peticiones a la API del backend.

>## typescript

####   Para el desarrollo de la aplicación con tipos, opté por esta opción para poder propiciar el desarrollo de código con la menor cantidad de errores posibles. Además de ser mejor para proyectos escalables como a los la empresa apunta. 

>## @types
#### Para poder instalar algunos tipos que necesitamos para el desarrollo de la aplicación. Instalados de forma manual, pero la mayoría viene instalada si usamos algún template con TS.

>## react-host-toast

#### Para poder renderizar los textos de advertencia o de productos agregados recientemente. Un parecido a un pop-up.

>## react-router y react-router-dom

#### Para poder manejar el ruteo de la página.

>## typescript-plugin-css-modules

#### Para soporte de los módulos en css.
-----------------------------------------
```
Anotaciones del proyecto
```

- Se ha utilizado la implementación de módulos en CSS, como también un **.css**  de manera global para manejar algunos estilos que hemos querido darle a alguna que otra etiqueta.
- Se creó una carpeta **image** para poder cargar algunas imágenes como logos o iconos para poder mostrarlas en la aplicación.


```
Organización de carpetas
```

Dentro de nuestra carpeta **front**, en **src**, vamos a encontrar las siguientes carpetas:
- 📁 **Components** ~> Componentes
- 📁 **Context** ~> Store
- 📁 **Hooks** ~> Custom Hooks
- 📁 **image** ~> Imágenes
- 📁 **Interfaces** ~> Interfaces de la aplicación
- 📁 **Routes** ~> Rutas de la página
- 📁 **style** ~> Estilos globales

>Dentro de cada carpeta en **Components** vamos a encontrar siempre una subcarpeta llamada **style**, dentro de ella estarán los módulos de css. Es posible que haya más subcarpetas (esto depende del componente que se esté creando.)


>Se han puesto algunos comentarios en los componentes para facilitar el entendimiento del código.


