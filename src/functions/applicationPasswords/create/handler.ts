import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import axios from 'axios';
import btoa from 'btoa';

/**
 * @localmember createApplicationPassword
 * @description createApplicationPassword function is used to create the user through user Id.
 * @param {ValidatedEventAPIGatewayProxyEvent <typeof schema>} body userId,name of user and app_id .
 * @return {JSON} { statusCode: number, body: { message: string } }.
 */

const createApplicationPassword: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  try {
    const { userId, name, app_id } = event.body;
    const { username, password, url } = event.queryStringParameters;
    const token = btoa(`${username}:${password}`);

    if (
      userId === undefined ||
      name === undefined ||
      app_id === undefined ||
      userId === '' ||
      name === '' ||
      app_id === ''
    ) {
      return formatJSONResponse(400, {
        message: 'Missing required request parameters <userId,name,app_id>',
      });
    }
    if (
      username === undefined ||
      password === undefined ||
      url === undefined ||
      username === '' ||
      password === '' ||
      url === ''
    ) {
      return formatJSONResponse(403, {
        message: 'Fobidden',
      });
    }

    let ax = axios.create({
      baseURL: `${url}`,
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    await ax.post(`users/${userId}/application-passwords`, {
      app_id: app_id,
      name: name,
    });

    return formatJSONResponse(200, {
      message: 'Created Application Password Successfully',
    });
  } catch (err) {
    if (err.response.status === 404)
      return formatJSONResponse(404, {
        message: 'Not Found',
      });
    else if (err.response.status === 409)
      return formatJSONResponse(403, {
        message: 'Fobidden',
      });
    else if (
      err.response.data.error === 'INVALID_USERNAME' ||
      err.response.data.error === 'INVALID_PASSWORD' ||
      err.response.status === 401
    )
      return formatJSONResponse(401, {
        message: 'Unathorized',
      });
    else if (err.response.status === 400)
      return formatJSONResponse(400, {
        message: 'Missing required request parameters <userId,name,app_id>',
      });
    else
      return formatJSONResponse(500, {
        message: 'Internal Server Error',
      });
  }
};

export const main = middyfy(createApplicationPassword);
