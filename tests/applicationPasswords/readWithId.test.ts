import { main } from '../../src/functions/applicationPasswords/readWithId/handler';

describe('readWithIdApplicationPasswords test case', () => {
  it('200 status code', async () => {
    let event = {
      queryStringParameters: {
        username: 'admin',
        password: 'vDuLW!1eEf0t!gVtR4@k4J5w',
        url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
      },
      body: {
        userId: '11',
        context: 'view',
      },
    };
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(200);
  });

  it('400 status code', async () => {
    let event = {
      queryStringParameters: {
        username: 'admin',
        password: 'vDuLW!1eEf0t!gVtR4@k4J5w',
        url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
      },
      body: {
        userId: '',
        context: 'view',
      },
    };
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(400);
  });

  it('400 status code', async () => {
    let event = {
      queryStringParameters: {
        username: 'admin',
        password: 'vDuLW!1eEf0t!gVtR4@k4J5w',
        url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
      },
      body: {
        userId: '11',
        context: 'wrong',
      },
    };
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(400);
  });

  it('401 status code', async () => {
    let event = {
      queryStringParameters: {
        username: 'admin',
        password: 'vDuLW!1eEf0t!gVtR4@k4J5w',
        url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
      },
      body: {
        userId: 'sdsdsd',
        context: 'view',
      },
    };
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(401);
  });

  it('403 status code', async () => {
    let event = {
      queryStringParameters: {
        username: undefined,
        password: '',
        url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
      },
      body: {
        userId: '11',
        context: 'view',
      },
    };
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(403);
  });

  it('404 status code', async () => {
    let event = {
      queryStringParameters: {
        username: 'admin',
        password: 'vDuLW!1eEf0t!gVtR4@k4J5w',
        url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
      },
      body: {
        userId: '111',
        context: 'view',
      },
    };
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(404);
  });
});
