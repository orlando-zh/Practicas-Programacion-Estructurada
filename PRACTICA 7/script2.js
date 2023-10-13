//Definimos la clase nodo
class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

//Definir la clase Arbol Binario
class ArbolBinario{
    constructor(){
        this.raiz = null;

    }

    //Metodo Insertar
    insertar(valor){
        const nuevoNodo = new Nodo(valor)

        if(!this.raiz){
            this.raiz = nuevoNodo;
        }else{
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }

    //Metodo Insetar Nodo
    insertarNodo(nodo, nuevoNodo){
        if(nuevoNodo.valor < nodo.valor){
            if(!nodo.izquierda){
                nodo.izquierda = nuevoNodo;
            }else{
                this.insertarNodo(nodo.izquierda, nuevoNodo);
            }
        }else{
            if(!nodo.derecha){
                nodo.derecha = nuevoNodo;
            }else{
                this.insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    //Metodo de validaciones
    esArbolBinarioBusqueda(){
        return this.validarABB(this.raiz, -Infinity, Infinity);
    }

    validarABB(nodo, min, max ){
        if(!nodo){
            return true;
        }

        if(nodo.valor < min || nodo.valor > max){
            return false;
        }

        return(
            this.validarABB(nodo.izquierda, min, nodo.valor - 1) &&
            this.validarABB(nodo.derecha, nodo.valor + 1, max)
        );
    }

    //Metodo para el conteo de nodos
    contarNodos(){
        return this.contarNodosEnSubarbol(this.raiz);
    }

    contarNodosEnSubarbol(nodo){
        if(!nodo){
            return 0;
        }
        return (1 + this.contarNodosEnSubarbol(nodo.izquierda) +
                    this.contarNodosEnSubarbol(nodo.derecha)
            );
    }


    //Metodo para buscar un valor especifico
    buscarValor(valor){
        return this.buscarEnSubarbol(this.raiz, valor);
    }

    buscarEnSubarbol(nodo, valor){
        if(!nodo){
            return false;
        }

        if(nodo.valo == valor){
            return true;
        }

        return (this.buscarEnSubarbol(nodo.izquierda, valor) ||
                this.buscarEnSubarbol(nodo.derecha, valor)
        );
    }


    //Metodo para eliminar nodos
    eliminarValor(valor){
        this.raiz = this.eliminarEnSubarbol(this.raiz, valor);
    }

    eliminarEnSubarbol(nodo, valor){
        if(!nodo){
            return null;
        }

        if(valor < nodo.valor){
            nodo.izquierda = this.eliminarEnSubarbol(nodo.izquierda, valor);
        }else if(valor > nodo.valor){
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha, valor);
        }else{
            if(!nodo.izquierda){
                return nodo.derecha;
            }else if(!nodo.derecha){
                return nodo.izquierda;
            }
            nodo.valor = this.encontrarMinimoValor(nodo.derecha);
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha, nodo.valor);
        }
        return nodo;
   }

   encontrarMinimoValor(nodo){
    while(nodo.izquierda){
        nodo = nodo.izquierda;
    }
    return nodo.valor;
   }





    //Recorrido de Amplitud
    recorridoAmplitud(){
        const resultado = [];
        const cola = [];

        if(!this.raiz){
            return resultado;
        }

        cola.push(this.raiz);

        while(cola.length > 0){
            const nodoActual = cola.shift();
            resultado.push(nodoActual.valor);

            if(nodoActual.izquierda){
                cola.push(nodoActual.izquierda);
            }

            if(nodoActual.derecha){
                cola.push(nodoActual.derecha);
            }
        }


        return resultado;
    }

    //Recorrido en Profundidad Preorden
    recorridoPreorden(){
        return this.recorridoPreordenNodo(this.raiz, []);
    }

    recorridoPreordenNodo(nodo, resultado){
        if(nodo){
            resultado.push(nodo.valor);
            this.recorridoPreordenNodo(nodo.izquierda, resultado);
            this.recorridoPreordenNodo(nodo.derecha, resultado);
        }

        return resultado;
    }

    //Recorrido en Profundidad Orden Central0
    recorridoOrdenCentral(){
        return this.recorridoOrdenCentralNodo(this.raiz, []);
    }


    recorridoOrdenCentralNodo(nodo, resultado){
        if(nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado);
            resultado.push(nodo.valor);
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado);
        }
        return resultado
    }

    //Recorrido en Profundidad PostOrden
    recorridoPostOrden(){
        return this.recorridoPostOrdenNodo(this.raiz, []);
    }

    recorridoPostOrdenNodo(nodo, resultado) {
        if(nodo){
            this.recorridoPostOrdenNodo(nodo.izquierda, resultado);
            this.recorridoPostOrdenNodo(nodo.derecha, resultado);
            resultado.push(nodo.valor);
        }
        return resultado;
    }
}



//Crear el arbol
const arbol = new ArbolBinario();
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(12);
arbol.insertar(11);
arbol.insertar(15);


console.log("Recorrido de profundidad Orden Central:", arbol.recorridoOrdenCentral());
console.log("Recorrido en amplitud:", arbol.recorridoAmplitud());
console.log("Recorrido en profundidad Preorden:", arbol.recorridoPreorden());
console.log("Recorrido en profundidad Orden Central:", arbol.recorridoOrdenCentral());
console.log("Recorrido en profundidad Postorden:", arbol.recorridoPostOrden());

console.log("Es un arbol binario de busqueda", arbol.esArbolBinarioBusqueda());
console.log("Numero de nodos en el árbol: ", arbol.contarNodos());
const valorABuscar = 7;
console.log(`¿El valor ${valorABuscar} se encuentra en el arbol? `, arbol.buscarValor(valorABuscar));
arbol.eliminarValor(10)
console.log("Arbol despues de eliminar el valor 10: ", arbol.recorridoOrdenCentral());
console.log("Recorrido en amplitud:", arbol.recorridoAmplitud());
console.log("Recorrido en profundidad Preorden:", arbol.recorridoPreorden());
console.log("Recorrido en profundidad Orden Central:", arbol.recorridoOrdenCentral());
console.log("Recorrido en profundidad Postorden:", arbol.recorridoPostOrden());