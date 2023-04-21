<template>
    <div id="app">
    Esta es nuestra tabla 
    Usuarios*
    {{usuario}}

    </div>
</template>
<script>
export default {
    name: 'Tabla',
    data() {
        return {
            usuario: []

        }
        
    },
    methods : {
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
