
# Proyecto de Mercado Online

Este proyecto es una plataforma de mercado online desarollada por DANIELA ZUÑIGA PINO en la cual los usuarios pueden explorar una variedad de productos que incluyen frutas, verduras, y comidas. Además, ofrece funcionalidades de autenticación, gestión de carrito de compras, y administración de productos, esta generado con **[Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.** 


## Development server

Ejecute `ngserve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.


## Tecnologías Utilizadas

- **Transloco:** Se utiliza la biblioteca Transloco para la internacionalización de la aplicación, permitiendo la traducción de textos y mensajes en diferentes idiomas.
  
- **Tailwind CSS:** El proyecto hace uso del framework de diseño Tailwind CSS para estilizar y dar formato a los componentes y elementos de la interfaz de usuario.

- **Angular Material:** Se emplea Angular Material para la implementación de componentes de UI como diálogos, botones, tablas, entre otros, proporcionando una interfaz consistente y atractiva para los usuarios.


## Características Principales

- **Página Principal:** En esta página se muestran todos los productos disponibles para comprar, incluyendo frutas, verduras y comidas. En la parte inferior de la página, se encuentra una burbuja flotante que representa el carrito de compras.
  
- **Autenticación:** En la parte superior de la página principal, hay botones para iniciar sesión y registrarse. Al iniciar sesión como administrador, se accede directamente a un Dashboard personalizado con información relevante del usuario, como el nombre y el rol (en este caso, administrador).

- **Dashboard de Administrador:** En el Dashboard, se presenta información específica para el administrador, como dos listas obtenidas de una API de productos de interés. Además, se incluye una tabla genérica que permite realizar acciones como crear, editar y eliminar productos.

- **API de Comidas:** La aplicación se conecta a una API externa para obtener información sobre comidas y productos, la cual se muestra en un card separado dentro del Dashboard.

- **Tabla Genérica:** La tabla de productos es un componente genérico que puede ser configurado para mostrar datos de cualquier tipo. Cada fila de la tabla tiene botones de acción con tooltips que indican la función correspondiente (crear, editar, eliminar).

- **Cerrar Sesión:** Al cerrar sesión, se muestra una pantalla con un temporizador de 5 segundos antes de redirigir al usuario. También se proporciona la opción de redireccionarse inmediatamente.

- **Modal Genérico:** El proyecto cuenta con un modal genérico que permite manejar confirmaciones, mensajes de éxito o error. Este modal es configurable para recibir el texto deseado, botones personalizados y la posibilidad de cambiar la imagen según el tipo de alerta o acción realizada con éxito.


## Uso de la Aplicación

1. **Inicio de Sesión y Registro:** Utiliza los botones en la parte superior derecha para iniciar sesión o registrarte como nuevo usuario.

2. **Explorar Productos:** Navega por la página principal para ver todos los productos disponibles.

3. **Carrito de Compras:** Utiliza la burbuja flotante del carrito para gestionar los productos que deseas comprar.

4. **Dashboard de Administrador:** Accede al Dashboard para gestionar productos y obtener información sobre comidas/productos desde la API externa.

5. **Cerrar Sesión:** Utiliza el botón de cerrar sesión para salir de la aplicación. Se mostrará una pantalla antes de redireccionarte al inicio de sesión.

