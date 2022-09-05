import {App} from 'vue'
import SButton from "./button";
import SFCButton from "./button/SFCbutton.vue";
import TSXbutton from "./button/TSXbutton";
export {SButton,SFCButton,TSXbutton};
export default{
    install(app:App):void{
        app.component(SButton.name,SButton)
        app.component(SFCButton.name,SButton)
        app.component(TSXbutton.name,SButton)
    }
}