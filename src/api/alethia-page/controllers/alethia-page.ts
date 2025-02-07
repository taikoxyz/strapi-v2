/**
 * alethia-page controller
 */

import { factories } from "@strapi/strapi";
import { alethiapageApi } from "../alethiapage.api";

export default factories.createCoreController(
    "api::alethia-page.alethia-page",
    alethiapageApi.controller
);
