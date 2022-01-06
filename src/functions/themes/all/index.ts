import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'getAllThemes',
        request: {
          schema: {
            'application/json': schema
          },
          parameters: {
            querystrings: {
              username: true,
              password: true,
              url: true,
            }
          }                    
        }
      }
    }
  ]
}
