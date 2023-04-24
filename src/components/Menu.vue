<template>
  <div >
    <div class="container pt-2 pb-4">      
          <div class="container">
            <div
              v-for="(item, index) in Listapacientes"
              :key="index"
              @click.prevent.stop="handleClick2($event, item)"
                          >
              <div class="item" id="item1">{{item.nombre}}</div>
            </div>
      </div>
    </div>


    <vue-simple-context-menu
      :elementId="'mySecondMenu'"
      :options="optionsArray2"
      :ref="'vueSimpleContextMenu2'"
      @option-clicked="optionClicked2"
    >
    </vue-simple-context-menu>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      Listapacientes:null,
      itemArray2: [
        {
          name: 'Leslie',
          job: 'Deputy Director'
        },
        {
          name: 'Ron',
          job: 'Parks Director'
        },
        {
          name: 'Andy',
          job: 'Shoeshiner'
        }
      ],
      optionsArray2: [
        {
          name: 'Opcion 1',
          slug: 'add-star',
          class: 'my-custom-class'
        },
        {
          name: 'Opcion 2',
          slug: 'remove-star'
        }
      ]
    }
  },
  methods: {
    handleClick1 (event, item) {
      this.$refs.vueSimpleContextMenu1.showMenu(event, item)
    },
    handleClick2 (event, item) {
      this.$refs.vueSimpleContextMenu2.showMenu(event, item)
    },
    optionClicked1 (event) {
      window.alert(JSON.stringify(event))
    },
    optionClicked2 (event) {
      window.alert(JSON.stringify(event))
    }
},
    mounted:function(){
        let direccion = 'http://127.0.0.1:8080/api/menu/listamenus';
        axios.get(direccion).then( data =>{
            this.Listapacientes = data.data;
        });
    }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli:400,700");

.container{
  background-color: #ddd;
  padding: 2px;
  overflow: hidden;
}

.item{
  margin: 1mm;
  padding: 1em;
  color: #ffffff;
  float: left;
}

#item1{
  background-color: #a05ce4;
}

</style>
