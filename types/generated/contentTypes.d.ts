import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAlethiaPageAlethiaPage extends Schema.SingleType {
  collectionName: 'alethia_pages';
  info: {
    singularName: 'alethia-page';
    pluralName: 'alethia-pages';
    displayName: 'Alethia Page';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    hero_logo: Attribute.Media & Attribute.Required;
    hero_title: Attribute.Text & Attribute.Required;
    hero_text: Attribute.Text & Attribute.Required;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    about_title: Attribute.Text & Attribute.Required;
    about_text: Attribute.Text & Attribute.Required;
    about_subtext: Attribute.Text;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Key Features Screen'>;
    features_suptitle: Attribute.String & Attribute.Required;
    features_list: Attribute.Component<'ui.features', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Explore Screen'>;
    explore_suptitle: Attribute.String & Attribute.Required;
    explore_title: Attribute.Text & Attribute.Required;
    explore_text: Attribute.Text & Attribute.Required;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Cards Screen'>;
    cards_list: Attribute.Component<'ui.card', true> & Attribute.Required;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Faq Screen'>;
    faq_title: Attribute.String & Attribute.Required;
    faq_text: Attribute.Text & Attribute.Required;
    faq_data: Attribute.Component<'ui.faq-data', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::alethia-page.alethia-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::alethia-page.alethia-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    date: Attribute.Date;
    link: Attribute.String;
    timeToRead: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    howToApply: Attribute.Blocks & Attribute.Required;
    category: Attribute.Relation<
      'api::blog.blog',
      'manyToOne',
      'api::blog-category.blog-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory extends Schema.CollectionType {
  collectionName: 'blog_categories';
  info: {
    singularName: 'blog-category';
    pluralName: 'blog-categories';
    displayName: 'Blog Category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    blogs: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToMany',
      'api::blog.blog'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.CollectionType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID<'api::career.career', 'title'> & Attribute.Required;
    type: Attribute.Enumeration<['Full-time', 'Part-time']> &
      Attribute.Required;
    location: Attribute.Enumeration<['Remote', 'Office']> & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    howToApply: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEcosystemEcosystem extends Schema.CollectionType {
  collectionName: 'ecosystems';
  info: {
    singularName: 'ecosystem';
    pluralName: 'ecosystems';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['Mainnet', 'Testnet', 'Coming soon']> &
      Attribute.Required &
      Attribute.DefaultTo<'Mainnet'>;
    project_categories: Attribute.Relation<
      'api::ecosystem.ecosystem',
      'manyToMany',
      'api::project-category.project-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ecosystem.ecosystem',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ecosystem.ecosystem',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    singularName: 'event';
    pluralName: 'events';
    displayName: 'Event';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID<'api::event.event', 'title'> & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGwynethPageGwynethPage extends Schema.SingleType {
  collectionName: 'gwyneth_pages';
  info: {
    singularName: 'gwyneth-page';
    pluralName: 'gwyneth-pages';
    displayName: 'Gwyneth Page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    hero_logo: Attribute.Media & Attribute.Required;
    hero_title: Attribute.Text & Attribute.Required;
    hero_text: Attribute.Text & Attribute.Required;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    about_title: Attribute.Text & Attribute.Required;
    about_text: Attribute.Text & Attribute.Required;
    about_subtext: Attribute.Text;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Key Features Screen'>;
    features_suptitle: Attribute.String & Attribute.Required;
    features_list: Attribute.Component<'ui.features', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Explore Screen'>;
    explore_suptitle: Attribute.String & Attribute.Required;
    explore_title: Attribute.Text & Attribute.Required;
    explore_text: Attribute.Text & Attribute.Required;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Cards Screen'>;
    cards_list: Attribute.Component<'ui.card', true> & Attribute.Required;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Faq Screen'>;
    faq_title: Attribute.String & Attribute.Required;
    faq_text: Attribute.Text & Attribute.Required;
    faq_data: Attribute.Component<'ui.faq-data', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gwyneth-page.gwyneth-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gwyneth-page.gwyneth-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    hero_title: Attribute.Text & Attribute.Required;
    hero_buttons: Attribute.Component<'ui.button', true>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Solution Screen'>;
    solution_screen_1_suptitle: Attribute.String & Attribute.Required;
    solution_screen_1_title: Attribute.Text & Attribute.Required;
    solution_screen_2_title: Attribute.String & Attribute.Required;
    solution_screen_2_btn: Attribute.Component<'ui.button'>;
    solution_screen_3_title: Attribute.String & Attribute.Required;
    solution_screen_3_btn: Attribute.Component<'ui.button'>;
    solution_screen_4_title: Attribute.String & Attribute.Required;
    solution_screen_4_btn: Attribute.Component<'ui.button'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Explore Screen'>;
    explore_screens: Attribute.Component<'ui.explore-screen', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    about_suptitle: Attribute.String & Attribute.Required;
    about_title: Attribute.Text & Attribute.Required;
    about_text: Attribute.Text & Attribute.Required;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Roadmap Screen'>;
    roadmap_suptitle: Attribute.String & Attribute.Required;
    roadmap_title: Attribute.Text & Attribute.Required;
    roadmap_list: Attribute.Component<'ui.roadmap-list', true>;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Governance Screen'>;
    governance_suptitle: Attribute.String & Attribute.Required;
    governance_title: Attribute.Text & Attribute.Required;
    governance_text: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavigationNavigation extends Schema.CollectionType {
  collectionName: 'navigations';
  info: {
    singularName: 'navigation';
    pluralName: 'navigations';
    displayName: 'Navigation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    links: Attribute.Component<'ui.navigation-link', true> & Attribute.Required;
    rank: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectCategoryProjectCategory
  extends Schema.CollectionType {
  collectionName: 'project_categories';
  info: {
    singularName: 'project-category';
    pluralName: 'project-categories';
    displayName: 'Project Category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    projects: Attribute.Relation<
      'api::project-category.project-category',
      'manyToMany',
      'api::ecosystem.ecosystem'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTakeoffPageTakeoffPage extends Schema.SingleType {
  collectionName: 'takeoff_pages';
  info: {
    singularName: 'takeoff-page';
    pluralName: 'takeoff-pages';
    displayName: 'Takeoff Page';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    hero_title: Attribute.Text & Attribute.Required;
    hero_subtitle: Attribute.String & Attribute.Required;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Builders Screen'>;
    builders_suptitle: Attribute.String & Attribute.Required;
    builders_title: Attribute.Text & Attribute.Required;
    builders_text: Attribute.Text & Attribute.Required;
    builders_cards: Attribute.Component<'ui.features', true> &
      Attribute.Required;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Community Screen'>;
    community_suptitle: Attribute.String & Attribute.Required;
    community_title: Attribute.Text & Attribute.Required;
    community_text: Attribute.Text & Attribute.Required;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'How It Works Screen'>;
    hiw_suptitle: Attribute.String & Attribute.Required;
    hiw_title: Attribute.String & Attribute.Required;
    hiw_text: Attribute.Text & Attribute.Required;
    hiw_btn: Attribute.Component<'ui.button'> & Attribute.Required;
    hiw_points_text: Attribute.Text & Attribute.Required;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Support Screen'>;
    support_suptitle: Attribute.String & Attribute.Required;
    support_title: Attribute.Text;
    support_benefits: Attribute.Component<'ui.support-benefit', true> &
      Attribute.Required;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Projects Screen'>;
    projects_suptitle: Attribute.String & Attribute.Required;
    projects_list: Attribute.Component<'ui.project', true> & Attribute.Required;
    s7: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'FAQ Screen'>;
    faq_title: Attribute.String & Attribute.Required;
    faq_text: Attribute.Text & Attribute.Required;
    faq_data: Attribute.Component<'ui.faq-data', true> & Attribute.Required;
    s8: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Partners Screen'>;
    partners_suptitle: Attribute.String & Attribute.Required;
    partners_title: Attribute.String & Attribute.Required;
    partners_text: Attribute.Text;
    partners_data: Attribute.Component<'ui.partner', true> & Attribute.Required;
    s9: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'[ COMPONENTS ]'>;
    apply_banner: Attribute.Component<'ui.apply-banner'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::takeoff-page.takeoff-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::takeoff-page.takeoff-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::alethia-page.alethia-page': ApiAlethiaPageAlethiaPage;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::career.career': ApiCareerCareer;
      'api::ecosystem.ecosystem': ApiEcosystemEcosystem;
      'api::event.event': ApiEventEvent;
      'api::gwyneth-page.gwyneth-page': ApiGwynethPageGwynethPage;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::navigation.navigation': ApiNavigationNavigation;
      'api::project-category.project-category': ApiProjectCategoryProjectCategory;
      'api::takeoff-page.takeoff-page': ApiTakeoffPageTakeoffPage;
    }
  }
}
