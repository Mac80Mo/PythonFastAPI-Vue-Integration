<template>
    <div>
        <h1>Hello World!</h1>
        
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

<style scoped>
.api-demo {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-text-secondary);
    border-radius: 8px;
}

.api-demo h2 {
    margin-bottom: 1rem;
}

.result {
    margin-top: 1rem;
    padding: 1rem;
    background: var(--color-text-tertiary);
    color: var(--color-bg);
    border-radius: 4px;
}

.error {
    margin-top: 1rem;
    padding: 1rem;
    background: #ff4444;
    color: white;
    border-radius: 4px;
}

pre {
    margin: 0;
    white-space: pre-wrap;
}
</style>