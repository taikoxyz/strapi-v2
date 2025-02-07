/**
 * gwyneth-page service
 */

import { factories } from '@strapi/strapi';
import { gwynethpageApi } from '../../alethia-page/alethiapage.api';

export default factories.createCoreService('api::gwyneth-page.gwyneth-page', {
    find: gwynethpageApi.service.findOne
});
