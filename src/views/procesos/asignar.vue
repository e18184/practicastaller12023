<template>
    <div>
        <Header/>
        <form action="" class="form-horizontal">

            <div class="container izquierda">
                <br><br>
                ASIGNAR PROCESOS A UN MENU 
                <table class="table table-hover">
                <thead>
                    <tr>
                        <td>Lista Menus </td>
                        <td> Lista Procesos </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label>Buscar</label><br>
                            <input type="text" name="buscar"/>
                            <br>
                            <table>
                                <th>Lista de Menus</th>
                                <tr v-for="lista in Menus" :key="lista.codm"  >

                                    <td>
                                        <input type="radio" v-bind:id="lista.codm" v-bind:value="lista.codm"  v-model="lista.codm" v-on:click="seleccionar(lista.codm)"  />
                            
                                    </td>
                                    <td>
                                        {{lista.nombre}}
                                    </td>
                                </tr>
                            </table> 
                        </td>
                        <td>
                            <table>
                                <th>Lista de Procesos</th>
                                <tr v-for="listap in Procesos" :key="listap.idt"  >

                                    <td>
                                        <input v-if = "listap.estado == 't'" checked type="checkbox" v-bind:id="listap.idt" v-bind:value="listap.idt"  v-model="listap.idt" v-on:click="seleccionar(listap.idt)" >
                                        <input v-else-if = "listap.estado == 'nt'"  type="checkbox" v-bind:id="listap.idt" v-bind:value="listap.idt"  v-model="listap.idt" v-on:click="seleccionar(listap.idt)">
                                    </td>
                                    <td>
                                        {{listap.nombre}}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </form>
        <Footer />
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'asignar',
    data(){
        return {
            Menus:null,
            Procesos:null,
        
            form:{
               "estado":"1",
               "codm":"",
               "nombre":""
            }
        }
    },
    methods:{
        seleccionar(estado) {
            alert(estado)
            this.form.estado = estado
            alert ('cargar datos');
            let direccionmenu = 'http://127.0.0.1:8080/api/menu/listamenus'
        axios.get(direccionmenu).then( data =>{
            this.Menus = data.data;
        });
        let direccionprocesos = 'http://127.0.0.1:8080/api/procesos/listacom/'+estado
        // + this.pagina;
       
        
        axios.get(direccionprocesos).then( data =>{
            this.Procesos = data.data;
        });

        }
    },
    mounted:function(){
        let direccionmenu = 'http://127.0.0.1:8080/api/menu/listamenus'
        // + this.pagina;
        
        axios.get(direccionmenu).then( data =>{
            this.Menus = data.data;
        });
        let direccionprocesos = 'http://127.0.0.1:8080/api/procesos/listacom/'+this.form.estado
        // + this.pagina;
       
        
        axios.get(direccionprocesos).then( data =>{
            this.Procesos = data.data;
        });

    }
}
</script>


