
const fs = require("fs");

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }
     save = async(producto)=>{
        try {
           if(fs.existsSync(this.archivo)) {
            const contenido = await fs.promises.readFile(this.archivo, "utf-8");
            if(contenido){

            const productos = JSON.parse(contenido);
            const newProducto={
                id:productos.length+1,
                ...producto
            }
            producto.push(newProducto);
             fs.promises.writeFile(this.archivo, JSO.stringify(productos, null, 2)) 
        }else{
            const newProducto={
                id:1,
                ...producto
            }
            await fs.promises.writeFile(this.archivo,JSON.stringify([newProducto],null, 2));
           }
            
           }else{
            const newProducto={
                id:1,
                ...producto
            }
            await fs.promises.writeFile(this.archivo,JSON.stringify([newProducto],null, 2));
           }
           
           
           
        } catch (error) {
            console.log(error);
        }
        
    };
    getById(){
        
    };
    getAll(archivo){
       // const producto = JSON.parse(fs.readFileSync(this.archivo,'utf-8'))
       // console.log(producto)

    };
    deleteById(){

    };
    deleteAll(){

    };
}

const listaProductos = new Contenedor("Camisetas de selección.txt")

const producto1 = {
    title:"Camiseta Argentina",
    price:18000,
    thumbnail: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-adidas-argentina-2022-3.jpg"
}
const producto2 = {
    title:"Camiseta Brasil",
    price:16000,
    thumbnail: "http://cdn.shopify.com/s/files/1/0560/0152/7831/products/image_1083cd10-d2ff-4666-9393-057442c950d9.jpg?v=1660183379"
}
const crearProducto = async()=>{
    await listaProductos.save(producto1);
    await listaProductos.save(producto2);
}

crearProducto();





//Contenedor.getAll()