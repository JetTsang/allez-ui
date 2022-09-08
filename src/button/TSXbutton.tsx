import { defineComponent,mergeProps,PropType} from "vue";
import 'uno.css'
// 实现  <button color="xxx"></button>的效果 
export type BColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'
//  定义类型
export const props = {
  color: {type:String as PropType<BColor>,default:'green'}
}
export default defineComponent({

  name: "TSXbutton",
  props,
  setup(props,{slots}){
    return () => <button 
      class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      border-none 
      cursor-pointer 
      bg-${props.color}-500 
      hover:bg-${props.color}-700
      `}
        > 
        {slots.default ? slots.default() : ''}
     </button>
  },
  // render() {
  //   return <button>JSX Button</button>;
  // },

});