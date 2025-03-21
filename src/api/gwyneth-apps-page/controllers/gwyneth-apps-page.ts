/**
 * gwyneth-apps-page controller
 */

import { factories } from "@strapi/strapi";
import { gwynethAppsPageApi } from "../gwyneth-apps-page.api";

export default factories.createCoreController(
    "api::gwyneth-apps-page.gwyneth-apps-page",
    gwynethAppsPageApi.controller
);
