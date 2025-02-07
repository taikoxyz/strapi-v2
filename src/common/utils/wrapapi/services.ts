import { Options, OptionsFindAll } from "./types";
import {
    excludeFields,
    filterParams,
    getDBRepository,
    getLocale,
    getMetadata,
    getPagination,
    getPopulate,
} from "./utils";


/* 
* Find One
*/
export const getServiceFindOne = (key: string, params: Options) => {
    return async (context: any) => {
        const service = getDBRepository(key);

        const searchId = context.params.id;

        const buildParams: any = params.builder ? await params.builder(context) : {};

        const populate = Object.assign(
            {},
            getPopulate(context.query.populate),
            getPopulate(params.populate)
        );

        const search = {
            where: buildParams.where || {},
            populate,
        };

        if (params.published) {
            search.where.publishedAt = { $ne: null };
        }

        search.where.$or = search.where.$or ?? [];

        if (
            params.slug === true ||
            (typeof params.slug === "object" && params.slug.enabled)
        ) {
            const slugName =
                typeof params.slug === "object" ? params.slug.name : "slug";

            if (typeof searchId === "number" && !isNaN(searchId)) {
                search.where.$or.push({ id: searchId });
            } else if (typeof searchId === "string") {
                search.where.$or.push({ [slugName]: searchId });
            }
        }

        if (context.query.locale && params.locale) {
            const locale = await getLocale(context.query.locale);
            search.where.locale = locale;
        }

        const condition = Object.assign(
            {},
            filterParams(context.query),
            buildParams,
            search
        );

        const result = await service.findOne(condition);

        if(typeof result === "object") {
            return excludeFields(result, params.excludeFields);
        }

        return result;
    };
};

/* 
* Find All
*/
export const getServiceFindAll = (key: string, params: OptionsFindAll) => {
    return async (context: any) => {
        const service = getDBRepository(key);

        const buildParams: any = params.builder ? await params.builder(context) : {};

        const pagination = getPagination(
            context.query.page,
            context.query._limit
        );

        const populate = Object.assign(
            {},
            getPopulate(context.query.populate),
            getPopulate(params.populate)
        );

        const search = {
            where: Object.assign(
                {},
                // filterQuery(context.query),
                buildParams.where || {}
            ),
            populate,
        };

        if (params.published) {
            search.where.publishedAt = { $ne: null };
        }

        if (context.query.locale && params.locale) {
            const locale = await getLocale(context.query.locale);
            search.where.locale = locale;
        }

        const condition = Object.assign(
            {},
            filterParams(context.query),
            buildParams,
            search,
            pagination
        );

        let results = await service.findMany(condition);

        if(Array.isArray(params.excludeFields)) {
            results = results.map((obj) => excludeFields(obj, params.excludeFields));
        }

        if (!params.metadata) {
            return results;
        }

        const count = await service.count(condition);
        const meta = getMetadata(count, pagination.limit, pagination.page);

        return {
            results,
            meta,
        } as any;
    };
};
