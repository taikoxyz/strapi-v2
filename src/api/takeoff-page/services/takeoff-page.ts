/**
 * takeoff-page service
 */

import { factories } from '@strapi/strapi';
import { takeoffpageApi } from '../takeoffpage.api';

export default factories.createCoreService('api::takeoff-page.takeoff-page', {
    find: takeoffpageApi.service.findOne
});
