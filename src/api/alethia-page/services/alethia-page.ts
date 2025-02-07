/**
 * alethia-page service
 */

import { factories } from "@strapi/strapi";
import { alethiapageApi } from "../alethiapage.api";

export default factories.createCoreService("api::alethia-page.alethia-page", {
    find: alethiapageApi.service.findOne,
}); 
``