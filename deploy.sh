sudo yum -y install nginx
scp -r ./out/* root@101.35.86.100:/home/lighthouse/builds/aha-web
scp -r ./aha-web.conf root@101.35.86.100:/etc/nginx/conf.d