import { populateFields } from "../../common/utils/populateFields";
import { wrapApi } from "../../common/utils/wrapapi";

export const takeoffpageApi = wrapApi("api::takeoff-page.takeoff-page", {
    find: {
        populate: {
            builders_cards: true,
            hiw_btn: populateFields.button,
            support_benefits: {
                populate: {
                    icon: true,
                    features: true,
                }
            },
            projects_list: {
                populate: {
                    icon: true,
                }
            },
            faq_data: true,
            partners_data: {
                populate: {
                    icon: true,
                }
            },
            apply_banner: {
                populate: {
                    button: populateFields.button
                }
            }
        }
    }
})