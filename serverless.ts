import type { AWS } from '@serverless/typescript';

// Application Password
import applicationPasswordCreate from '@functions/applicationPasswords/create';
import applicationPasswordDelete from '@functions/applicationPasswords/deleteWithId';
import applicationPasswordDeleteUUID from '@functions/applicationPasswords/deleteWithUUID';
import applicationPasswordRead from '@functions/applicationPasswords/readWithId';
import applicationPasswordReadUUID from '@functions/applicationPasswords/readWithUUID';
import applicationPasswordUpdate from '@functions/applicationPasswords/update';

// Block Directory
import blockDirectoryAll from '@functions/blockDirectoryItems/all';

// Block Rendered
import blockRenderedCreate from '@functions/blockRendered/create';

// Block Revision
import blockRevisionCreate from '@functions/blockRevisions/create';
import blockRevisionReadWithId from '@functions/blockRevisions/readWithId';
import blockRevisionReadAutoSave from '@functions/blockRevisions/readWithAutosave';

// Block Type
import blockTypeAll from '@functions/blockType/all';
import blockTypeReadWithName from '@functions/blockType/readWithName';
import blockTypeReadWithNameSpace from '@functions/blockType/readWithNamespace';

// Categories
import categoryAll from '@functions/categories/all';
import categoryCreate from '@functions/categories/create';
import categoryDelete from '@functions/categories/deleteWithId';
import categoryRead from '@functions/categories/readWithId';
import categoryUpdate from '@functions/categories/update';

// Comments
import commentAll from '@functions/comments/all';
import commentCreate from '@functions/comments/create';
import commentRead from '@functions/comments/readWithId';
import commentDelete from '@functions/comments/deleteWithId';
import commentUpdate from '@functions/comments/update';

// Editor Block
import editorBlockAll from '@functions/editorBlocks/all';
import editorBlockRead from '@functions/editorBlocks/readWithId';
import editorBlockDelete from '@functions/editorBlocks/deleteWithId';
import editorBlockCreate from '@functions/editorBlocks/create';
import editorBlockUpdate from '@functions/editorBlocks/update';

// Media
import mediaAll from '@functions/media/all';
import mediaRead from '@functions/media/readWithId';
import mediaDelete from '@functions/media/deleteWithId';
import mediaCreate from '@functions/media/create';
import mediaUpdate from '@functions/media/update';

// Page Revision
import pageRevisionAll from '@functions/pageRevisions/all';
import pageRevisionRead from '@functions/pageRevisions/readWithId';
import pageRevisionDelete from '@functions/pageRevisions/deleteWithId';
import pageRevisionCreate from '@functions/pageRevisions/create';
import pageRevisionReadAutoSave from '@functions/pageRevisions/readWithAutosave';
import pageRevisionReadId from '@functions/pageRevisions/readAutosaveId';

// Pages
import pageAll from '@functions/pages/all';
import pageRead from '@functions/pages/readWithId';
import pageDelete from '@functions/pages/deleteWithId';
import pageCreate from '@functions/pages/create';
import pageUpdate from '@functions/pages/update';

// Plugins
import pluginAll from '@functions/plugins/all';
import pluginRead from '@functions/plugins/readWithId';
import pluginDelete from '@functions/plugins/deleteWithId';
import pluginCreate from '@functions/plugins/create';
import pluginUpdate from '@functions/plugins/update';

// Posts
import postAll from '@functions/posts/all';
import postRead from '@functions/posts/readWithId';
import postDelete from '@functions/posts/deleteWithId';
import postCreate from '@functions/posts/create';
import postUpdate from '@functions/posts/update';

// Post Revision
import postRevisionAll from '@functions/postsRevisions/all';
import postRevisionRead from '@functions/postsRevisions/readWithId';
import postRevisionDelete from '@functions/postsRevisions/deleteWithId';
import postRevisionCreate from '@functions/postsRevisions/create';
import postRevisionReadAutoSave from '@functions/postsRevisions/readWithAutosave';
import postRevisionReadId from '@functions/postsRevisions/readAutosaveId';

// Search
import search from '@functions/searchResults/all';

// Site Settings
import settingRead from '@functions/siteSettings/read';
import settingUpdate from '@functions/siteSettings/update';

// Status
import statusesAll from '@functions/statuses/all';
import statusesRead from '@functions/statuses/readWithId';

// Tags
import tagsAll from '@functions/tags/all';
import tagsRead from '@functions/tags/readWithId';
import tagsDelete from '@functions/tags/deleteWithId';
import tagsCreate from '@functions/tags/create';
import tagsUpdate from '@functions/tags/update';

// Taxonomy
import taxonomiesAll from '@functions/Taxonomies/all';
import taxonomiesRead from '@functions/Taxonomies/readWithId';

// Theme
import themeAll from '@functions/themes/all';

// Types
import typesAll from '@functions/types/all';
import typesRead from '@functions/types/readWithId';

// Users
import usersAll from '@functions/users/all';
import usersCreate from '@functions/users/create';
import usersDelete from '@functions/users/deleteWithId';
import usersDeleteMe from '@functions/users/deleteWithMe';
import usersRead from '@functions/users/readWithId';
import usersReadMe from '@functions/users/readWithMe';
import usersUpdate from '@functions/users/updateWithId';
import usersUpdateMe from '@functions/users/updateWithMe';

const serverlessConfiguration: AWS = {
  service: 'service-zerocode-base-template',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },

  plugins: [
    'serverless-webpack',
    'serverless-offline',
    'serverless-iam-roles-per-function',
    'serverless-prune-plugin',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    stage: 'local',
    region: 'eu-west-2',
    environment: {
      DEBUG: '*',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    tracing: {
      lambda: true,
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['xray:PutTraceSegments', 'xray:PutTelemetryRecords'],
        Resource: '*',
      },
    ],
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    // Application Passwords
    applicationPasswordCreate,
    applicationPasswordDelete,
    applicationPasswordDeleteUUID,
    applicationPasswordRead,
    applicationPasswordReadUUID,
    applicationPasswordUpdate,

    // Block Directory
    blockDirectoryAll,

    // Block Rendered
    blockRenderedCreate,

    // Block Revision
    blockRevisionCreate,
    blockRevisionReadWithId,
    blockRevisionReadAutoSave,

    // Block Type
    blockTypeAll,
    blockTypeReadWithName,
    blockTypeReadWithNameSpace,

    // Category
    categoryAll,
    categoryCreate,
    categoryDelete,
    categoryRead,
    categoryUpdate,

    // Comments
    commentAll,
    commentCreate,
    commentRead,
    commentDelete,
    commentUpdate,

    // Editor Block
    editorBlockAll,
    editorBlockRead,
    editorBlockDelete,
    editorBlockCreate,
    editorBlockUpdate,

    // Media
    mediaAll,
    mediaRead,
    mediaDelete,
    mediaCreate,
    mediaUpdate,

    // Page Revision
    pageRevisionAll,
    pageRevisionRead,
    pageRevisionDelete,
    pageRevisionCreate,
    pageRevisionReadAutoSave,
    pageRevisionReadId,

    // Pages
    pageAll,
    pageRead,
    pageDelete,
    pageCreate,
    pageUpdate,

    // Plugins
    pluginAll,
    pluginRead,
    pluginDelete,
    pluginCreate,
    pluginUpdate,

    // Posts
    postAll,
    postRead,
    postDelete,
    postCreate,
    postUpdate,

    // Post Revisions
    postRevisionAll,
    postRevisionRead,
    postRevisionDelete,
    postRevisionCreate,
    postRevisionReadAutoSave,
    postRevisionReadId,

    // Search
    search,

    // Site Settings
    settingRead,
    settingUpdate,

    // Statuses
    statusesAll,
    statusesRead,

    // Tags
    tagsAll,
    tagsRead,
    tagsDelete,
    tagsCreate,
    tagsUpdate,

    // Taxonomy
    taxonomiesAll,
    taxonomiesRead,

    // Themes
    themeAll,

    // Types
    typesAll,
    typesRead,

    // Users
    usersAll,
    usersCreate,
    usersDelete,
    usersDeleteMe,
    usersRead,
    usersReadMe,
    usersUpdate,
    usersUpdateMe,
  },
};

module.exports = serverlessConfiguration;
