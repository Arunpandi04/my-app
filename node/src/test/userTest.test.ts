import expressApp  from '../index' // Link to your server file
import { describe, expect } from '@jest/globals';
const supertest = require('supertest') ;

let userData = {
  "email": "arunpandi@gmail.com",
  "password":"Admin"
}

let updateData = {
  "email": "arunpandi@gmail.com",
  "gender": "Male",
  "profilePicture": "profileIMage",
  "firstName": "Arun",
  "lastName": "pandi",
  "phoneNumber": 9787059504,
  "dob": "2020-09-01",
  "adress":"chennai"
}

let updateError= {
  "email": "arunpandi@gmail.com",
  "gender": "Male",
  "profilePicture": "profileIMage",
  "firstName": 123,
  "lastName": "pandi",
  "phoneNumber": "9787059504",
  "dob": "2020-09-01",
  "adress":"chennai"
}

let token = "", id = '';
describe("UserDetail", () => {
  it('login user', async done => {
    const res = await supertest(expressApp).post('/login').send(userData)
    token = res.body.token
    id=res.body.data._id
    expect(res.statusCode).toBe(200)
    done()
  })

  it('Get  item ById', async done => {
    const res = await supertest(expressApp).get('/user/'+id).set('Authorization', 'Bearer ' + token)
    expect(res.statusCode).toBe(200)
    done()
  })

  it('login with invalid password', async done => {
    let userdatas = {
      "email": "arunpandi@gmail.com",
      "password":"ADmin"
    }
    const res = await supertest(expressApp).post('/login').send(userdatas)
    expect(res.statusCode).toBe(400)
    done()
  })

  it('Update item ById', async done => {
    const res = await supertest(expressApp).put('/user/'+id).set('Authorization', 'Bearer ' + token).send(updateData)
    expect(res.statusCode).toBe(200)
    done()
  })

  it('Get  item ById with invalid Token', async done => {
    const res = await supertest(expressApp).get('/user/'+id).set('Authorization', 'Bearer ' + "en1234567")
    expect(res.statusCode).toBe(403)
    done()
  })

  it('Update item ById  with invalid Token', async done => {
    const res = await supertest(expressApp).put('/user/'+id).set('Authorization', 'Bearer ' + "en1234567").send(updateData)
    expect(res.statusCode).toBe(403)
    done()
  })

  it('Update item ById  with invalid type data', async done => {

    const res = await supertest(expressApp).put('/user/'+id).set('Authorization', 'Bearer ' + token).send(updateError)
    expect(res.statusCode).toBe(404)
    done()
  })

})