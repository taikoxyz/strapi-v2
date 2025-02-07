import { populateFields } from "../../common/utils/populateFields";
import { wrapApi } from "../../common/utils/wrapapi";

const getApi = (key: string) => wrapApi(key, {
    find: {
        populate: {
            hero_logo: populateFields.file,
            features_list: true,
            cards_list: {
                populate: {
                    icon: populateFields.file
                }
            },
            faq_data: true,
        }
    }
});

export const alethiapageApi = getApi("api::alethia-page.alethia-page");

export const gwynethpageApi = getApi("api::gwyneth-page.gwyneth-page");