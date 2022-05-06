'use strict';
const slugify = require('slugify');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.name) {
                console.log(data.name.toLowerCase());
                data.slug = slugify(data.name.toLowerCase());
            }
        },
        beforeUpdate: async (params, data) => {
            data.slug = slugify(data.name.toLowerCase());
        },
    },
};
