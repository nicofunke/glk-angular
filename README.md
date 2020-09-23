# GlkAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Additionally run the backend by `php -S 127.0.0.1:8000 -t ./backend/PHP`. Please create a file named `database.ini` in the current directory. This file should contain the connection to the database. Check the file `database.template.ini` for the format of the database configuration file.

## Build

Run `npm run build-prod` to build the project. The build artifacts will be stored in the `dist/` directory. Please fill `database.ini` with the database information an make sure it is not publicly accessible from outside your server.