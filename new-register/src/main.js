import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue';
import MyButton from '@/components/ui/MyButton.vue';
import MyTextarea from '@/components/ui/MyTextarea.vue';
import MyCheckbox from '@/components/ui/MyCheckbox.vue';
import MyRadio from '@/components/ui/MyRadio.vue';
import MySelect from '@/components/ui/MySelect.vue';
import MyDialog from '@/components/ui/MyDialog.vue';



const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.component('MyInput', MyInput);
app.component('MyButton', MyButton);
app.component('MyTextarea', MyTextarea);
app.component('MyCheckbox', MyCheckbox);
app.component('MyRadio', MyRadio);
app.component('MySelect', MySelect);
app.component('MyDialog', MyDialog);