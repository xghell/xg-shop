import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import homeTabBar from '@/store/tab-bar/home-tab-bar.js';

const store = new Vuex.Store({
	modules: {
	    homeTabBar,
	    
	}
})

export default store;
