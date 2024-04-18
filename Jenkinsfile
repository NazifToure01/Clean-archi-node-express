pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/NazifToure01/Clean-archi-node-express', branch: 'main')
      }
    }

    stage('script') {
      steps {
        sh 'ls -la'
      }
    }

  }
}