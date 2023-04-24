<template>
    <div>
        <Header/>
            <div class="container izquierda">
                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo Proceso</button>
                <br><br>
                PROCESOS PRINCIPAL 
                <table class="table table-hover">
                <thead>
                    <tr>
                        <td> 
                            <div>Estados: {{estados}}</div>
                            <label for="0">Inabilitados</label>
                            <input type="radio" id="0" value="0"  v-model="estados" v-on:click="principal(estados)" />
                            <label for="1">Habilitados</label>
                            <input type="radio" id="1" value="1"  v-model="estados" v-on:click="principal(estados)"/>
                            <label for="%">Todos</label>
                            <input type="radio" id="%" value="%"  v-model="estados" v-on:click="principal(estados)" />
                            

                        </td>
                    </tr>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Enlace</th>
                        <th scope="col">Ayuda</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paciente in Listapacientes" :key="paciente.codp" v-on:click="editar(paciente.codp)">
                        <th scope="row">{{ paciente.codp}}</th>
                        <td>{{ paciente.nombre }}</td>
                        <td>{{ paciente.enlace }}</td>
                        <td>{{ paciente.ayuda }}</td>
                        <td>{{ paciente.estado }}</td>
                    </tr>            
                </tbody>
                </table>
            </div>
        <Footer />
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'principal',
    data(){
        return {
            estados: 0,
            posts:[],
            Listapacientes:null
        }
    },
    methods:{
            principal(estados) {
                
                let direccion = 'http://127.0.0.1:8080/api/procesos/listarprocesos/'+estados
                // + this.pagina;
                alert (direccion);
                axios.get(direccion).then( data =>{
                this.Listapacientes = data.data;
                alert ('llego aqui');
                });

            },
            editar(codp){
                this.$router.push('/procesos/editar/' + codp);
            },
            nuevo(){
                this.$router.push('/procesosadicionar');
            },
            usuariocontrasena () {
                alert ('usuarioadicionar');
                this.$router.push('/usuarioadicionar');
            }
    },
    mounted:function(){
        let direccion = 'http://127.0.0.1:8080/api/procesos/listarprocesos'
        // + this.pagina;
        
        axios.get(direccion).then( data =>{
            this.Listapacientes = data.data;
        });
    }
}
</script>