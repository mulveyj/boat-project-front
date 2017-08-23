node {
   stage('Slack started') {
           slackSend channel: "#northcoders-java", message: "Yachts started building"
   }
   stage('Preparation') {
      git 'https://github.com/mulveyj/boat-project-front.git'
   }
   stage('Package Install') {
      sh "npm install"
   }
   stage('Create Build Folder'){
       sh "npm run build"
   }
   stage('Docker Build') {
      sh "docker build -t boat-project-front ."
   }
   stage('Stop app'){
      sh "docker stop boat-project-front || true"
      sh "docker rm boat-project-front || true"
   }
   stage('Docker deploy'){
      sh "docker run -d --name boat-project-front -p 80:80 boat-project-front"
   }
}