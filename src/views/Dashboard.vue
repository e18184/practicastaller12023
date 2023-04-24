<template>
    <div>
        <Header/>
            <div class="container izquierda">
                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo Usuario</button>
                <br><br>
                USUARIO PRINCIPAL 

                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">AP</th>
                        <th scope="col">AM</th>
                        <th scope="col">M</th>
                        <th scope="col">UC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paciente in Listapacientes" :key="paciente.Id" v-on:click="editar(paciente.id)">
                        <th scope="row">{{ paciente.id}}</th>
                        <td>{{ paciente.nombre }}</td>
                        <td>{{ paciente.ap }}</td>
                        <td>{{ paciente.am }}</td>
                        <td>{{ paciente.am }}</td>

                        <td :key="paciente.id" v-on:click="usuariocontrasena(paciente.id)">ss</td>
                    </tr>            
                </tbody>
                </table>
            </div>
        <Footer />
    </div>
</template>
<script>
//import Header from '@/components/Header.vue';
import Header from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            Listapacientes:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            editar(id){
                this.$router.push('/persona/editar/' + id);
            },
            nuevo(){
                this.$router.push('/persona/nuevo');
            },
            usuariocontrasena () {
                alert ('usuarioadicionar');
                this.$router.push('/usuarioadicionar');
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