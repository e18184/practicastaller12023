<template>
    <div>
        <Header />
            <div class="container">              

                <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Apellido Paterno</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="ap" id="ap" v-model="form.ap">
                            </div>
                        </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Apellido Materno</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="am" id="am" v-model="form.am">
                            </div>
                        </div>
                    </div>

                    <div>Estado</div>
                    <div>        
                        <input type="radio" id="1" value="1" v-model="form.estado" />
                        <label for="1">Activo</label>
                        <input type="radio" id="0" value="0" v-model="form.estado" />
                        <label for="0">Inactivo</label>
                    </div>

                    <div>Genero: {{ form.genero }}</div>
                    <div>        
                        <input type="radio" id="m" value="m" v-model="form.genero" />
                        <label for="m">Masculino</label>
                        <input type="radio" id="f" value="f" v-model="form.genero" />
                        <label for="f">Femenino</label>
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type="text" name="edad" v-model="edad" />
                    </div>



                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>


            </div>
        <!-- <Footer /> -->

    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data:function(){
        return {
            form:
            {
                "nombre" : "",
                "ap": "", 
                "am" : "",
                "genero" : "",
                "estado":"",
                "edad": 0
                
            }
        }
    },
    methods: {
        guardar(){
            alert('edad de la persona'+this.edad)
            if (this.edad>=60){
                this.$router.push('/pruebadestino');

            } else 
            {
            alert('guardar');
            }
        },
        salir(){
            alert('');
        }
    }
})
</script>
