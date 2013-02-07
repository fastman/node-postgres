module.exports = {
  //database user's name
  user: process.env.USER,

  //name of database to connect
  database: process.env.USER,

  //database user's password
  password: null,
  
  //database port
  port: 5432,

  //number of rows to return at a time from a prepared statement's
  //portal. 0 will return all rows at once
  rows: 0,
  
  //number of connections to use in connection pool
  //0 will disable connection pooling
  poolSize: 10,

  //max milliseconds a client can go unused before it is removed
  //from the pool and destroyed
  poolIdleTimeout: 30000,

  //frequeny to check for idle clients within the client pool
  reapIntervalMillis: 1000,

  // binary result mode
  binary: false,

  // Controls the number of seconds of inactivity after which TCP should send a keepalive message to the server.
  // A value of zero uses the system default.
  keepalives_idle: 0,

  // Controls the number of seconds after which a TCP keepalive message that is not acknowledged by the server should be retransmitted
  // A value of zero uses the system default.
  keepalives_interval: 0,

  // Controls the number of TCP keepalives that can be lost before the client's connection to the server is considered dead.
  // A value of zero uses the system default.
  keepalives_count: 0
}
