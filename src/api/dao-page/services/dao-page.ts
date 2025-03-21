/**
 * dao-page service
 */

import { factories } from "@strapi/strapi";
import { daoPageApi } from "../daopage.api";

export default factories.createCoreService("api::dao-page.dao-page", {
    find: daoPageApi.service.findOne,
});
