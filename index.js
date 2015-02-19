var parseImport = require('parse-import');

/**
 * Walks a CSS AST and rewrites URLs in "@import" rules.
 *
 * @param {Object} style CSS AST created by rework.
 * @param {Function} rewriter Callback function which is called for found URLs.
 * It accepts one argument (the URL) and must return updated URL.
 */
var run = function(style, rewriter) {
    var rules = style.rules || [];
    var ret = [];

    rules.forEach(function (rule) {
        if (rule.type !== 'import') {
            ret.push(rule);
            return;
        }

        var importRule = '@import ' + rule.import + ';';
        var data = parseImport(importRule)[0];

        ret.push({
            type: 'import',
            import: rule.import.replace(data.path, rewriter(data.path))
        });
    });

    style.rules = ret;
}

module.exports = function(rewriter) {
    return function(style) {
        run(style, rewriter);
    }
}
