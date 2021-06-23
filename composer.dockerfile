FROM composer:2

# ADD and set Group
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# Work in the specific space
WORKDIR /var/www/html
