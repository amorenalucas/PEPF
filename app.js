const BBDD = [
{
    "id": 1,
    "nombre": "float 4 mm ",
    "precio": 14000,
    "cantidad": 1
},

{
    "id": 2,
    "nombre": "float 5 mm ",
    "precio": 15000,
    "cantidad": 1
},

{
    "id": 3,
    "nombre": "float 6 mm ",
    "precio": 16000,
    "cantidad": 1
},
]
const carrito = [];

let total = 0 ;

function renderizarProductos(){
    
    BBDD.forEach(e => {
        
    
    let id = "1"
    let nombre = "float 4 mm"
    let precio = 14000 
    let cantidad = 1

    console.log(`${id} ${nombre} ${precio} ${cantidad}
    `)
});  
}