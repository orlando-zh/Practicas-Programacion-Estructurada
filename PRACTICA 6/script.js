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
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(12);
arbol.insertar(18);

console.log("Recorrido en amplitud:", arbol.recorridoAmplitud());
console.log("Recorrido en profundidad Preorden:", arbol.recorridoPreorden());
console.log("Recorrido en profundidad Orden Central:", arbol.recorridoOrdenCentral());
console.log("Recorrido en profundidad Postorden:", arbol.recorridoPostOrden());
