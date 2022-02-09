const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../api/app');
const { getConnection } = require('./connectionMock');
const { MongoClient } = require('mongodb');

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint login', () => {
  describe('Quando o email ou senha estão vazios', () => {
    let response;

    before (async () => {
      response = await chai.request(app).post('/login').send({});
    })

    it('returna o status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna o corpo da requisição', () => {
      expect(response.body).to.be.an('object');
    });

    it('retorna um objeto com uma mensagem', () => {
      expect(response.body).to.have.a.property('message');
    });

    it('retorna a mensagem "All fields must be filled"', () => {
      expect(response.body.message).to.be.equal('All fields must be filled')
    });
  });

  describe('Quando o email não existe', () => {
    let connectionMock;
    let response;

    before(async () => {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai.request(app).post('/login').send({
        email: 'test@test.com',
        password: '12345678',
      });
    });

    after(async () => {
      MongoClient.connect.restore();
    });

    it('retorna o status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna o corpo da requisição', () => {
      expect(response.body).to.be.an('object');
    });

    it('retorna um objeto com uma menssagem', () => {
      expect(response.body).to.have.property('message');
    });

    it('retorna a mensagem "Incorrect username or password"', () => {
      expect(response.body.message).to.be.equal('Incorrect username or password')
    });
  });
}); 