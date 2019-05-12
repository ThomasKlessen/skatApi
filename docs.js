'use strict';

const dir = __dirname;

const config = (() => {

    let config = {};

    /**
     * directories
     */
    config.dir = {
        base: dir,
        dest: dir + '/docs'
    };

    return config;

})();

const Generator = require('jsdoc-generator');

const jsdoc = new Generator({
    dest: config.dir.dest + '/documentation',
    paths: [
        {
            name: 'SkatApi',
            source: config.dir.base + '/src'
        }
    ]
});

jsdoc.generate();