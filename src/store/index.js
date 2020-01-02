import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
		populationData:{},
		employmentData:{},
		socialSecurityData:{},
		economicsData:{},
		medicalData:{}
	},
	getters:{
		
	},
	actions:{
		
	},
	mutations:{
		savepopulationData(state,data){
			state.populationData = data;
		},
		saveemploymentData(state,data){
			state.employmentData = data;
		},
		savesocialSecurityData(state,data){
			state.socialSecurityData = data;
		},
		saveeconomicsData(state,data){
			state.economicsData = data;
		},
		savemedicalData(state,data){
			state.medicalData = data;
		}
	}
})