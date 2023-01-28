# Mini Core - Angular & NestJS
![imagen](https://user-images.githubusercontent.com/62622922/214198340-7e626616-05f3-44a5-b946-c96fd3b2592f.png)

**Aplicación desplegada https://frontend-minicore-essg.onrender.com/**

## Herramientas utilizadas
- Angular (FrontEnd)
- Nest.js (BackEnd)
- MySQL

## Especificaciones de uso:
### Paso 1: Descarga de archivos en GitHub 
- El usuario deberá descargar los archivos requeridos de GitHub en un `archivo .ZIP` donde se encontrarán 2 archivos (Frontend y Backend). 


### Paso 2: Instalar Angular y Node
- El usuario deberá descargar Nodejs desde el sitio oficial https://nodejs.org/es/download/releases/

- A continuación, deberá descargar Angular de manera global en el CMD del sistema mediante el siguiente comando
```bash
npm install -g @angular/cli@15.0.0
```
### Paso 3: Abrir proyecto en Visual Studio Code
- El usuario deberá abrir la carpeta del proyecto en el IDE indicado

### Paso 4: Instalar modulos Node en cada proyecto
- El usuario deberá instalar los `Node Modules` en cada carpeta del proyecto de la siguiente manera:
```bash
cd minicore
npm install 
```

```bash
cd minicore-front
npm install 
```

### Paso 5: Configurar el app.module.ts en la carpeta minicore
- El usuario tendrá que configurar con sus credenciales respectivas las secciones de MySQL
- Además deberá crear una base de datos de nombre 'minicore' para que se inicialice correctamente el Backend

### Paso 6: Inicializar Frontend y Backend
- El usuario tendrá que inicializar ambos servicios para que el aplicativo pueda funcionar correctamente de la siguiente manera
```bash
cd minicore
nest start
```

```bash
cd minicore-front
ng serve --open
```


#### Desarrollado por: Esteban Sampedro
