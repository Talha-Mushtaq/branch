import { main } from '../../src/functions/applicationPasswords/create/handler';

describe('createApplicationPasswords test case', () => {
  const data = {
    queryStringParameters: {
      username: 'admin',
      password: 'vDuLW!1eEf0t!gVtR4@k4J5w',
      url: 'http://localhost/codeanddesign/wp-json/wp/v2/',
    },
    body: {
      userId: '11',
      name: 'hamzaMushtaq56545',
      app_id: 'cc9e41f4-d483-48fd-8b2e-3ceaf62cdd4f',
    },
  };
  it('200 status code', async () => {
    let event = JSON.parse(JSON.stringify(data));
    event.body.name = 'newNames';
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(200);
  });

  it('401 status code', async () => {
    let event = JSON.parse(JSON.stringify(data));
    event.body.userId = 'asasas';
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(401);
  });

  it('403 status code', async () => {
    let event = JSON.parse(JSON.stringify(data));
    event.queryStringParameters.username = '';
    event.queryStringParameters.password = '';
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(403);
  });

  it('404 status code', async () => {
    let event = JSON.parse(JSON.stringify(data));
    event.body.userId = '111';
    expect.assertions(1);
    const response = await main(event);
    expect(response.statusCode).toEqual(404);
  });
});
