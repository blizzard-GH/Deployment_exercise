<template>
    <div id="app">
        <p> Book Counter</p>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null">Total Number of Books: {{ count }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            count: null,
            error: null
        }
    },
    methods: {
        async getBookCount(){
            const baseUrl = import.meta.env.MODE === 'development'
                // ? 'http://127.0.0.1:5001/weeklyexercises-d0700/us-central1/countbooks'
                ? 'https://countbooks-kfbiug66rq-uc.a.run.app/'
                : 'https://countbooks-kfbiug66rq-uc.a.run.app/';
            try{
                const response = await axios.get(baseUrl)
                this.count = response.data.count;
                this.error = null;
            } catch(error){
                console.error('Error fetching book count:', error)
                this.error = error,
                this.count = null;
            }
        }
    }
}
</script>