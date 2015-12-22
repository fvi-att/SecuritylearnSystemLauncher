mysql -u root -padmin -h $MARIADB_PORT_3306_TCP_ADDR < create_db.sql

cd /var/www/SecLearnApp/SecLearnApp/
./manage.py migrate
