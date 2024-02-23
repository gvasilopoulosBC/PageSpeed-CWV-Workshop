# PageSpeed-CWV-Workshop

## Overview

Repo for the demo of the workshop. 

Workshop's final code -> https://github.com/gvasilopoulosBC/PageSpeed-CWV-Workshop/tree/workshop-final-code

## Prerequisites

- PHP - I use 8.3.0
- Node.js - I use v20.9.0
- Package Manager - I use pnpm but you can use what you prefer.

## Getting Started

Clone the repository:

   ```bash
   git clone https://github.com/gvasilopoulosBC/PageSpeed-CWV-Workshop.git
   ```

### Run with Docker 
```bash
docker-compose up -d --force-recreate
```

### Manual installation
1. Install dependencies for the API folder:

   ```bash
   cd slow-api
   ```

   ```bash
   pnpm i
   ```

   _yarn or npm install_

2. Start the dev server for the API at localhost:3030:

   ```bash
   pnpm start
   ```

3. Open a new terminal tab, change directory to `client` folder and start dev server for the client at localhost:8000:

   ```bash
   cd client
   ```

   ```bash
   php -S localhost:8000
   ```
