<template>
    <div>
        <h1>Hello World!</h1>
        <p>A production-ready fullstack starter using FastAPI (backend) and Vue.js 3 (frontend) in Docker. Features hot-reload, robust API integration, global theme system, and clean code architecture for rapid development.</p>
        
        <div class="api-demo">
            <h2>API-Integration Demo</h2>
            
            <button @click="testBackendConnection">Backend-Verbindung testen</button>
            
            <div v-if="dbTestResult" class="result">
                <h3>Datenbank-Tabellen:</h3>
                <pre>{{ dbTestResult }}</pre>
            </div>
            
            <div v-if="error" class="error">
                <h3>Fehler:</h3>
                <p>{{ error }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';

export default {
    name: "Home",
    data() {
        return {
            dbTestResult: null,
            error: null
        }
    },
    methods: {
        async testBackendConnection() {
            try {
                this.error = null;
                const response = await api.testDatabase();
                this.dbTestResult = response.data;
            } catch (err) {
                this.error = err.message || 'Verbindung zum Backend fehlgeschlagen';
                console.error('API-Fehler:', err);
            }
        }
    }
}
</script>