import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
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
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
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
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
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
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
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
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAlethiaPageAlethiaPage extends Schema.SingleType {
  collectionName: 'alethia_pages';
  info: {
    description: '';
    displayName: 'Alethia Page';
    pluralName: 'alethia-pages';
    singularName: 'alethia-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    about_subtext: Attribute.Text;
    about_text: Attribute.Text & Attribute.Required;
    about_title: Attribute.Text & Attribute.Required;
    cards_list: Attribute.Component<'ui.card', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::alethia-page.alethia-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    explore_suptitle: Attribute.String & Attribute.Required;
    explore_text: Attribute.Text & Attribute.Required;
    explore_title: Attribute.Text & Attribute.Required;
    faq_data: Attribute.Component<'ui.faq-data', true>;
    faq_text: Attribute.Text & Attribute.Required;
    faq_title: Attribute.String & Attribute.Required;
    features_list: Attribute.Component<'ui.features', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    features_suptitle: Attribute.String & Attribute.Required;
    hero_logo: Attribute.Media<'images'> & Attribute.Required;
    hero_text: Attribute.Text & Attribute.Required;
    hero_title: Attribute.Text & Attribute.Required;
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Key Features Screen'>;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Explore Screen'>;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Cards Screen'>;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Faq Screen'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::alethia-page.alethia-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory extends Schema.CollectionType {
  collectionName: 'blog_categories';
  info: {
    displayName: 'Blog Category';
    pluralName: 'blog-categories';
    singularName: 'blog-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogs: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToMany',
      'api::blog.blog'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Relation<
      'api::blog.blog',
      'manyToOne',
      'api::blog-category.blog-category'
    >;
    content: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    date: Attribute.Date;
    howToApply: Attribute.Blocks & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.String;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    timeToRead: Attribute.String & Attribute.Required;
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.CollectionType {
  collectionName: 'careers';
  info: {
    displayName: 'Career';
    pluralName: 'careers';
    singularName: 'career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    howToApply: Attribute.Blocks & Attribute.Required;
    location: Attribute.Enumeration<['Remote', 'Office']> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::career.career', 'title'> & Attribute.Required;
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    type: Attribute.Enumeration<['Full-time', 'Part-time']> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDaoPageDaoPage extends Schema.SingleType {
  collectionName: 'dao_pages';
  info: {
    displayName: 'DAO Page';
    pluralName: 'dao-pages';
    singularName: 'dao-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    about_features: Attribute.Component<'ui.features', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    about_join_btn: Attribute.Component<'ui.button'>;
    about_join_suptitle: Attribute.String & Attribute.Required;
    about_join_title: Attribute.Text & Attribute.Required;
    about_suptitle: Attribute.String & Attribute.Required;
    about_text: Attribute.Text;
    about_title: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dao-page.dao-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faq_data: Attribute.Component<'ui.faq-data', true> & Attribute.Required;
    faq_text: Attribute.Text & Attribute.Required;
    faq_title: Attribute.String & Attribute.Required;
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Welcome Screen'>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'FAQ Screen'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::dao-page.dao-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    welcome_btn: Attribute.Component<'ui.button'>;
    welcome_suptitle: Attribute.String & Attribute.Required;
    welcome_text: Attribute.Text & Attribute.Required;
    welcome_title: Attribute.Text & Attribute.Required;
  };
}

export interface ApiEcosystemEcosystem extends Schema.CollectionType {
  collectionName: 'ecosystems';
  info: {
    description: '';
    displayName: 'Project';
    pluralName: 'ecosystems';
    singularName: 'ecosystem';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ecosystem.ecosystem',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    project_categories: Attribute.Relation<
      'api::ecosystem.ecosystem',
      'manyToMany',
      'api::project-category.project-category'
    >;
    publishedAt: Attribute.DateTime;
    type: Attribute.Enumeration<['Mainnet', 'Testnet', 'Coming soon']> &
      Attribute.Required &
      Attribute.DefaultTo<'Mainnet'>;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::event.event', 'title'> & Attribute.Required;
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGwynethAppsPageGwynethAppsPage extends Schema.SingleType {
  collectionName: 'gwyneth_apps_pages';
  info: {
    description: '';
    displayName: 'Gwyneth Apps Page';
    pluralName: 'gwyneth-apps-pages';
    singularName: 'gwyneth-apps-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    apps_list: Attribute.Component<'ui.app', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gwyneth-apps-page.gwyneth-apps-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    disclaimer_active: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    disclaimer_text: Attribute.Text & Attribute.Required;
    disclaimer_title: Attribute.String & Attribute.Required;
    hero_about_btn: Attribute.Component<'ui.button'>;
    hero_about_suptitle: Attribute.String & Attribute.Required;
    hero_about_text: Attribute.Text & Attribute.Required;
    hero_dapps: Attribute.Component<'ui.d-apps'>;
    hero_title: Attribute.Text & Attribute.Required;
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'DISCLAIMER'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Apps Screen'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::gwyneth-apps-page.gwyneth-apps-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGwynethPageGwynethPage extends Schema.SingleType {
  collectionName: 'gwyneth_pages';
  info: {
    displayName: 'Gwyneth Page';
    pluralName: 'gwyneth-pages';
    singularName: 'gwyneth-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    about_subtext: Attribute.Text;
    about_text: Attribute.Text & Attribute.Required;
    about_title: Attribute.Text & Attribute.Required;
    cards_list: Attribute.Component<'ui.card', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gwyneth-page.gwyneth-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    explore_suptitle: Attribute.String & Attribute.Required;
    explore_text: Attribute.Text & Attribute.Required;
    explore_title: Attribute.Text & Attribute.Required;
    faq_data: Attribute.Component<'ui.faq-data', true>;
    faq_text: Attribute.Text & Attribute.Required;
    faq_title: Attribute.String & Attribute.Required;
    features_list: Attribute.Component<'ui.features', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    features_suptitle: Attribute.String & Attribute.Required;
    hero_logo: Attribute.Media<'images'> & Attribute.Required;
    hero_text: Attribute.Text & Attribute.Required;
    hero_title: Attribute.Text & Attribute.Required;
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Key Features Screen'>;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Explore Screen'>;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Cards Screen'>;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Faq Screen'>;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Home Page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    about_suptitle: Attribute.String & Attribute.Required;
    about_text: Attribute.Text & Attribute.Required;
    about_title: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    explore_screens: Attribute.Component<'ui.explore-screen', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
      >;
    governance_suptitle: Attribute.String & Attribute.Required;
    governance_text: Attribute.Text & Attribute.Required;
    governance_title: Attribute.Text & Attribute.Required;
    hero_buttons: Attribute.Component<'ui.button', true>;
    hero_title: Attribute.Text & Attribute.Required;
    roadmap_list: Attribute.Component<'ui.roadmap-list', true>;
    roadmap_suptitle: Attribute.String & Attribute.Required;
    roadmap_title: Attribute.Text & Attribute.Required;
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Solution Screen'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Explore Screen'>;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'About Screen'>;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Roadmap Screen'>;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Governance Screen'>;
    solution_screen_1_suptitle: Attribute.String & Attribute.Required;
    solution_screen_1_title: Attribute.Text & Attribute.Required;
    solution_screen_2_btn: Attribute.Component<'ui.button'>;
    solution_screen_2_title: Attribute.String & Attribute.Required;
    solution_screen_3_btn: Attribute.Component<'ui.button'>;
    solution_screen_3_title: Attribute.String & Attribute.Required;
    solution_screen_4_btn: Attribute.Component<'ui.button'>;
    solution_screen_4_title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Navigation';
    pluralName: 'navigations';
    singularName: 'navigation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    links: Attribute.Component<'ui.navigation-link', true> & Attribute.Required;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    updatedAt: Attribute.DateTime;
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
    displayName: 'Project Category';
    pluralName: 'project-categories';
    singularName: 'project-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    projects: Attribute.Relation<
      'api::project-category.project-category',
      'manyToMany',
      'api::ecosystem.ecosystem'
    >;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Takeoff Page';
    pluralName: 'takeoff-pages';
    singularName: 'takeoff-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    apply_banner: Attribute.Component<'ui.apply-banner'>;
    builders_cards: Attribute.Component<'ui.features', true> &
      Attribute.Required;
    builders_suptitle: Attribute.String & Attribute.Required;
    builders_text: Attribute.Text & Attribute.Required;
    builders_title: Attribute.Text & Attribute.Required;
    community_suptitle: Attribute.String & Attribute.Required;
    community_text: Attribute.Text & Attribute.Required;
    community_title: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::takeoff-page.takeoff-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faq_data: Attribute.Component<'ui.faq-data', true> & Attribute.Required;
    faq_text: Attribute.Text & Attribute.Required;
    faq_title: Attribute.String & Attribute.Required;
    hero_subtitle: Attribute.String & Attribute.Required;
    hero_title: Attribute.Text & Attribute.Required;
    hiw_btn: Attribute.Component<'ui.button'> & Attribute.Required;
    hiw_points_text: Attribute.Text & Attribute.Required;
    hiw_suptitle: Attribute.String & Attribute.Required;
    hiw_text: Attribute.Text & Attribute.Required;
    hiw_title: Attribute.String & Attribute.Required;
    partners_data: Attribute.Component<'ui.partner', true> & Attribute.Required;
    partners_suptitle: Attribute.String & Attribute.Required;
    partners_text: Attribute.Text;
    partners_title: Attribute.String & Attribute.Required;
    projects_list: Attribute.Component<'ui.project', true> & Attribute.Required;
    projects_suptitle: Attribute.String & Attribute.Required;
    s1: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Hero Screen'>;
    s2: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Builders Screen'>;
    s3: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Community Screen'>;
    s4: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'How It Works Screen'>;
    s5: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Support Screen'>;
    s6: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Projects Screen'>;
    s7: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'FAQ Screen'>;
    s8: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'Partners Screen'>;
    s9: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.DefaultTo<'[ COMPONENTS ]'>;
    support_benefits: Attribute.Component<'ui.support-benefit', true> &
      Attribute.Required;
    support_suptitle: Attribute.String & Attribute.Required;
    support_title: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::takeoff-page.takeoff-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
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
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
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
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
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
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
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
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
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
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
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
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
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
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
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
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
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
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::alethia-page.alethia-page': ApiAlethiaPageAlethiaPage;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::blog.blog': ApiBlogBlog;
      'api::career.career': ApiCareerCareer;
      'api::dao-page.dao-page': ApiDaoPageDaoPage;
      'api::ecosystem.ecosystem': ApiEcosystemEcosystem;
      'api::event.event': ApiEventEvent;
      'api::gwyneth-apps-page.gwyneth-apps-page': ApiGwynethAppsPageGwynethAppsPage;
      'api::gwyneth-page.gwyneth-page': ApiGwynethPageGwynethPage;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::navigation.navigation': ApiNavigationNavigation;
      'api::project-category.project-category': ApiProjectCategoryProjectCategory;
      'api::takeoff-page.takeoff-page': ApiTakeoffPageTakeoffPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
