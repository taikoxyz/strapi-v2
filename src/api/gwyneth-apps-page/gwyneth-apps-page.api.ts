import { populateFields } from "../../common/utils/populateFields";
import { wrapApi } from "../../common/utils/wrapapi";

export const gwynethAppsPageApi = wrapApi("api::gwyneth-apps-page.gwyneth-apps-page", {
    find: {
        populate: {
            hero_about_btn: populateFields.button,
            hero_dapps: {
                populate: {
                    icons: populateFields.file
                }
            },
            apps_list: {
                populate: {
                    icon: populateFields.file,
                    categories: true
                }
            }
        }
    }
})