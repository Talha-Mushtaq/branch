export default {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    name: { type: 'string' },
    app_id: { type: 'string' },
  },
  //required: ['name']
  required: [],
} as const;
