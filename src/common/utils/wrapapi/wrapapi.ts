import { getServiceFindAll, getServiceFindOne } from "./services";
import { CreateApiParams } from "./types";
import { getService } from "./utils";

export const wrapApi = function (key: string, params: CreateApiParams) {
    const find = getServiceFindAll(key, params.find);
    const findOne = getServiceFindOne(key, params.findOne || params.find);

    return {
        service: {
            find,
            findOne,
        },
        controller: {
            find(ctx) {
                return getService(key).find(ctx);
            },
            findOne(ctx) {
                return getService(key).findOne(ctx);
            },
        },
    };
};
