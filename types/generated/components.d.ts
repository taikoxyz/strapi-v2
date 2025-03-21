import type { Schema, Attribute } from '@strapi/strapi';

export interface UiApp extends Schema.Component {
  collectionName: 'components_ui_apps';
  info: {
    displayName: 'App';
    icon: 'archive';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    categories: Attribute.Component<'ui.category', true>;
    active: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    url: Attribute.Text;
  };
}

export interface UiApplyBanner extends Schema.Component {
  collectionName: 'components_ui_apply_banners';
  info: {
    displayName: 'Apply Banner';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text;
    button: Attribute.Component<'ui.button'> & Attribute.Required;
    disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cube';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.Text;
    variant: Attribute.Enumeration<['pink', 'pink-outlined']>;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    disabledArrow: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface UiCard extends Schema.Component {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'Card';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    href: Attribute.Text;
    disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface UiCategory extends Schema.Component {
  collectionName: 'components_ui_categories';
  info: {
    displayName: 'Category';
    description: '';
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
    icons: Attribute.Media & Attribute.Required;
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
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'ui.button'>;
    suptitle: Attribute.String & Attribute.Required;
  };
}

export interface UiFaqData extends Schema.Component {
  collectionName: 'components_ui_faq_data';
  info: {
    displayName: 'FAQ';
    icon: 'cube';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Blocks & Attribute.Required;
  };
}

export interface UiFeatures extends Schema.Component {
  collectionName: 'components_ui_features';
  info: {
    displayName: 'Features';
    icon: 'database';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text & Attribute.Required;
    disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface UiNavigationChild extends Schema.Component {
  collectionName: 'components_ui_navigation_children';
  info: {
    displayName: 'NavigationChild';
    icon: 'cube';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    desc: Attribute.String;
    href: Attribute.Text & Attribute.Required;
  };
}

export interface UiNavigationLink extends Schema.Component {
  collectionName: 'components_ui_navigation_links';
  info: {
    displayName: 'NavigationLink';
    icon: 'cube';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    href: Attribute.Text;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    icon: Attribute.Media;
    children: Attribute.Component<'ui.navigation-child', true>;
    column: Attribute.Enumeration<['Column 1', 'Column 2']> &
      Attribute.Required &
      Attribute.DefaultTo<'Column 1'>;
  };
}

export interface UiPartner extends Schema.Component {
  collectionName: 'components_ui_partners';
  info: {
    displayName: 'Partner';
    icon: 'cube';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
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
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
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
    title: Attribute.String & Attribute.Required;
    data: Attribute.Component<'ui.roadmap-item', true> & Attribute.Required;
  };
}

export interface UiSupportBenefit extends Schema.Component {
  collectionName: 'components_ui_support_benefits';
  info: {
    displayName: 'Support Benefit';
    icon: 'check';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    features: Attribute.Component<'ui.roadmap-item', true>;
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
