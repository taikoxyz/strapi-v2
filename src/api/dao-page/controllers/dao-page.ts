/**
 * dao-page controller
 */

import { factories } from "@strapi/strapi";
import { daoPageApi } from "../daopage.api";

export default factories.createCoreController(
    "api::dao-page.dao-page",
    daoPageApi.controller
);
