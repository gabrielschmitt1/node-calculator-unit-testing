pipeline {
    agent {
        docker {
            image 'gabrielschmitt/node-calculator:latest'
        }
    }
    stages {
        stage('Initialize'){
            /* groovylint-disable-next-line NoDef, VariableTypeRequired */
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
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
