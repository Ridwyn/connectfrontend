

const dev = process.env.NODE_ENV !== 'production'

const server =  dev ? 'http://localhost:4000' : 'https://connect-task-mangement.herokuapp.com'

export const socketuri = dev ? `${window.location.protocol==='https:'? 'wss': 'ws'}://localhost:4000`:
`${window.location.protocol==='https:'? 'wss': 'ws'}://connect-task-mangement.herokuapp.com`;


export default server