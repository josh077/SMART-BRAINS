const os = require('os');

// Get the system architecture
console.log('Architecture:', os.arch());

// Get the number of CPU cores
console.log('Number of CPUs:', os.cpus().length);

// Get the total memory
console.log('Total Memory:', os.totalmem());

// Get the free memory
console.log('Free Memory:', os.freemem());

// Get the home directory
console.log('Home Directory:', os.homedir());

// Get the hostname
console.log('Hostname:', os.hostname());

// Get the network interfaces
console.log('Network Interfaces:', os.networkInterfaces());

// Get the operating system platform
console.log('Platform:', os.platform());

// Get the system uptime
console.log('Uptime:', os.uptime(), 'seconds');
