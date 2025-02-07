export interface Params {
    where?: any;
    filters?: any;
    select?: any;
    populate?: Record<string, boolean> | string[];
    orderBy?: any;
    _q?: string;
    data?: any;
    page?: number;
    pageSize?: number;
    limit?: number;
    offset?: number;
    count?: boolean;
}

export type IParamsWhere = Record<string, any>;

export interface Options {
    slug?:
        | boolean
        | {
              enabled: boolean;
              name: string;
          };
    published?: boolean;
    locale?: boolean;
    populate?: string[] | Record<string, any> | string;
    excludeFields?: string[];
    builder?: (context: any) => Promise<Params>;
}

export interface OptionsFindAll extends Options {
    metadata?: boolean;
}

export type CreateApiParams = {
    findOne?: Options;
    find: OptionsFindAll;
};
