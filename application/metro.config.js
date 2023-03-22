/**
 * Metro configuration for React Native
 * @format
 */

const { getDefaultConfig } = require("metro-config");

module.exports ={
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            }
        })
    }
}