// Import Vue and the components
import { createApp } from 'vue';

import DarkModeToggle from './components/DarkModeToggle';
import FileSelect from './components/FileSelect';
import HowlrParser from './components/HowlrParser';
import Bio from './components/Bio';
import ProfileFields from "./components/ProfileFields";
import Chat from "./components/Chat";
import Messages from "./components/Messages";

window.Vue = createApp;

const app = createApp({});
window.Vue = app;

app.component('dark-mode-toggle', DarkModeToggle);
app.component('file-select', FileSelect);
app.component('howlr-parser', HowlrParser);
app.component('bio', Bio);
app.component('profile-fields', ProfileFields);
app.component('chat', Chat);
app.component('messages', Messages);
app.mount('#app');

window._ = require('lodash');

