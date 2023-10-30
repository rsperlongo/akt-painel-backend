import { Server } from 'socket.io';
import http from 'http'
const express = require('express')
const app = express()


const server = http.createServer()
const io = new Server(server)

  type IRequest = Request & {
    io?: any
  }

  app.use((req: IRequest, res, next) => {
    req.io = io
  
    next()
  })

  io.on('connection', socket => {
    socket.on('message', msg => {
      console.log(msg)
    })
  })
