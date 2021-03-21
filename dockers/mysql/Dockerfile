FROM mysql:5.7
COPY ./init docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=test
EXPOSE 3306
CMD ["mysqld"]
