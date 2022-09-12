import Button from "../Button";
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from "vitest";


// 测试分组

describe('Button',()=>{
    // mount之后dom的挂载是否成功
    test("mount  @vue/test-utils", () => {
        // @vue/test-utils
        const wrapper = shallowMount(Button, {
        slots: {
            default: 'Button'
            }
        });
        
        // 断言
        expect(wrapper.text()).toBe("Button");
        // 测试颜色
        expect(wrapper.classes().map(i=>i.replace('\n','')).includes('bg-green-500')).toBe(true)   
    }) 
    test("mount  @vue/test-utils", () => {
        // @vue/test-utils
        const wrapper = shallowMount(Button, {
        slots: {
            default: 'Button'
        },
        props: {
            color: 'red'
          }
    });
        
    // 断言
    expect(wrapper.text()).toBe("Button");
    // 测试颜色
    expect(wrapper.classes().map(i=>i.replace('\n','')).includes('bg-red-500')).toBe(true)   
    }) 
})