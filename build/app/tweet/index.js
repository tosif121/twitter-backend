"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const types_1 = require("./types");
const queries_1 = require("./queries");
const muatations_1 = require("./muatations");
const resolvers_1 = require("./resolvers");
exports.Tweet = { types: types_1.types, muatations: muatations_1.muatations, resolvers: resolvers_1.resolvers, queries: queries_1.queries };
