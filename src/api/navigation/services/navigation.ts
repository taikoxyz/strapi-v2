/**
 * navigation service
 */

import { factories } from '@strapi/strapi';
import { navigationApi } from '../navigation.api';

export default factories.createCoreService('api::navigation.navigation', navigationApi.service);
