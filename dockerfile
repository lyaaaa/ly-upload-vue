#dockerfile

FROM nginx

COPY ./dist /usr/share/nginx/html/

EXPOSE 8083