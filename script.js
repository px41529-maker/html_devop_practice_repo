const commands = {

    linux: `
$ pwd
$ ls -la
$ cd /var/log
$ cat /etc/os-release
$ df -h
$ free -m
$ top
$ ps aux
$ systemctl status nginx
$ chmod 755 script.sh
$ chown user:user file.txt
$ ip addr
$ ss -tulnp
`,

    git: `
$ git --version
$ git init
$ git clone <repository>
$ git status
$ git add .
$ git commit -m "Initial commit"
$ git branch
$ git checkout -b feature
$ git merge feature
$ git pull
$ git push origin main
`,

    docker: `
$ docker --version
$ docker images
$ docker ps
$ docker ps -a
$ docker pull nginx
$ docker build -t devops-app .
$ docker run -d -p 8080:80 devops-app
$ docker stop <container>
$ docker rm <container>
$ docker logs <container>
$ docker exec -it <container> bash
`,

    kubernetes: `
$ kubectl version
$ kubectl get nodes
$ kubectl get pods
$ kubectl get deployments
$ kubectl get services
$ kubectl apply -f deployment.yaml
$ kubectl describe pod <pod>
$ kubectl logs <pod>
$ kubectl exec -it <pod> -- bash
$ kubectl delete pod <pod>
`,

    aws: `
$ aws --version
$ aws sts get-caller-identity
$ aws ec2 describe-instances
$ aws s3 ls
$ aws s3 cp file.txt s3://bucket/
$ aws iam list-users
$ aws cloudwatch list-metrics
`,

    cicd: `
$ java -version
$ mvn -version
$ mvn clean
$ mvn test
$ mvn package
$ mvn package -DskipTests

Jenkins:
- Clone repository
- Build application
- Run tests
- Build Docker image
- Push image
- Deploy application
`
};

function showCommands(category) {
    document.getElementById("terminal-output").textContent =
        commands[category];
}