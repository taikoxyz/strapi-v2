import { populateFields } from "../../common/utils/populateFields";
import { wrapApi } from "../../common/utils/wrapapi";

export const homepageApi = wrapApi("api::home-page.home-page", {
    find: {
        populate: {
            hero_buttons: populateFields.button,
            solution_screen_2_btn: populateFields.button,
            solution_screen_3_btn: populateFields.button,
            solution_screen_4_btn: populateFields.button,
            explore_screens: {
                populate: {
                    link: populateFields.button
                }
            },
            roadmap_list: {
                populate: {
                    data: true
                }
            }
        }
    }
})