pipeline {
    agent any

    stages {

        stage('Verificar entorno') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build completado') {
            steps {
                echo 'La aplicación superó todas las pruebas'
            }
        }
    }

    post {
        success {
            echo 'PIPELINE COMPLETADO: SUCCESS'
        }

        failure {
            echo 'PIPELINE DETENIDO: FAILURE'
        }
    }
}