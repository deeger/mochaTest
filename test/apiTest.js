var request = require('supertest');
var express = require('express');

var app = require('../app.js');

describe('GET /users', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /users' function(){
  it('should respond with json', function(done){
    request(app)
      .post('/users')
      .send({userName: 'DJ Misurelli', email:'deeger_2@msn.com'})
      .set('Accept', 'application/json')
      .expect(404, done);
  })
});
