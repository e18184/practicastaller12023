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
                       <label for="" class="control-label col-sm-2">Apellido Paterno</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="ap" id="ap" v-model="form.ap">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Apellido Materno</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="am" id="am" v-model="form.am">
                       </div>
                    </div>
                    <div>Genero: {{ form.genero }}</div>

                        <input type="radio" id="m" value="m" v-model="form.genero" />
                        <label for="m">Masculino</label>
                        <input type="radio" id="f" value="f" v-model="form.genero" />
                        <label for="f">Femenino</label>

                    
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
          "id":"",
          "nombre" : "",
          "ap":"",
          "am":"",
          "genero":""
        }
    }
  },
  methods:{
  
      editar(){
          this.form.id = this.$route.params.id;
          axios.put("http://127.0.0.1:8080/api/persona/actualizarform/"+this.form.id,this.form)
          .then( data =>{
              console.log(data);
              alert ('llego aqui siiii')
          })
          .catch(e => {
          console.log(e);
        });
      },
      salir(){
        this.$router.push("/dashboard");
      },
      eliminar(){
        this.form.id = this.$route.params.id;
        axios.delete("http://127.0.0.1:8080/api/persona/eliminar/"+this.form.id)
        .then( datos => {
            console.log(datos);
           this.$router.push("/dashboard");
        });

      }
  },
  mounted:function(){
      this.form.id = this.$route.params.id;
      axios.get("http://127.0.0.1:8080/api/persona/actualizar/"+ this.form.id)
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