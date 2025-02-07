/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";
import { homepageApi } from "../homepage.api";

export default factories.createCoreController(
    "api::home-page.home-page",
    homepageApi.controller
);
