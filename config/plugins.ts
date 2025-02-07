export default ({ env }) => ({
    transformer: {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
            requestTransforms: {
                wrapBodyWithDataKey: true,
            },
        },
    },
    "import-export-entries": {
        enabled: true,
        config: {},
    },
});
