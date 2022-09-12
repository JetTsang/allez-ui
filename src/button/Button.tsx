import { defineComponent,mergeProps,PropType} from "vue";
import 'uno.css'
// 实现  <button color="xxx"></button>的效果 
export type BColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'
export type BIcon= 'search' | 'edit' 
//  定义类型
export const props = {
  color: {type:String as PropType<BColor>,default:'green'},
  icon: {type:String as PropType<BIcon>,default:''},
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
        {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> :'' }
        {slots.default ? slots.default() : ''}
     </button>
  },
});