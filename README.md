# ticket-line-server

## Token
Se cifra
[secuencial] - [salt] - [timestamp] - [uuid]

## API
Casos de uso en la API

### API Client
Aquí se transmite la información entre los clientes (ordenadores), desde su javascript local hacia nuestro servicio.

* Recuperar el token  
  POST event/{id}/queue/number  
  **Request**  
   { uuid: 'abcdefg' }  
  **Response**  
   { id: 'token' }  

* Ver el estado del token  
   GET /event/{id}/queue/number/{id}  
  **Response**  
   { position: 10000 }

### API F/B
Aquí se transmite la informaci´n entre los nodos esclavos y el nodo maestro que tiene los secuenciales.

* Recibir numero de tokens a generar y devuelve secuencial inicio y secuencial de fin

  POST event/{id}/queuePosition/

  **Request**  
   { length: 5 }  
  **Response**  
   { startAt: 15, endAt: 19 }  

### Mongo

Aquí guardamos el secuencial

## Arrancar proyecto

npm i (Instalar dependencias)

npm start (Lanza el servidor express)

Si no se tiene mongo instalado en el equipo ejecutar:

docker run --name local-mongo -p 27017:27017 -d mongo
