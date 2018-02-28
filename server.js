var express = require('express')
var path = require('path')
var request = require('request')

var app = express()

var src = 'http://opm.8864.com'

app.use('/zyj',express.static(path.join(__dirname,'build')))

app.use('/zyj/html',function(req,res,next){
    res.sendFile(path.join(__dirname,'build/html/index.html'))
})

app.use('/api/*',function(req,res,next){
    let { method, baseUrl, originalUrl, query, body } = req
    if (method.toLocaleLowerCase() === 'get') {
        request.get(src+originalUrl,function(err,response,body){
            res.send(JSON.parse(body))
        })
    }
})

app.listen('6800',function(){
    console.log('app is listening at 6800')
})