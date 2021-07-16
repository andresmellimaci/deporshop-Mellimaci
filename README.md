# DeporShop

_Ecommerce - Tienda de venta de ropa deportiva_

## Instalación 🔧

_Para levantar el proyecto se debe ejecutar el siguiente comando en la consola_

```
npm start
```

## Dependencias extra utilizadas 🛠️

* [Animate.css v4.1.1](https://animate.style/) - Biblioteca de animaciones, se utilizó para dar un efecto fadeIn cuando se carga la lista de productos.
* [Bootstrap v4.6.0](https://getbootstrap.com/) - Biblioteca utilizada para el diseño de estilos de la aplicacion.
* [react-router-dom v5.2.0](https://reactrouter.com/web/guides/quick-start) - Componente utilizado para la navegacion en la aplicacion.
* [Firebase v8.7.0](https://firebase.google.com/?hl=es) - Componente utilizado para el almacenamiento de la información (firestore).

## Versionado 📌

Usamos [Git](https://git-scm.com/) para el versionado.

## Autores ✒️

* **Andrés Mellimaci** 

## Detalles del proyecto

Al levantar el proyecto, la página principal muestra la lista de todos los productos del ecommerce. En la parte superior se puede visualizar una barra de navegacion en la cual se encuentran todas las categorias disponibles de los productos, y además en la esquina superior derecha se visualiza el ícono del carrito de compras.
Al ingresar a una categoría determinada, la página principal se actualiza para mostrar los productos correspondientes a dicha categoría.
Si se hace click en el brand, se navega nuevamente hacia la pagina principal visualizando todos los productos.
Al hacer click en cualquier producto, se puede ingresar al detalle del mismo, en el cual se muestra informacion más detallada sobre el producto, como por ejemplo Nombre, Descripcion, Precio, Stock disponible y Cantidad seleccionada para la compra. Tambíen desde ese detalle se puede agregar el producto al carrito.

## Componentes

* **Main.js**
Es el componente principal de la aplicacion, en el cual se encuentran varios componentes como la barra de navegación y los componentes de producto.

* **NavBar.js**
Es el componente que renderiza la barra de navegación que se muestra en la parte superior de la pantalla. Dentro de este componente se renderizan las categorias de los productos de forma dinámica, dependiendo de las categorias existentes en la lista de productos.
Además, dentro de este componente se encuentra otro, que es el componente del carrito de compras.

* **CartWidget.js**
Es el componente que renderiza el carrito de compras

* **ItemListContainer.js**
Es el componente contenedor de la lista de productos. Es el encargado de buscar los productos que se van a renderizar en pantalla, y los pasa a su componente hijo a través de una prop.

* **ItemList.js**
Componente hijo de ItemListContainer, recibe por prop la lista de productos de su padre y crea un item hijo con la informacion de cada producto. Ésto se realiza a traves de una función map (para recorrer la lista de productos y renderizar un componente Item).

* **Item.js**
Componente que recibe por props los detalles de cada producto para visualizar en la aplicación.

* **ItemDetailContainer.js**
Componente encargado de buscar un producto en específico a través de un param (id). 

* **ItemDetail.js**
Componente que se encarga de visualizar en detalle la información de un producto en específico. Recibe por props ese producto con toda su información. Desde este componente, además se puede seleccionar la cantidad a comprar y agregar al carrito de compras.

* **ItemCount.js**
Componente que se encarga de visualizar el contador para seleccionar la cantidad del producto que se quiere agregar al carrito. Es un componente hijo de ItemDetail. Recibe por props: el stock del producto, la cantidad inicial (por defecto es 1), y una función que se ejecuta cuando se hace click en el botón "Agregar al carrito".

* **Cart.js**
Componente que se encarga de visualizar el contenido del carrito. Desde este componente se pueden quitar productos, vaciar el carrito y ademas contiene al componente PurchaseForm. Haciendo click en el boton "Finalizar Compra", se genera la orden en firebase con la información del comprador, los productos y el total de la compra.

* **PurchaseForm.js**
Componente que contiene un formulario con la información que debe completar el comprador (Nombre, Email, Telefono).

* **Utils/Loading.js**
Componente que contiene un Spinner, el cual se visualiza en los momentos de carga de la aplicación. Por ejemplo cuando se buscan los productos para mostrar en pantalla o cuando se ingresa al detalle de alguno.

## Navegabilidad

_A continuación, se muestra un breve ejemplo de navegación dentro de la aplicación. Se navega a través de cada categoría y se ingresa a los detalles de los productos_

![Navegacion DeporShop](https://github.com/andresmellimaci/deporshop-Mellimaci/blob/main/src/assests/images/DeporShop.gif)
