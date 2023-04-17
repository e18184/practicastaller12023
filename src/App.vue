<template>
  <div id="app">
    Hola {{nombre}} esto es una prueba completa 14-4-2023 a hrs 23:17 esto se creo con el branch 14-4-2023
    ESTE ES EL CODIGO DEL DIA 17-4-2023
     tu grado es : {{grado}}
     contador : {{contador}} <button v-on:click="stopInterval">Detener</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <label v-bind:title="titulo">Esta es una etiqueta</label>
    <br>
    <img v-bind:src="imagen"/>
    <button v-on:click="cambiar('/img/js.png')">Cambiar JS</button>
    <br>
    <button v-on:click="cambiar('/img/css.png')">Cambiar CSS</button>
    <br>
    <label>Apellido</label>
    <input type="text" v-model="apellido"> {{apellido}}
    <br>
    <select v-model="color">
      <option v-for="c in colores" v-bind:key="c">{{c}} </option>
    </select> {{color}}
    <br>
    <select v-model="colorid" >
      <option v-for="c in colores_id" v-bind:key="c.id" v-bind:value="c.id">{{c.nombre}} </option>
    </select>
    <br>
    <ul>
      <li v-for="fruta in frutas" v-bind:key="fruta.id" v-bind:value="fruta.id">
        {{fruta.id}}- {{fruta.nombre}}
        <ul>
          <li v-for="pais in fruta.pais_origen" v-bind:key="pais.id" v-bind:value="pais.id"> 
            {{pais.id}}-{{pais.pais}}
          </li>
        </ul>

      </li>
    </ul>
    Usuarios*
    {{usuario}}

  </div>
</template>

<script>""

export default {
  name: 'App',
  data() {
  return{ nombre:'Richard',
                  grado:'maestria',
                  meses: ['enero','febrero','marzo','abril','mayo'],
                  contador:0,
                  interval: null,
                  titulo: 'se cambio el dato',
                  imagen: '',
                  apellido: 'sin apellido',
                  colores: ['rojo','verde','amarillo','azul'],
                  colores_id: [
                    {
                      id : 1,
                      nombre: 'rojo'
                    },
                    {
                      id : 2,
                      nombre: 'amarillo'
                    },
                    {
                      id : 3,
                      nombre: 'verde'
                    },
                    {
                      id : 4,
                      nombre: 'azul'
                    }
                  ],
                  frutas: [
                    {
                      id: 1,
                      nombre: 'pera',
                      pais_origen: [
                        {
                          id: 1,
                          pais: 'bolivia'
                        },
                        {
                          id:2, 
                          pais:'mexico'
                        }

                      ]
                    },
                    {
                      id: 2,
                      nombre: 'manzana',
                      pais_origen: [
                        {id:3,
                          pais: 'colomvia'
                        }, 
                        { id:4,
                          pais: 'rusia'
                        }
                      ]
                    }
                  ],
                  usuario: []
        }

  },
  mounted() 
        {
         this.interval = setInterval(()=> {
          this.contador ++; 
         },1000);
         this.getUsuario();
         
        },
  methods: {
    stopInterval(){
      console.log('hola');
      clearInterval(this.interval);
    },
    cambiar(imagen){
      this.imagen = imagen;
      console.log('llego al metodo cambiar')
    },
    getUsuario(){
      fetch('https://my-json-server.typicode.com/joseluisgs/APIRESTFake/photos')
      .then(response=> response.json())
      .then(data=>{
        this.usuario = data
    })
  }
  
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
