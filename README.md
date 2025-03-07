## Installation

Clone the repository:

```bash
git clone https://github.com/mrcolti4/book-library-manager.git
cd book-library-manager
```

Install PHP dependencies:
```bash
composer install
```
Install JavaScript dependencies:

```bash
npm install
```

Copy the example environment file:
```bash
cp .env.example .env
```
Open the .env file and configure the following settings:

```env
APP_NAME=Book Library Manager
APP_ENV=local
APP_KEY= # Generate this in the next step
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

Generate the application key:
```bash
php artisan key:generate
```

Create the SQLite database file:
```bash
touch database/database.sqlite
```
Run database migrations:
```bash
php artisan migrate --seed
```

Build the front-end assets:
```bash
npm run build
```
Serve the application:

```bash
php artisan serve
```
The application will be accessible at http://localhost:8000.
