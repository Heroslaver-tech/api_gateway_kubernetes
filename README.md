# Repositorio para hacer un api gateway utilizando kubernetes y microservicios

## Pasos para mis compañeros:

- Hagan una copia de la carpeta ¨servicio-prueba¨ para hacer otro microservicio, creen el .js, el dockerfile y el .yml pero con la informacion de su microservicio.
- Para el enrutamiento del .js debe ser ¨/servicio-numero¨ para que la api gateway rediriga bien.
> coloquen una informacion para que el profe pueda distinguirlos
- En dockerfile cambian el comando "CMD" por el nombre del .js que le hayan dado.
- En el .yml todas las partes que digan "prueba" debe ser cambiado por el numero correspondiente del microservicio para que la api gateway no tenga errores en las peticiones.

## Ya cuando este todo editado, vamos a subir la imagen de docker a la nube de dockerhub.

- Creen la imagen con el comando `docker buildx build . -t nombre_de_tu_imagen`.
- Ahora se deben logear en docker hub usando el comando `docker login`.
  >Aqui hay mas pasos si no estaban logeados con anterioridad.
  
- Etiqueten su imagen con el comando `docker tag nombre_de_tu_imagen:latest nombre_de_tu_perfil_en_dockerHub/nombre_de_tu_imagen:latest`.
- Subanlo con `docker push nombre_de_tu_perfil_en_dockerHub/nombre_de_tu_imagen:latest`.
- Actualicen la imagen en el Dockerfile 

## Ya subido podemos ejecutar el kubernetes.
>Prendanlo si aún no lo han hecho.

- Vamos a la carpeta api `cd API` y ejecutamos `kubectl apply -f api-gateway.yml`.
- Salimos de la carpeta api y acedemos a la otra `cd ..` y `cd servicio-numero`.
- Ejecutamos `kubectl apply -f servicio-numero.yml`.

## Si todo se ejecuto correctamente 
Podemos ir al navegador escribir "http://localhost:31234/servicio-numero".
