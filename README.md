# ticket-line-server

## Token

[secuencial] - [timestamp] - [uuid] - [salt]

## API
Casos de uso en la API

### API Client
Aquí se transmite la información entre los clientes (ordenadores), desde su javascript local hacia nuestro servicio.

* Recuperar el token
* Ver el estado del token

### API F/B
Aquí se transmite la informaci´n entre los nodos esclavos y el nodo maestro que tiene los secuenciales.
* Recibir numero de tokens a generar y devuelve secuencial inicio y secuencial de fin

### Mongo

Aquí guardamos el secuencial
