"use strict"

const coreInit = ({ jscad, swcadJs }) => {

    /**
     * First step to building the library
     * */
    const swcadJsSpecCore = {
        data: require('swcad-js-spec-data').init({ jscad }),
        profiles: null,
        components: null,
    }


    /**
     * Intermediate step to building the library
     * */
    let swcadJsSpecAssembly = swcadJsSpecCore

    const assemblyProfiles = require('swcad-js-spec-profiles').init({ jscad, swcadJs })
    swcadJsSpecAssembly.profiles = assemblyProfiles

    const assemblyComponents = require('swcad-js-spec-components').init({ jscad, swcadJs })
    swcadJsSpecAssembly.components = assemblyComponents


    /**
     * User-facing library
     * */
    const swcadJsSpec = {
        data: swcadJsSpecAssembly.data,
        profiles: swcadJsSpecAssembly.profiles,
        components: swcadJsSpecAssembly.components,
    }

    return swcadJsSpec
}

module.exports = {
    init: coreInit,
};
