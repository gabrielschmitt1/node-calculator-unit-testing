pipeline {
    agent {
        docker {
            image 'node:14'
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
