#dockerfile

FROM nginx
# ADD nginx.conf /etc/nginx/nginx.conf
# ADD default.conf /etc/nginx/conf.d/default.conf
ADD dist /usr/share/nginx/html

EXPOSE 80