import { populateFields } from "../../common/utils/populateFields";
import { wrapApi } from "../../common/utils/wrapapi";

export const daoPageApi = wrapApi("api::dao-page.dao-page", {
    find: {
        populate: {
            welcome_btn: populateFields.button,
            about_features: true,
            about_join_btn: populateFields.button,
            faq_data: true
        }
    }
})