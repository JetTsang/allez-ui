import {App} from 'vue'
import SButton from "./button";
import SFCbutton from "./button/SFCbutton.vue";
import TSXbutton from "./button/TSXbutton";
export {SButton,SFCbutton,TSXbutton};
export default{
    install(app:App):void{
        app.component(SButton.name,SButton)
        app.component(SFCbutton.name,SFCbutton)
        app.component(TSXbutton.name,TSXbutton)
    }
}