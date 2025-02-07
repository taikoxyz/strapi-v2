/**
 * home-page service
 */

import { factories } from "@strapi/strapi";
import { homepageApi } from "../homepage.api";

export default factories.createCoreService("api::home-page.home-page", {
    find: homepageApi.service.findOne,
});
