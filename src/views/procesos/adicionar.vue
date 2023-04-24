<template>
    <div>
        Proceso Adicionar
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
                            <label for="" class="control-label col-sm-3">Enlace</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="text" id="text" v-model="form.enlace">
                            </div>
                        </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Ayuda</label>
                            <div class="col-sm-7">
                                <input type="ayuda" class="form-control" name="ayuda" id="ayuda" v-model="form.ayuda">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div>
                </form>
            </div>
    </div>
</template>
<script>
//import Header from '@/components/Header.vue';
//import Header from '@/components/Menu.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"adicionar",
    components:{
        //Header,
        //Footer
    },
    data:function(){
        return {
            form:
            {
                "nombre" : "",
                "enlace": "",
                "ayuda":""
            }
        }
    },
    methods:{
            guardar(){
                alert('valor de a');
                axios.post("http://127.0.0.1:8080/api/procesos/guardar",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Creado creado","success");
                this.$router.push("/dashboard");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
            }
            ,salir () {
                alert ('usuarioadicionar');
                this.$router.push('/procesosprincipal');
            }
    },
    mounted:function(){
        let direccion = 'http://127.0.0.1:8080/api/persona/listapersonasinusuario'
        // + this.pagina;
        
        axios.get(direccion).then( data =>{
            this.Listapacientes = data.data;
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>