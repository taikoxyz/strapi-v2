/**
 * gwyneth-page controller
 */

import { factories } from "@strapi/strapi";
import { gwynethpageApi } from "../../alethia-page/alethiapage.api";

export default factories.createCoreController(
    "api::gwyneth-page.gwyneth-page",
    gwynethpageApi.controller
);
