'use strict';

/**
 * info-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-site.info-site');
