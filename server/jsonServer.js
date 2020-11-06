import jsonServer from 'json-server'
export const server = jsonServer.create()
export const router = jsonServer.router('./server/db.json')
export const middlewares = jsonServer.defaults()
