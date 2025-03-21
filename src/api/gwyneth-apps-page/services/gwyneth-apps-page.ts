/**
 * gwyneth-apps-page service
 */

import { factories } from '@strapi/strapi';
import { gwynethAppsPageApi } from '../gwyneth-apps-page.api';

export default factories.createCoreService('api::gwyneth-apps-page.gwyneth-apps-page', {
    find: gwynethAppsPageApi.service.findOne
});
