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
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Enlace</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="enlace" id="enlace" v-model="form.enlace">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Ayuda</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="ayuda" id="ayuda" v-model="form.ayuda">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Estado</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="ayuda" id="ayuda" v-model="form.ayuda">
                       </div>
                    </div>
                    <div>Genero: {{ form.estado }}</div>

                        <input type="radio" id="1" value="1" v-model="form.estado" />
                        <label for="1">Habilitado</label>
                        <input type="radio" id="0" value="0" v-model="form.estado" />
                        <label for="0">No Habilitado</label>
                    
                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        form:{
          "codp":"",
          "nombre" : "",
          "enlace":"",
          "ayuda":"",
          "estado":""
        }
    }
  },
  methods:{
  
      editar(){
          this.form.codp = this.$route.params.codp;
          axios.put("http://127.0.0.1:8080/api/procesos/actualizarform/"+this.form.codp,this.form)
          .then( data =>{
              console.log(data);
              alert ('llego aqui siiii proceso')
          })
          .catch(e => {
          console.log(e);
        });
      },
      salir(){
        this.$router.push("/procesosprincipal");
      },
      eliminar(){
        this.form.codp = this.$route.params.codp;
        axios.delete("http://127.0.0.1:8080/api/procesos/eliminar/"+this.form.codp)
        .then( datos => {
            console.log(datos);
           this.$router.push("/principalprocesos");
        });

      }
  },
  mounted:function(){
      this.form.codp = this.$route.params.codp;
      axios.get("http://127.0.0.1:8080/api/procesos/actualizar/"+ this.form.codp)
      .then( modificar => {
        this.form = modificar.data;

      })
     
  }  
}
</script>
<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>