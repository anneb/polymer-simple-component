# polymer-simple-component
simple polymer component to try out building for non-root path

## pre-requisites
polymer-cli 1.8.0+  
http-server (or some other web-server)

## install
git clone [this_repository]  
cd [this_repository]  
npm install  

## test application
polymer serve  
browse to http://localhost:your_polymer_serve_port (you should see a spinner)

## build for non-root path
polymer build --name es5-bundled --base-path /es5-bundled

## serve for non-root path
cd build  
http-server

## browse to your server
http://localhost:your_port/es5-bundled  

The application should work, you should see a spinner
