#Jeviteca - proyecto Angular.JS



Jeviteca - una aplicación web que presenta los álbumes, bandas y géneros listados en unas tablas.


##Arquitectura:

**Pestañas**

Jeviteca presenta las informaciones en tres pestañas:

* *Álbumes* muestra una colección de álbumes
* *Bandas* muestra una colección de bandas
* *Géneros* muestra una colección de géneros

Los metadatos se cargan de los ficheros ubicados en la carpeta *Resources*.

**Álbumes**

Presentan los siguientes detalles:

* Imagen
* Título
* Banda
* Género
* Año
* Favorito

Para facilitar la busqueda de los interesantes valores el usuario tiene posibilidad de filtrar sus resultados por Título, Banda, Género y Favoritos.

La aplicación permite guardar los albumes favoritos marcando el checkBox *Favorito*. Esta información se guardada en el LocalStorage y cada vez usando la aplicación se muestran valores adecuados.

Selecionando el *Título* de algún *Álbum* recibiremos los detalles de este álbum.


**Bandas**

Presentan los siguientes detalles:

* Nombre
* Origen
* Miembros

Los usuarios tienen la posibilidad de filtrar los resultados por Nombre y Origen.


**Géneros**

Presentan los siguientes detalles:

* Nombre
* Albumes

Los usuarios tienen la posibilidad de filtrar los resultados por los dos campos.