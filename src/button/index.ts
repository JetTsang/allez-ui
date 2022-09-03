import { defineComponent, h } from "vue";

export default defineComponent({

  name: "SButton",

  // template:'<button>MyButton</button>'

  render() {

    return h("button", {
        on:{
            click:()=>{
                console.log(111);
            }
        },
        onclick:()=>{
            console.log(111); 
        }
    }, "MyButton");

  },

});