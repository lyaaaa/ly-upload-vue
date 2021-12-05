#dockerfile

FROM nginx

COPY ./dist /usr/share/

EXPOSE 8083