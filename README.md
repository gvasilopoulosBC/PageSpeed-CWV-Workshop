# PageSpeed-CWV-Workshop

## Overview

Repo for the demo of the workshop.

## Prerequisites

- PHP - I use 8.3.0
- Node.js - I use v20.9.0
- Package Manager - I use pnpm but you can use what you prefer.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/gvasilopoulosBC/PageSpeed-CWV-Workshop.git
   ```

2. Install dependencies for the API folder:

   ```bash
   cd slow-api
   pnpm i (yarn or npm istall)
   ```

3. Start the dev server for the API at localhost:3030:

    ```bash
    pnpm start
    ```

4. Open a new terminal tab, change directory to `client` folder and start dev server for the client at localhost:8000:

    ```bash
    cd client
    php -S localhost:8000
    ```