module.exports = {
    apps: [
        {
            name: "bartender",
            cwd: "/root/bartender",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 7001
            },
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "800M",
            error_file: "/root/.pm2/logs/bartender-error.log",
            out_file: "/root/.pm2/logs/bartender-out.log",
            log_date_format: "DD/MM/YYYY HH:mm:ss"
        }
    ]
};