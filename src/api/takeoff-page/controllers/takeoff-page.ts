/**
 * takeoff-page controller
 */

import { factories } from "@strapi/strapi";
import { takeoffpageApi } from "../takeoffpage.api";

export default factories.createCoreController(
    "api::takeoff-page.takeoff-page",
    takeoffpageApi.controller
); 
