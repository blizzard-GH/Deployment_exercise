<template>
    <div id="app">
        <p> Book Counter</p>
        <pre>{{ jsondata }}</pre>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            jsondata: null,
            error: null
        }
    },
    mounted(){
        this.getBookCountAPI()
    },
    methods: {
        async getBookCountAPI(){
            const baseUrl = 'https://countbooks-kfbiug66rq-uc.a.run.app/';
            try{
                const response = await axios.get(baseUrl)
                this.jsondata = response.data;
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

<style>
#app {
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

p {
    color: #333;
    font-size: 16px;
    margin: 10px 0;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

pre {
    background-color: #e1e1e1;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
    overflow-x: auto;
}
</style>