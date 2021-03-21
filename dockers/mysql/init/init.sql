CREATE USER followup@'%' IDENTIFIED BY 'followup';
CREATE DATABASE followup;
GRANT ALL PRIVILEGES ON followup.* to followup@'%';
