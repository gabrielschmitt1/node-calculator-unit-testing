pipeline {
    agent {
        docker {
            image 'gabrielschmitt/node-calculator:latest'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage ('Test') {
            steps {
                sh 'jest'
            }
        }
    }
}
