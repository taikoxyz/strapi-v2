import { Options, Params } from "./types";

export const getDBRepository = (key: string) => {
    return strapi.db.query(key);
};

export const getService = (key: string) => {
    return strapi.service(key as any);
};

export const getLocale = async (userLocale: string) => {
    const defaultLocale =
        await strapi.plugins.i18n.services.locales.getDefaultLocale();
    const locales = (await strapi.plugins.i18n.services.locales.find()) as {
        code: string;
    }[];

    return (
        locales.find((locale) => locale.code === userLocale?.toLowerCase())
            ?.code || defaultLocale
    );
};

export const getPagination = (
    _page?: number | string,
    _limit?: number | string
) => {
    const limit = +_limit || 12;
    const page = +_page || 1;
    const offset = (page - 1) * limit;

    return {
        page,
        limit,
        offset,
    };
};

export const getMetadata = (count: number, limit: number, page: number) => {
    return {
        page,
        total: count,
        pageSize: limit,
        pageCount: Math.ceil(count / limit),
    };
};

export const addPropToObject = (value: string, object: any) => {
    const split = value.split(".");
    const first = split.shift();

    if (split.length === 0) {
        object[first] = true;
        return object;
    }

    if (typeof object[first] !== "object") {
        object[first] = { populate: {} };
    }

    return addPropToObject(split.join("."), object[first].populate);
};

export const getPopulate = (data?: Options["populate"]) => {
    if (!data) {
        return {};
    }

    if (typeof data === "string") {
        return { [data]: true };
    }

    if (Array.isArray(data)) {
        const object: Record<string, boolean> = {};

        for (const item of data) {
            addPropToObject(item, object);
        }

        return object;
    } 

    return data;
};

export const filterQuery = ({
    populate,
    where,
    fields,
    filter,
    orderBy,
    _limit,
    page,
    ...query
}: Record<string, any>) => query;


export const filterParams = (query: Record<string, any>): Params => {
    return {
        filters: query.filters || undefined,
        select: query.select || undefined,
        populate: query.populate || undefined,
        orderBy: query.orderBy || undefined,
        data: query.data || undefined,
        page: query.page || undefined,
        pageSize: query.pageSize || undefined,
        limit: query.limit || undefined,
        offset: query.offset || undefined,
        count: query.count || undefined,
    };
};

export const excludeFields = (obj: any, fields?: string[]) => {
    if(!Array.isArray(fields)) {
        return obj;
    }
    const newObject: any = {};

    for(const [prop, value] of Object.entries(obj)) {
        if(!obj.hasOwnProperty(prop) || fields.includes(prop)) {
            continue;
        }
        newObject[prop] = value;
    }

    return newObject;
}  