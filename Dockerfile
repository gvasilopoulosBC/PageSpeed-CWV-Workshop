# Use an official PHP 8.3 CLI base image
FROM php:8.3-cli


# Install Node.js 20.9.0
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm

# Install Supervisor
RUN apt-get update && \
    apt-get install -y supervisor && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory to /app
WORKDIR /app

# Copy all files from the current working directory into /app in the Docker image
COPY . .

# Configure Supervisor to run both processes
RUN echo "[supervisord]\n\
nodaemon=true\n\n\
[program:slow-api]\n\
command=sh -c \"pnpm i && pnpm run start 2>&1 | tee -a /proc/1/fd/1\"\n\
directory=/app/slow-api\n\
autorestart=true\n\
autostart=true\n\
stderr_logfile=/var/log/slow-api.err.log\n\
stdout_logfile=/var/log/slow-api.out.log\n\n\
[program:client]\n\
command=sh -c \"php -S 0.0.0.0:8000 2>&1 | tee -a /proc/1/fd/1\"\n\
directory=/app/client\n\
autorestart=true\n\
autostart=true\n\
stderr_logfile=/var/log/client.err.log\n\
stdout_logfile=/var/log/client.out.log" > /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 3030 8000

# Start supervisord when the container launches
CMD ["/usr/bin/supervisord"]
