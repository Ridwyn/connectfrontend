const dev = process.env.NODE_ENV !== 'production'

const server =  dev ? 'http://localhost:4000' : 'https://yourwebsite.com'

export default server