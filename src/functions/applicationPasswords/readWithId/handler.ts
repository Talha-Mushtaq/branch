import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import axios from 'axios';
import schema from './schema';
import btoa from 'btoa';

/**
 * @localmember readWithId
 * @description readWithId function is used to get users through userId.
 * @param {ValidatedEventAPIGatewayProxyEvent <typeof schema>} body userId , context.
 * @return {JSON} { statusCode: number, body: { data: array } }.
 */

const readWithId: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
) => {
  try {
    const { userId, context } = event.body;
    const { username, password, url } = event.queryStringParameters;
    const token = btoa(`${username}:${password}`);

    if (
      userId === undefined ||
      context === undefined ||
      userId === '' ||
      context === ''
    )
      return formatJSONResponse(400, {
        message: 'Missing required request parameters <userId,context>',
      });

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

    let response = await ax.get(`users/${userId}/application-passwords`, {
      params: { context: context },
    });

    return formatJSONResponse(200, {
      data: response.data,
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
        message: 'Invalid parameter <context>',
      });
    else
      return formatJSONResponse(500, {
        message: 'Internal Server Error',
      });
  }
};

export const main = middyfy(readWithId);
