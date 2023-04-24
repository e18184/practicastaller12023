<template>
  <div id="app">
    <div class="container pt-2 pb-4">
      <div class="row">
        <div class="col-lg-6">
      
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
          name: 'Add Star',
          slug: 'add-star',
          class: 'my-custom-class'
        },
        {
          name: 'Remove Star',
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

html {
  width: 100%;
  font-size: 18px;
  color: #333;
}

body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Muli", sans-serif;
}

#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.code-text {
  background: #eee;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

textarea {
  min-height: 175px;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
