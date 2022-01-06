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
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(readWithId);
