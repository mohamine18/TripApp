// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vuex from 'vuex'
import '../node_modules/vuetify/src/stylus/app.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import SocialSharing from 'vue-social-sharing/dist/vue-social-sharing.js'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VBottomNav,
  VTooltip,
  VTextField,
  VSubheader,
  VDialog,
  VCard,
  VAvatar,
  VMenu,
  Vswitch,
  VBadge,
  VDivider,
  VCarousel,
  VSelect,
  VChip,
  VTabs,
  VForm,
  VCheckbox,
  VSnackbar,
  VStepper,
  VExpansionPanel,
  VDatePicker,
  VRadioGroup,
  VBottomSheet,
  VProgressCircular,
  VRangeSlider,
  VSlider,
  VCombobox,
  transitions
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VBottomNav,
    VTooltip,
    VTextField,
    VSubheader,
    VDialog,
    VCard,
    VAvatar,
    VMenu,
    Vswitch,
    VBadge,
    VDivider,
    VCarousel,
    VSelect,
    VChip,
    VTabs,
    VForm,
    VCheckbox,
    VSnackbar,
    VStepper,
    VExpansionPanel,
    VDatePicker,
    VRadioGroup,
    VBottomSheet,
    VProgressCircular,
    VRangeSlider,
    VSlider,
    VCombobox,
    transitions
  },
  theme: {
    primary: '#F44336',
    secondary: '#FF5252',
    accent: '#FFA726',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.use(Vuex)
Vue.use(SocialSharing);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
