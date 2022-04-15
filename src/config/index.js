const dev = process.env.NODE_ENV !== 'production'

const server =  dev ? 'http://localhost:4000' : 'http://d6e4eef.online-server.cloud'

export default server