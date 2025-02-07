import { populateFields } from "../../common/utils/populateFields";
import { wrapApi } from "../../common/utils/wrapapi";

export const navigationApi = wrapApi("api::navigation.navigation", {
    find: {
        published: true,
        populate: {
            media: populateFields.file,
            links: {
                populate: {
                    icon: populateFields.file,
                    children: true
                },
            }
        },
        async builder() {
            return {
                orderBy: {
                    rank: "ASC"
                }
            }
        }
    }
})