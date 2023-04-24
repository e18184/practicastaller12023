<template>
    <div>
        <Header/>
            <div class="container izquierda">
                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo paciente</button>
                <br><br>
                USUARIO PRINCIPAL 

                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">AP</th>
                        <th scope="col">AM</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paciente in Listapacientes" :key="paciente.id" v-on:click="editar(paciente.id)">
                        <th scope="row">{{ paciente.id}}</th>
                        <td>{{ paciente.id }}</td>
                        <td>{{ paciente.nombre }}</td>
                        <td>{{ paciente.ap }}</td>
                        <td>{{ paciente.am }}</td>
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
    name: 'Inicio',
    data(){
        return {
            posts:[]
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