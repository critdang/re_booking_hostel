/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockUser2, mockBlockUserSeeder, mockUser, mockUserRegister, mockAdminUser
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('LOGIN /user/login', () => {
  let token;
  let user;
  beforeAll(async () => {
    try {
      // [START] create user
      const userSeeder = await db.User.create(mockUser);
      user = userSeeder.dataValues;
      await db.User.create(mockUser2);
      // [END] create user
      // [END] get user
      // [START] get token
      const userToken = await helperFnTest.getLoginToken();
      token = userToken.token;
      // [END] get token
      // [START] get id user
      // [END] get id user
      await db.User.create(mockBlockUserSeeder);
      await db.User.update(mockUserRegister);
      await db.User.update({ isBlocked: true }, { where: { email: mockBlockUserSeeder.email } });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUserRegister.email } });
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockBlockUserSeeder.email } });
    await db.User.destroy({ where: { email: mockUser2.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
  });
  // TEST /updatePassword
  it('[/updatePassword] update password successfully', async () => {
    const res = await request(app)
      .put('/user/updatePassword')
      .set('Authorization', `Bearer ${token}`)
      .send({ email: 'dai@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch('Update password successfully');
  });
  it('[/updatePassword] get error message if account has been disable or not active', async () => {
    const res = await request(app)
      .put('/user/updatePassword')
      .set('Authorization', `Bearer ${token}`)
      .send({ email: 'EmailNotExist@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(`Cannot read property 'email' of null`);
  });
  it('[/updatePassword] get error message if no provide enough required attributes', async () => {
    const res = await request(app)
      .put('/user/updatePassword')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(500);
  });
});
