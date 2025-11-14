<template>
    <div>
        <h1>{{ t('home.title') }}</h1>
        <p>{{ t('home.description') }}</p>

        <div class="api-demo">
            <h2>{{ t('home.apiDemo') }}</h2>

            <button @click="testBackendConnection">{{ t('home.testButton') }}</button>

            <div v-if="dbTestResult" class="result">
                <h3>{{ t('home.dbTables') }}</h3>
                <pre>{{ dbTestResult }}</pre>
            </div>

            <div v-if="error" class="error">
                <h3>{{ t('home.error') }}</h3>
                <p>{{ error }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import api from '@/services/api'

const { t } = useLocale()
const dbTestResult = ref(null)
const error = ref(null)

async function testBackendConnection() {
    try {
        error.value = null
        const response = await api.testDatabase()
        dbTestResult.value = response.data
    } catch (err) {
        error.value = t('home.errorMessage')
        console.error('API-Fehler:', err)
    }
}
</script>