/**
 * navigation controller
 */

import { factories } from "@strapi/strapi";
import { navigationApi } from "../navigation.api";

export default factories.createCoreController(
    "api::navigation.navigation",
    navigationApi.controller
);
 