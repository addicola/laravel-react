pipeline {
    
    node {
        label 'php-slave'
    }
    
    stages {
        
        stage ('Building Stage') {

            steps {
                echo 'Building'
                composer install
            }
        }

        stage ('Testing Stage') {

            steps {
                echo 'Testing'
            }
        }


        stage ('Deployment Stage') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
