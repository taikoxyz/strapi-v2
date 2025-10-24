import type { Attribute, Schema } from '@strapi/strapi';

export interface UiApp extends Schema.Component {
  collectionName: 'components_ui_apps';
  info: {
    description: '';
    displayName: 'App';
    icon: 'archive';
  };
  attributes: {
    active: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    categories: Attribute.Component<'ui.category', true>;
    icon: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    url: Attribute.Text;
  };
}

export interface UiApplyBanner extends Schema.Component {
  collectionName: 'components_ui_apply_banners';
  info: {
    description: '';
    displayName: 'Apply Banner';
    icon: 'archive';
  };
  attributes: {
    button: Attribute.Component<'ui.button'> & Attribute.Required;
    disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    text: Attribute.Text;
    title: Attribute.Text & Attribute.Required;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cube';
  };
  attributes: {
    disabledArrow: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    link: Attribute.Text;
    name: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    variant: Attribute.Enumeration<['pink', 'pink-outlined']>;
  };
}

export interface UiCard extends Schema.Component {
  collectionName: 'components_ui_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'grid';
  };
  attributes: {
    disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    href: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface UiCategory extends Schema.Component {
  collectionName: 'components_ui_categories';
  info: {
    description: '';
    displayName: 'Category';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface UiDApps extends Schema.Component {
  collectionName: 'components_ui_d_apps';
  info: {
    displayName: 'DApps';
    icon: 'command';
  };
  attributes: {
    icons: Attribute.Media<'images', true> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface UiExploreScreen extends Schema.Component {
  collectionName: 'components_ui_explore_screens';
  info: {
    displayName: 'Explore Screen';
    icon: 'grid';
  };
  attributes: {
    link: Attribute.Component<'ui.button'>;
    suptitle: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface UiFaqData extends Schema.Component {
  collectionName: 'components_ui_faq_data';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'cube';
  };
  attributes: {
    answer: Attribute.Blocks & Attribute.Required;
    question: Attribute.String & Attribute.Required;
  };
}

export interface UiFeatures extends Schema.Component {
  collectionName: 'components_ui_features';
  info: {
    displayName: 'Features';
    icon: 'database';
  };
  attributes: {
    disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    text: Attribute.Text & Attribute.Required;
    title: Attribute.String;
  };
}

export interface UiNavigationChild extends Schema.Component {
  collectionName: 'components_ui_navigation_children';
  info: {
    displayName: 'NavigationChild';
    icon: 'cube';
  };
  attributes: {
    desc: Attribute.String;
    href: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface UiNavigationLink extends Schema.Component {
  collectionName: 'components_ui_navigation_links';
  info: {
    description: '';
    displayName: 'NavigationLink';
    icon: 'cube';
  };
  attributes: {
    children: Attribute.Component<'ui.navigation-child', true>;
    column: Attribute.Enumeration<['Column 1', 'Column 2']> &
      Attribute.Required &
      Attribute.DefaultTo<'Column 1'>;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.Text;
    icon: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
  };
}

export interface UiPartner extends Schema.Component {
  collectionName: 'components_ui_partners';
  info: {
    displayName: 'Partner';
    icon: 'cube';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    url: Attribute.Text;
  };
}

export interface UiProject extends Schema.Component {
  collectionName: 'components_ui_projects';
  info: {
    displayName: 'Project';
    icon: 'archive';
  };
  attributes: {
    description: Attribute.Blocks & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    url: Attribute.Text;
  };
}

export interface UiRoadmapItem extends Schema.Component {
  collectionName: 'components_ui_roadmap_items';
  info: {
    displayName: 'Roadmap Item';
    icon: 'filter';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface UiRoadmapList extends Schema.Component {
  collectionName: 'components_ui_roadmap_lists';
  info: {
    displayName: 'Roadmap List';
    icon: 'bulletList';
  };
  attributes: {
    data: Attribute.Component<'ui.roadmap-item', true> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface UiSupportBenefit extends Schema.Component {
  collectionName: 'components_ui_support_benefits';
  info: {
    description: '';
    displayName: 'Support Benefit';
    icon: 'check';
  };
  attributes: {
    features: Attribute.Component<'ui.roadmap-item', true>;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.app': UiApp;
      'ui.apply-banner': UiApplyBanner;
      'ui.button': UiButton;
      'ui.card': UiCard;
      'ui.category': UiCategory;
      'ui.d-apps': UiDApps;
      'ui.explore-screen': UiExploreScreen;
      'ui.faq-data': UiFaqData;
      'ui.features': UiFeatures;
      'ui.navigation-child': UiNavigationChild;
      'ui.navigation-link': UiNavigationLink;
      'ui.partner': UiPartner;
      'ui.project': UiProject;
      'ui.roadmap-item': UiRoadmapItem;
      'ui.roadmap-list': UiRoadmapList;
      'ui.support-benefit': UiSupportBenefit;
    }
  }
}
