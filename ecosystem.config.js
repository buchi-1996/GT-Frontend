module.exports = {
  apps: [{
    name: 'nodepeers.com',
    script: 'npm',
    args: 'start',
    wait_ready: true,
    listen_timeout: 10000,
    env: {
      NODE_ENV: 'production'
    }
  }]
}