/*
Copyright (C) 2016 Timofey Kachalov <sanex3339@yandex.ru>

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

require("source-map-support").install();

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chance_1 = __webpack_require__(61);
var JSFuck_1 = __webpack_require__(16);

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'arrayContains',
        value: function arrayContains(array, searchElement) {
            return array.indexOf(searchElement) >= 0;
        }
    }, {
        key: 'arrayRotate',
        value: function arrayRotate(array, times) {
            if (!array.length) {
                throw new ReferenceError('Cannot rotate empty array.');
            }
            if (times <= 0) {
                return array;
            }
            var newArray = array,
                temp = void 0;
            while (times--) {
                temp = newArray.pop();
                newArray.unshift(temp);
            }
            return newArray;
        }
    }, {
        key: 'btoa',
        value: function btoa(string) {
            var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return new Buffer(encode ? encodeURI(string) : string).toString('base64');
        }
    }, {
        key: 'decToHex',
        value: function decToHex(dec) {
            var radix = 16;
            return Number(dec).toString(radix);
        }
    }, {
        key: 'getRandomGenerator',
        value: function getRandomGenerator() {
            return Utils.randomGenerator;
        }
    }, {
        key: 'getRandomVariableName',
        value: function getRandomVariableName() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

            var rangeMinInteger = 10000,
                rangeMaxInteger = 99999999,
                prefix = '_0x';
            return '' + prefix + Utils.decToHex(Utils.getRandomGenerator().integer({
                min: rangeMinInteger,
                max: rangeMaxInteger
            })).substr(0, length);
        }
    }, {
        key: 'isInteger',
        value: function isInteger(number) {
            return number % 1 === 0;
        }
    }, {
        key: 'strEnumify',
        value: function strEnumify(obj) {
            return obj;
        }
    }, {
        key: 'stringToJSFuck',
        value: function stringToJSFuck(string) {
            return Array.from(string).map(function (character) {
                return JSFuck_1.JSFuck[character] || character;
            }).join(' + ');
        }
    }, {
        key: 'stringToUnicode',
        value: function stringToUnicode(string) {
            var radix = 16;
            var prefix = void 0,
                regexp = new RegExp('[\x00-\x7F]'),
                template = void 0;
            return '\'' + string.replace(/[\s\S]/g, function (escape) {
                if (regexp.test(escape)) {
                    prefix = '\\x';
                    template = '0'.repeat(2);
                } else {
                    prefix = '\\u';
                    template = '0'.repeat(4);
                }
                return '' + prefix + (template + escape.charCodeAt(0).toString(radix)).slice(-template.length);
            }) + '\'';
        }
    }]);

    return Utils;
}();

Utils.randomGenerator = new chance_1.Chance();
exports.Utils = Utils;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var escodegen = __webpack_require__(10);
var esprima = __webpack_require__(18);
var estraverse = __webpack_require__(6);
var NodeType_1 = __webpack_require__(5);
var Nodes_1 = __webpack_require__(8);
var Utils_1 = __webpack_require__(0);

var NodeUtils = function () {
    function NodeUtils() {
        _classCallCheck(this, NodeUtils);
    }

    _createClass(NodeUtils, null, [{
        key: 'addXVerbatimPropertyToLiterals',
        value: function addXVerbatimPropertyToLiterals(node) {
            estraverse.replace(node, {
                enter: function enter(node, parentNode) {
                    if (Nodes_1.Nodes.isLiteralNode(node)) {
                        node['x-verbatim-property'] = {
                            content: node.raw,
                            precedence: escodegen.Precedence.Primary
                        };
                    }
                }
            });
        }
    }, {
        key: 'appendNode',
        value: function appendNode(blockScopeBody, node) {
            if (!NodeUtils.validateNode(node)) {
                return;
            }
            blockScopeBody.push(node);
        }
    }, {
        key: 'convertCodeToStructure',
        value: function convertCodeToStructure(code) {
            var structure = esprima.parse(code);
            NodeUtils.addXVerbatimPropertyToLiterals(structure);
            NodeUtils.parentize(structure);
            return NodeUtils.getBlockStatementNodeByIndex(structure);
        }
    }, {
        key: 'getBlockStatementNodeByIndex',
        value: function getBlockStatementNodeByIndex(node) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (Nodes_1.Nodes.isNodeHasBlockStatement(node)) {
                if (node.body[index] === undefined) {
                    throw new ReferenceError('Wrong index `' + index + '`. Block-statement body length is `' + node.body.length + '`');
                }
                return node.body[index];
            }
            throw new TypeError('The specified node have no a block-statement');
        }
    }, {
        key: 'getBlockScopeOfNode',
        value: function getBlockScopeOfNode(node) {
            var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var parentNode = node.parentNode;
            if (!parentNode) {
                throw new ReferenceError('`parentNode` property of given node is `undefined`');
            }
            if (Nodes_1.Nodes.isBlockStatementNode(parentNode)) {
                if (!parentNode.parentNode) {
                    throw new ReferenceError('`parentNode` property of `parentNode` of given node is `undefined`');
                }
                if (!Utils_1.Utils.arrayContains(NodeUtils.nodesWithBlockScope, parentNode.parentNode.type)) {
                    return NodeUtils.getBlockScopeOfNode(parentNode, depth);
                } else if (depth > 0) {
                    return NodeUtils.getBlockScopeOfNode(parentNode, --depth);
                }
                return parentNode;
            }
            if (Nodes_1.Nodes.isProgramNode(parentNode)) {
                return parentNode;
            }
            return NodeUtils.getBlockScopeOfNode(parentNode);
        }
    }, {
        key: 'insertNodeAtIndex',
        value: function insertNodeAtIndex(blockScopeBody, node, index) {
            if (!NodeUtils.validateNode(node)) {
                return;
            }
            blockScopeBody.splice(index, 0, node);
        }
    }, {
        key: 'parentize',
        value: function parentize(node) {
            var isRootNode = true;
            estraverse.replace(node, {
                enter: function enter(node, parentNode) {
                    var value = void 0;
                    if (isRootNode) {
                        if (node.type === NodeType_1.NodeType.Program) {
                            value = node;
                        } else {
                            value = Nodes_1.Nodes.getProgramNode([node]);
                            value['parentNode'] = value;
                        }
                        isRootNode = false;
                    } else {
                        value = parentNode || node;
                    }
                    node['parentNode'] = value;
                    node['obfuscated'] = false;
                }
            });
        }
    }, {
        key: 'prependNode',
        value: function prependNode(blockScopeBody, node) {
            if (!NodeUtils.validateNode(node)) {
                return;
            }
            blockScopeBody.unshift(node);
        }
    }, {
        key: 'validateNode',
        value: function validateNode(node) {
            return !!node && node.hasOwnProperty('type');
        }
    }]);

    return NodeUtils;
}();

NodeUtils.nodesWithBlockScope = [NodeType_1.NodeType.ArrowFunctionExpression, NodeType_1.NodeType.FunctionDeclaration, NodeType_1.NodeType.FunctionExpression, NodeType_1.NodeType.MethodDefinition, NodeType_1.NodeType.Program];
exports.NodeUtils = NodeUtils;

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
"use strict";

(function (AppendState) {
    AppendState[AppendState["AfterObfuscation"] = 0] = "AfterObfuscation";
    AppendState[AppendState["BeforeObfuscation"] = 1] = "BeforeObfuscation";
})(exports.AppendState || (exports.AppendState = {}));
var AppendState = exports.AppendState;

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(options) {
        _classCallCheck(this, Node);

        this.options = options;
    }

    _createClass(Node, [{
        key: "getAppendState",
        value: function getAppendState() {
            return this.appendState;
        }
    }, {
        key: "getNode",
        value: function getNode() {
            return this.getNodeStructure();
        }
    }]);

    return Node;
}();

exports.Node = Node;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSFuck_1 = __webpack_require__(16);
var Nodes_1 = __webpack_require__(8);
var Utils_1 = __webpack_require__(0);

var NodeObfuscator = function () {
    function NodeObfuscator(nodes, options) {
        _classCallCheck(this, NodeObfuscator);

        this.nodes = nodes;
        this.options = options;
    }

    _createClass(NodeObfuscator, [{
        key: "isReservedName",
        value: function isReservedName(name) {
            return this.options.reservedNames.some(function (reservedName) {
                return new RegExp(reservedName, 'g').test(name);
            });
        }
    }, {
        key: "storeIdentifiersNames",
        value: function storeIdentifiersNames(node, namesMap) {
            if (Nodes_1.Nodes.isIdentifierNode(node) && !this.isReservedName(node.name)) {
                namesMap.set(node.name, Utils_1.Utils.getRandomVariableName());
            }
        }
    }, {
        key: "replaceIdentifiersWithRandomNames",
        value: function replaceIdentifiersWithRandomNames(node, parentNode, namesMap) {
            if (Nodes_1.Nodes.isIdentifierNode(node) && namesMap.has(node.name)) {
                var parentNodeIsPropertyNode = Nodes_1.Nodes.isPropertyNode(parentNode) && parentNode.key === node,
                    parentNodeIsMemberExpressionNode = Nodes_1.Nodes.isMemberExpressionNode(parentNode) && parentNode.computed === false && parentNode.property === node;
                if (parentNodeIsPropertyNode || parentNodeIsMemberExpressionNode) {
                    return;
                }
                node.name = namesMap.get(node.name);
            }
        }
    }, {
        key: "replaceLiteralBooleanWithJSFuck",
        value: function replaceLiteralBooleanWithJSFuck(nodeValue) {
            return nodeValue ? JSFuck_1.JSFuck.True : JSFuck_1.JSFuck.False;
        }
    }, {
        key: "replaceLiteralNumberWithHexadecimalValue",
        value: function replaceLiteralNumberWithHexadecimalValue(nodeValue) {
            var prefix = '0x';
            if (!Utils_1.Utils.isInteger(nodeValue)) {
                return String(nodeValue);
            }
            return "" + prefix + Utils_1.Utils.decToHex(nodeValue);
        }
    }, {
        key: "replaceLiteralValueWithUnicodeValue",
        value: function replaceLiteralValueWithUnicodeValue(nodeValue) {
            var replaceWithUnicodeArrayFlag = Math.random() <= this.options.unicodeArrayThreshold;
            if (this.options.encodeUnicodeLiterals && replaceWithUnicodeArrayFlag) {
                nodeValue = Utils_1.Utils.btoa(nodeValue);
            }
            nodeValue = Utils_1.Utils.stringToUnicode(nodeValue);
            if (this.options.unicodeArray && replaceWithUnicodeArrayFlag) {
                return this.replaceLiteralValueWithUnicodeArrayCall(nodeValue);
            }
            return nodeValue;
        }
    }, {
        key: "replaceLiteralValueWithUnicodeArrayCall",
        value: function replaceLiteralValueWithUnicodeArrayCall(value) {
            var unicodeArrayNode = this.nodes.get('unicodeArrayNode');
            if (!unicodeArrayNode) {
                throw new ReferenceError('`unicodeArrayNode` node is not found in Map with custom nodes.');
            }
            var unicodeArray = unicodeArrayNode.getNodeData(),
                valueIndex = unicodeArray.indexOf(value),
                literalValueCallIndex = void 0,
                hexadecimalIndex = void 0;
            if (valueIndex >= 0) {
                literalValueCallIndex = valueIndex;
            } else {
                literalValueCallIndex = unicodeArray.length;
                unicodeArrayNode.updateNodeData(value);
            }
            hexadecimalIndex = this.replaceLiteralNumberWithHexadecimalValue(literalValueCallIndex);
            if (this.options.wrapUnicodeArrayCalls) {
                var unicodeArrayCallsWrapper = this.nodes.get('unicodeArrayCallsWrapper');
                if (!unicodeArrayCallsWrapper) {
                    throw new ReferenceError('`unicodeArrayCallsWrapper` node is not found in Map with custom nodes.');
                }
                return unicodeArrayCallsWrapper.getNodeIdentifier() + "('" + hexadecimalIndex + "')";
            }
            return unicodeArrayNode.getNodeIdentifier() + "[" + hexadecimalIndex + "]";
        }
    }]);

    return NodeObfuscator;
}();

exports.NodeObfuscator = NodeObfuscator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(0);
exports.NodeType = Utils_1.Utils.strEnumify({
    ArrayExpression: 'ArrayExpression',
    ArrowFunctionExpression: 'ArrowFunctionExpression',
    AssignmentExpression: 'AssignmentExpression',
    BinaryExpression: 'BinaryExpression',
    BlockStatement: 'BlockStatement',
    CallExpression: 'CallExpression',
    CatchClause: 'CatchClause',
    ClassDeclaration: 'ClassDeclaration',
    ExpressionStatement: 'ExpressionStatement',
    FunctionDeclaration: 'FunctionDeclaration',
    FunctionExpression: 'FunctionExpression',
    Identifier: 'Identifier',
    IfStatement: 'IfStatement',
    Literal: 'Literal',
    LogicalExpression: 'LogicalExpression',
    MemberExpression: 'MemberExpression',
    MethodDefinition: 'MethodDefinition',
    ObjectExpression: 'ObjectExpression',
    Program: 'Program',
    Property: 'Property',
    ReturnStatement: 'ReturnStatement',
    TryStatement: 'TryStatement',
    UnaryExpression: 'UnaryExpression',
    UpdateExpression: 'UpdateExpression',
    VariableDeclaration: 'VariableDeclaration',
    VariableDeclarator: 'VariableDeclarator',
    WhileStatement: 'WhileStatement'
});

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("estraverse");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("format-unicorn");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NodeType_1 = __webpack_require__(5);

var Nodes = function () {
    function Nodes() {
        _classCallCheck(this, Nodes);
    }

    _createClass(Nodes, null, [{
        key: "getProgramNode",
        value: function getProgramNode(bodyNode) {
            return {
                'type': NodeType_1.NodeType.Program,
                'body': bodyNode,
                'sourceType': 'script',
                'obfuscated': false
            };
        }
    }, {
        key: "isBlockStatementNode",
        value: function isBlockStatementNode(node) {
            return node.type === NodeType_1.NodeType.BlockStatement;
        }
    }, {
        key: "isCallExpressionNode",
        value: function isCallExpressionNode(node) {
            return node.type === NodeType_1.NodeType.CallExpression;
        }
    }, {
        key: "isIdentifierNode",
        value: function isIdentifierNode(node) {
            return node.type === NodeType_1.NodeType.Identifier;
        }
    }, {
        key: "isLiteralNode",
        value: function isLiteralNode(node) {
            return node.type === NodeType_1.NodeType.Literal;
        }
    }, {
        key: "isMemberExpressionNode",
        value: function isMemberExpressionNode(node) {
            return node.type === NodeType_1.NodeType.MemberExpression;
        }
    }, {
        key: "isProgramNode",
        value: function isProgramNode(node) {
            return node.type === NodeType_1.NodeType.Program;
        }
    }, {
        key: "isPropertyNode",
        value: function isPropertyNode(node) {
            return node.type === NodeType_1.NodeType.Property;
        }
    }, {
        key: "isVariableDeclaratorNode",
        value: function isVariableDeclaratorNode(node) {
            return node.type === NodeType_1.NodeType.VariableDeclarator;
        }
    }, {
        key: "isNodeHasBlockStatement",
        value: function isNodeHasBlockStatement(node) {
            return node.hasOwnProperty('body') && Array.isArray(node.body);
        }
    }]);

    return Nodes;
}();

exports.Nodes = Nodes;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JavaScriptObfuscatorCLI_1 = __webpack_require__(24);
var JavaScriptObfuscatorInternal_1 = __webpack_require__(14);

var JavaScriptObfuscator = function () {
    function JavaScriptObfuscator() {
        _classCallCheck(this, JavaScriptObfuscator);
    }

    _createClass(JavaScriptObfuscator, null, [{
        key: "obfuscate",
        value: function obfuscate(sourceCode) {
            var obfuscatorOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var javaScriptObfuscator = new JavaScriptObfuscatorInternal_1.JavaScriptObfuscatorInternal(sourceCode, obfuscatorOptions);
            javaScriptObfuscator.obfuscate();
            return javaScriptObfuscator.getObfuscationResult();
        }
    }, {
        key: "runCLI",
        value: function runCLI(argv) {
            new JavaScriptObfuscatorCLI_1.JavaScriptObfuscatorCLI(argv).run();
        }
    }]);

    return JavaScriptObfuscator;
}();

exports.JavaScriptObfuscator = JavaScriptObfuscator;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("escodegen");

/***/ },
/* 11 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.SourceMapMode = {
    Inline: 'inline',
    Separate: 'separate'
};

/***/ },
/* 12 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NodesGroup = function () {
    function NodesGroup(options) {
        _classCallCheck(this, NodesGroup);

        this.nodes = new Map();
        this.options = options;
    }

    _createClass(NodesGroup, [{
        key: "getNodes",
        value: function getNodes() {
            return this.nodes;
        }
    }]);

    return NodesGroup;
}();

exports.NodesGroup = NodesGroup;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var SourceMapMode_1 = __webpack_require__(11);
exports.NO_CUSTOM_NODES_PRESET = Object.freeze({
    compact: true,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: false,
    encodeUnicodeLiterals: false,
    reservedNames: [],
    rotateUnicodeArray: false,
    selfDefending: false,
    sourceMap: false,
    sourceMapMode: SourceMapMode_1.SourceMapMode.Separate,
    unicodeArray: false,
    unicodeArrayThreshold: 0,
    wrapUnicodeArrayCalls: false
});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var esprima = __webpack_require__(18);
var escodegen = __webpack_require__(10);
var ObfuscationResult_1 = __webpack_require__(15);
var Obfuscator_1 = __webpack_require__(21);
var Options_1 = __webpack_require__(46);
var SourceMapCorrector_1 = __webpack_require__(22);

var JavaScriptObfuscatorInternal = function () {
    function JavaScriptObfuscatorInternal(sourceCode, obfuscatorOptions) {
        _classCallCheck(this, JavaScriptObfuscatorInternal);

        this.sourceMapUrl = '';
        this.sourceCode = sourceCode;
        if (obfuscatorOptions) {
            this.options = new Options_1.Options(obfuscatorOptions);
        }
    }

    _createClass(JavaScriptObfuscatorInternal, [{
        key: 'getObfuscationResult',
        value: function getObfuscationResult() {
            return new SourceMapCorrector_1.SourceMapCorrector(new ObfuscationResult_1.ObfuscationResult(this.generatorOutput.code, this.generatorOutput.map), this.sourceMapUrl, this.options.sourceMapMode).correct();
        }
    }, {
        key: 'obfuscate',
        value: function obfuscate() {
            var astTree = esprima.parse(this.sourceCode, {
                loc: true
            });
            astTree = new Obfuscator_1.Obfuscator(this.options).obfuscateNode(astTree);
            this.generatorOutput = JavaScriptObfuscatorInternal.generateCode(this.sourceCode, astTree, this.options);
        }
    }, {
        key: 'setSourceMapUrl',
        value: function setSourceMapUrl(url) {
            this.sourceMapUrl = url;
        }
    }], [{
        key: 'generateCode',
        value: function generateCode(sourceCode, astTree, options) {
            var escodegenParams = Object.assign({}, JavaScriptObfuscatorInternal.escodegenParams),
                generatorOutput = void 0;
            if (options.sourceMap) {
                escodegenParams.sourceMap = 'sourceMap';
                escodegenParams.sourceContent = sourceCode;
            }
            escodegenParams.format = {
                compact: options.compact
            };
            generatorOutput = escodegen.generate(astTree, escodegenParams);
            generatorOutput.map = generatorOutput.map ? generatorOutput.map.toString() : '';
            return generatorOutput;
        }
    }]);

    return JavaScriptObfuscatorInternal;
}();

JavaScriptObfuscatorInternal.escodegenParams = {
    verbatim: 'x-verbatim-property',
    sourceMapWithCode: true
};
exports.JavaScriptObfuscatorInternal = JavaScriptObfuscatorInternal;

/***/ },
/* 15 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObfuscationResult = function () {
    function ObfuscationResult(obfuscatedCode, sourceMap) {
        _classCallCheck(this, ObfuscationResult);

        this.obfuscatedCode = obfuscatedCode;
        this.sourceMap = sourceMap;
    }

    _createClass(ObfuscationResult, [{
        key: "getObfuscatedCode",
        value: function getObfuscatedCode() {
            return this.obfuscatedCode;
        }
    }, {
        key: "getSourceMap",
        value: function getSourceMap() {
            return this.sourceMap;
        }
    }, {
        key: "toString",
        value: function toString() {
            return this.obfuscatedCode;
        }
    }]);

    return ObfuscationResult;
}();

exports.ObfuscationResult = ObfuscationResult;

/***/ },
/* 16 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.JSFuck = {
    Window: '[]["filter"]["constructor"]("return this")()',
    False: '![]',
    True: '!![]',
    a: '(false+"")[1]',
    b: '([]["entries"]()+"")[2]',
    c: '([]["fill"]+"")[3]',
    d: '(undefined+"")[2]',
    e: '(true+"")[3]',
    f: '(false+"")[0]',
    g: '(false+[0]+String)[20]',
    h: '(+(101))["toString"](21)[1]',
    i: '([false]+undefined)[10]',
    j: '([]["entries"]()+"")[3]',
    k: '(+(20))["toString"](21)',
    l: '(false+"")[2]',
    m: '(Number+"")[11]',
    n: '(undefined+"")[1]',
    o: '(true+[]["fill"])[10]',
    p: '(+(211))["toString"](31)[1]',
    q: '(+(212))["toString"](31)[1]',
    r: '(true+"")[1]',
    s: '(false+"")[3]',
    t: '(true+"")[0]',
    u: '(undefined+"")[0]',
    v: '(+(31))["toString"](32)',
    w: '(+(32))["toString"](33)',
    x: '(+(101))["toString"](34)[1]',
    y: '(NaN+[Infinity])[10]',
    z: '(+(35))["toString"](36)',
    A: '(+[]+Array)[10]',
    B: '(+[]+Boolean)[10]',
    C: 'Function("return escape")()(("")["italics"]())[2]',
    D: 'Function("return escape")()([]["fill"])["slice"]("-1")',
    E: '(RegExp+"")[12]',
    F: '(+[]+Function)[10]',
    G: '(false+Function("return Date")()())[30]',
    H: '\'H\'',
    I: '(Infinity+"")[0]',
    J: '\'J\'',
    K: '\'K\'',
    L: '\'L\'',
    M: '(true+Function("return Date")()())[30]',
    N: '(NaN+"")[0]',
    O: '(NaN+Function("return{}")())[11]',
    P: '\'P\'',
    Q: '\'Q\'',
    R: '(+[]+RegExp)[10]',
    S: '(+[]+String)[10]',
    T: '(NaN+Function("return Date")()())[30]',
    U: '(NaN+Function("return{}")()["toString"]["call"]())[11]',
    V: '\'V\'',
    W: '\'W\'',
    X: '\'X\'',
    Y: '\'Y\'',
    Z: '\'Z\''
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var SourceMapMode_1 = __webpack_require__(11);
exports.DEFAULT_PRESET = Object.freeze({
    compact: true,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: true,
    encodeUnicodeLiterals: false,
    reservedNames: [],
    rotateUnicodeArray: true,
    selfDefending: true,
    sourceMap: false,
    sourceMapMode: SourceMapMode_1.SourceMapMode.Separate,
    unicodeArray: true,
    unicodeArrayThreshold: 0.8,
    wrapUnicodeArrayCalls: true
});

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("esprima");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var estraverse = __webpack_require__(6);
var AppendState_1 = __webpack_require__(2);
var NodeType_1 = __webpack_require__(5);
var CatchClauseObfuscator_1 = __webpack_require__(38);
var ConsoleOutputNodesGroup_1 = __webpack_require__(34);
var DebugProtectionNodesGroup_1 = __webpack_require__(35);
var FunctionDeclarationObfuscator_1 = __webpack_require__(39);
var FunctionObfuscator_1 = __webpack_require__(40);
var LiteralObfuscator_1 = __webpack_require__(41);
var MemberExpressionObfuscator_1 = __webpack_require__(42);
var MethodDefinitionObfuscator_1 = __webpack_require__(43);
var Nodes_1 = __webpack_require__(8);
var NodeUtils_1 = __webpack_require__(1);
var ObjectExpressionObfuscator_1 = __webpack_require__(44);
var SelfDefendingNodesGroup_1 = __webpack_require__(36);
var UnicodeArrayNodesGroup_1 = __webpack_require__(37);
var VariableDeclarationObfuscator_1 = __webpack_require__(45);

var Obfuscator = function () {
    function Obfuscator(options) {
        _classCallCheck(this, Obfuscator);

        this.nodeObfuscators = new Map([[NodeType_1.NodeType.ArrowFunctionExpression, [FunctionObfuscator_1.FunctionObfuscator]], [NodeType_1.NodeType.ClassDeclaration, [FunctionDeclarationObfuscator_1.FunctionDeclarationObfuscator]], [NodeType_1.NodeType.CatchClause, [CatchClauseObfuscator_1.CatchClauseObfuscator]], [NodeType_1.NodeType.FunctionDeclaration, [FunctionDeclarationObfuscator_1.FunctionDeclarationObfuscator, FunctionObfuscator_1.FunctionObfuscator]], [NodeType_1.NodeType.FunctionExpression, [FunctionObfuscator_1.FunctionObfuscator]], [NodeType_1.NodeType.MemberExpression, [MemberExpressionObfuscator_1.MemberExpressionObfuscator]], [NodeType_1.NodeType.MethodDefinition, [MethodDefinitionObfuscator_1.MethodDefinitionObfuscator]], [NodeType_1.NodeType.ObjectExpression, [ObjectExpressionObfuscator_1.ObjectExpressionObfuscator]], [NodeType_1.NodeType.VariableDeclaration, [VariableDeclarationObfuscator_1.VariableDeclarationObfuscator]], [NodeType_1.NodeType.Literal, [LiteralObfuscator_1.LiteralObfuscator]]]);
        this.options = options;
        this.nodes = new Map([].concat(_toConsumableArray(new SelfDefendingNodesGroup_1.SelfDefendingNodesGroup(this.options).getNodes()), _toConsumableArray(new ConsoleOutputNodesGroup_1.ConsoleOutputNodesGroup(this.options).getNodes()), _toConsumableArray(new DebugProtectionNodesGroup_1.DebugProtectionNodesGroup(this.options).getNodes()), _toConsumableArray(new UnicodeArrayNodesGroup_1.UnicodeArrayNodesGroup(this.options).getNodes())));
    }

    _createClass(Obfuscator, [{
        key: 'obfuscateNode',
        value: function obfuscateNode(node) {
            if (Nodes_1.Nodes.isProgramNode(node) && !node.body.length) {
                return node;
            }
            NodeUtils_1.NodeUtils.parentize(node);
            this.beforeObfuscation(node);
            this.obfuscate(node);
            this.afterObfuscation(node);
            return node;
        }
    }, {
        key: 'afterObfuscation',
        value: function afterObfuscation(astTree) {
            this.nodes.forEach(function (node) {
                if (node.getAppendState() === AppendState_1.AppendState.AfterObfuscation) {
                    node.appendNode(astTree);
                }
            });
        }
    }, {
        key: 'beforeObfuscation',
        value: function beforeObfuscation(astTree) {
            this.nodes.forEach(function (node) {
                if (node.getAppendState() === AppendState_1.AppendState.BeforeObfuscation) {
                    node.appendNode(astTree);
                }
            });
        }
    }, {
        key: 'initializeNodeObfuscators',
        value: function initializeNodeObfuscators(node, parentNode) {
            var _this = this;

            var nodeObfuscators = this.nodeObfuscators.get(node.type);
            if (!nodeObfuscators) {
                return;
            }
            nodeObfuscators.forEach(function (obfuscator) {
                new obfuscator(_this.nodes, _this.options).obfuscateNode(node, parentNode);
            });
        }
    }, {
        key: 'obfuscate',
        value: function obfuscate(node) {
            var _this2 = this;

            estraverse.replace(node, {
                enter: function enter(node, parentNode) {
                    _this2.initializeNodeObfuscators(node, parentNode);
                }
            });
        }
    }]);

    return Obfuscator;
}();

exports.Obfuscator = Obfuscator;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SourceMapMode_1 = __webpack_require__(11);
var ObfuscationResult_1 = __webpack_require__(15);
var Utils_1 = __webpack_require__(0);

var SourceMapCorrector = function () {
    function SourceMapCorrector(obfuscationResult, sourceMapUrl, sourceMapMode) {
        _classCallCheck(this, SourceMapCorrector);

        this.obfuscatedCode = obfuscationResult.getObfuscatedCode();
        this.sourceMap = obfuscationResult.getSourceMap();
        this.sourceMapUrl = sourceMapUrl;
        this.sourceMapMode = sourceMapMode;
    }

    _createClass(SourceMapCorrector, [{
        key: "correct",
        value: function correct() {
            return new ObfuscationResult_1.ObfuscationResult(this.correctObfuscatedCode(), this.correctSourceMap());
        }
    }, {
        key: "correctObfuscatedCode",
        value: function correctObfuscatedCode() {
            if (!this.sourceMap) {
                return this.obfuscatedCode;
            }
            var sourceMappingUrl = '//# sourceMappingURL=';
            switch (this.sourceMapMode) {
                case SourceMapMode_1.SourceMapMode.Inline:
                    sourceMappingUrl += "data:application/json;base64," + Utils_1.Utils.btoa(this.sourceMapUrl || this.sourceMap, false);
                    break;
                case SourceMapMode_1.SourceMapMode.Separate:
                default:
                    if (this.sourceMapUrl) {
                        sourceMappingUrl += this.sourceMapUrl;
                        break;
                    }
                    return this.obfuscatedCode;
            }
            return this.obfuscatedCode + "\n" + sourceMappingUrl;
        }
    }, {
        key: "correctSourceMap",
        value: function correctSourceMap() {
            if (this.sourceMapMode === SourceMapMode_1.SourceMapMode.Inline) {
                return '';
            }
            return this.sourceMap;
        }
    }]);

    return SourceMapCorrector;
}();

exports.SourceMapCorrector = SourceMapCorrector;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = __webpack_require__(64);
var mkdirp = __webpack_require__(65);
var path = __webpack_require__(19);
var Utils_1 = __webpack_require__(0);

var CLIUtils = function () {
    function CLIUtils() {
        _classCallCheck(this, CLIUtils);
    }

    _createClass(CLIUtils, null, [{
        key: 'getOutputCodePath',
        value: function getOutputCodePath(outputPath, inputPath) {
            if (outputPath) {
                return outputPath;
            }
            return inputPath.split('.').map(function (value, index) {
                return index === 0 ? value + '-obfuscated' : value;
            }).join('.');
        }
    }, {
        key: 'getOutputSourceMapPath',
        value: function getOutputSourceMapPath(outputCodePath) {
            return outputCodePath.split('.').map(function (value, index, array) {
                return index === array.length - 1 ? value + '.map' : value;
            }).join('.');
        }
    }, {
        key: 'getPackageConfig',
        value: function getPackageConfig() {
            return JSON.parse(fs.readFileSync(path.join(path.dirname(fs.realpathSync(process.argv[1])), '../package.json'), CLIUtils.encoding));
        }
    }, {
        key: 'isFilePath',
        value: function isFilePath(filePath) {
            try {
                return fs.statSync(filePath).isFile();
            } catch (e) {
                return false;
            }
        }
    }, {
        key: 'readFile',
        value: function readFile(inputPath) {
            return fs.readFileSync(inputPath, CLIUtils.encoding);
        }
    }, {
        key: 'validateInputPath',
        value: function validateInputPath(inputPath) {
            if (!CLIUtils.isFilePath(inputPath)) {
                throw new ReferenceError('Given input path must be a valid file path');
            }
            if (!Utils_1.Utils.arrayContains(CLIUtils.availableInputExtensions, path.extname(inputPath))) {
                throw new ReferenceError('Input file must have .js extension');
            }
        }
    }, {
        key: 'writeFile',
        value: function writeFile(outputPath, data) {
            mkdirp.sync(path.dirname(outputPath));
            fs.writeFileSync(outputPath, data, {
                encoding: CLIUtils.encoding
            });
        }
    }]);

    return CLIUtils;
}();

CLIUtils.availableInputExtensions = ['.js'];
CLIUtils.encoding = 'utf8';
exports.CLIUtils = CLIUtils;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var commander = __webpack_require__(63);
var path = __webpack_require__(19);
var SourceMapMode_1 = __webpack_require__(11);
var DefaultPreset_1 = __webpack_require__(17);
var CLIUtils_1 = __webpack_require__(23);
var JavaScriptObfuscator_1 = __webpack_require__(9);
var JavaScriptObfuscatorInternal_1 = __webpack_require__(14);
var Utils_1 = __webpack_require__(0);

var JavaScriptObfuscatorCLI = function () {
    function JavaScriptObfuscatorCLI(argv) {
        _classCallCheck(this, JavaScriptObfuscatorCLI);

        this.data = '';
        this.rawArguments = argv;
        this.arguments = this.rawArguments.slice(2);
    }

    _createClass(JavaScriptObfuscatorCLI, [{
        key: 'run',
        value: function run() {
            this.configureCommands();
            if (!this.arguments.length || Utils_1.Utils.arrayContains(this.arguments, '--help')) {
                this.commands.outputHelp();
                return;
            }
            this.inputPath = this.arguments[0];
            CLIUtils_1.CLIUtils.validateInputPath(this.inputPath);
            this.getData();
            this.processData();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions() {
            var obfuscatorOptions = {},
                availableOptions = Object.keys(DefaultPreset_1.DEFAULT_PRESET);
            for (var option in this.commands) {
                if (!this.commands.hasOwnProperty(option)) {
                    continue;
                }
                if (!Utils_1.Utils.arrayContains(availableOptions, option)) {
                    continue;
                }
                obfuscatorOptions[option] = this.commands[option];
            }
            return Object.assign({}, DefaultPreset_1.DEFAULT_PRESET, obfuscatorOptions);
        }
    }, {
        key: 'configureCommands',
        value: function configureCommands() {
            this.commands = new commander.Command().version(JavaScriptObfuscatorCLI.getBuildVersion(), '-v, --version').usage('<inputPath> [options]').option('-o, --output <path>', 'Output path for obfuscated code').option('--compact <boolean>', 'Disable one line output code compacting', JavaScriptObfuscatorCLI.parseBoolean).option('--debugProtection <boolean>', 'Disable browser Debug panel (can cause DevTools enabled browser freeze)', JavaScriptObfuscatorCLI.parseBoolean).option('--debugProtectionInterval <boolean>', 'Disable browser Debug panel even after page was loaded (can cause DevTools enabled browser freeze)', JavaScriptObfuscatorCLI.parseBoolean).option('--disableConsoleOutput <boolean>', 'Allow console.log, console.info, console.error and console.warn messages output into browser console', JavaScriptObfuscatorCLI.parseBoolean).option('--encodeUnicodeLiterals <boolean>', 'All literals in Unicode array become encoded in Base64 (this option can slightly slow down your code speed)', JavaScriptObfuscatorCLI.parseBoolean).option('--reservedNames <list>', 'Disable obfuscation of variable names, function names and names of function parameters that match the passed RegExp patterns (comma separated)', function (val) {
                return val.split(',');
            }).option('--rotateUnicodeArray <boolean>', 'Disable rotation of unicode array values during obfuscation', JavaScriptObfuscatorCLI.parseBoolean).option('--selfDefending <boolean>', 'Disables self-defending for obfuscated code', JavaScriptObfuscatorCLI.parseBoolean).option('--sourceMap <boolean>', 'Enables source map generation', JavaScriptObfuscatorCLI.parseBoolean).option('--sourceMapMode <string> [inline, separate]', 'Specify source map output mode', JavaScriptObfuscatorCLI.parseSourceMapMode).option('--unicodeArray <boolean>', 'Disables gathering of all literal strings into an array and replacing every literal string with an array call', JavaScriptObfuscatorCLI.parseBoolean).option('--unicodeArrayThreshold <number>', 'The probability that the literal string will be inserted into unicodeArray (Default: 0.8, Min: 0, Max: 1)', parseFloat).option('--wrapUnicodeArrayCalls <boolean>', 'Disables usage of special access function instead of direct array call', JavaScriptObfuscatorCLI.parseBoolean).parse(this.rawArguments);
            this.commands.on('--help', function () {
                console.log('  Examples:\n');
                console.log('    %> javascript-obfuscator in.js --compact true --selfDefending false');
                console.log('    %> javascript-obfuscator in.js --output out.js --compact true --selfDefending false');
                console.log('');
            });
        }
    }, {
        key: 'getData',
        value: function getData() {
            this.data = CLIUtils_1.CLIUtils.readFile(this.inputPath);
        }
    }, {
        key: 'processData',
        value: function processData() {
            var options = this.buildOptions(),
                outputCodePath = CLIUtils_1.CLIUtils.getOutputCodePath(this.commands.output, this.inputPath);
            if (options.sourceMap) {
                this.processDataWithSourceMap(outputCodePath, options);
            } else {
                this.processDataWithoutSourceMap(outputCodePath, options);
            }
        }
    }, {
        key: 'processDataWithoutSourceMap',
        value: function processDataWithoutSourceMap(outputCodePath, options) {
            var obfuscatedCode = JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(this.data, options).getObfuscatedCode();
            CLIUtils_1.CLIUtils.writeFile(outputCodePath, obfuscatedCode);
        }
    }, {
        key: 'processDataWithSourceMap',
        value: function processDataWithSourceMap(outputCodePath, options) {
            var javaScriptObfuscator = new JavaScriptObfuscatorInternal_1.JavaScriptObfuscatorInternal(this.data, options),
                obfuscationResult = void 0,
                outputSourceMapPath = CLIUtils_1.CLIUtils.getOutputSourceMapPath(outputCodePath);
            javaScriptObfuscator.obfuscate();
            if (options.sourceMapMode === SourceMapMode_1.SourceMapMode.Separate) {
                javaScriptObfuscator.setSourceMapUrl(path.basename(outputSourceMapPath));
            }
            obfuscationResult = javaScriptObfuscator.getObfuscationResult();
            CLIUtils_1.CLIUtils.writeFile(outputCodePath, obfuscationResult.getObfuscatedCode());
            if (obfuscationResult.getSourceMap()) {
                CLIUtils_1.CLIUtils.writeFile(outputSourceMapPath, obfuscationResult.getSourceMap());
            }
        }
    }], [{
        key: 'getBuildVersion',
        value: function getBuildVersion() {
            return CLIUtils_1.CLIUtils.getPackageConfig().version;
        }
    }, {
        key: 'parseBoolean',
        value: function parseBoolean(value) {
            return value === 'true' || value === '1';
        }
    }, {
        key: 'parseSourceMapMode',
        value: function parseSourceMapMode(value) {
            var availableMode = Object.keys(SourceMapMode_1.SourceMapMode).some(function (key) {
                return SourceMapMode_1.SourceMapMode[key] === value;
            });
            if (!availableMode) {
                throw new ReferenceError('Invalid value of `--sourceMapMode` option');
            }
            return value;
        }
    }]);

    return JavaScriptObfuscatorCLI;
}();

exports.JavaScriptObfuscatorCLI = JavaScriptObfuscatorCLI;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppendState_1 = __webpack_require__(2);
var ConsoleOutputDisableExpressionTemplate_1 = __webpack_require__(50);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);

var ConsoleOutputDisableExpressionNode = function (_Node_1$Node) {
    _inherits(ConsoleOutputDisableExpressionNode, _Node_1$Node);

    function ConsoleOutputDisableExpressionNode() {
        _classCallCheck(this, ConsoleOutputDisableExpressionNode);

        var _this = _possibleConstructorReturn(this, (ConsoleOutputDisableExpressionNode.__proto__ || Object.getPrototypeOf(ConsoleOutputDisableExpressionNode)).apply(this, arguments));

        _this.appendState = AppendState_1.AppendState.BeforeObfuscation;
        return _this;
    }

    _createClass(ConsoleOutputDisableExpressionNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            NodeUtils_1.NodeUtils.prependNode(blockScopeNode.body, this.getNode());
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(ConsoleOutputDisableExpressionTemplate_1.ConsoleOutputDisableExpressionTemplate());
        }
    }]);

    return ConsoleOutputDisableExpressionNode;
}(Node_1.Node);

exports.ConsoleOutputDisableExpressionNode = ConsoleOutputDisableExpressionNode;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var DebufProtectionFunctionCallTemplate_1 = __webpack_require__(51);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);

var DebugProtectionFunctionCallNode = function (_Node_1$Node) {
    _inherits(DebugProtectionFunctionCallNode, _Node_1$Node);

    function DebugProtectionFunctionCallNode(debugProtectionFunctionName, options) {
        _classCallCheck(this, DebugProtectionFunctionCallNode);

        var _this = _possibleConstructorReturn(this, (DebugProtectionFunctionCallNode.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionCallNode)).call(this, options));

        _this.appendState = AppendState_1.AppendState.BeforeObfuscation;
        _this.debugProtectionFunctionName = debugProtectionFunctionName;
        return _this;
    }

    _createClass(DebugProtectionFunctionCallNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            NodeUtils_1.NodeUtils.appendNode(blockScopeNode.body, this.getNode());
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(DebufProtectionFunctionCallTemplate_1.DebugProtectionFunctionCallTemplate().formatUnicorn({
                debugProtectionFunctionName: this.debugProtectionFunctionName
            }));
        }
    }]);

    return DebugProtectionFunctionCallNode;
}(Node_1.Node);

exports.DebugProtectionFunctionCallNode = DebugProtectionFunctionCallNode;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var DebugProtectionFunctionIntervalTemplate_1 = __webpack_require__(52);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);

var DebugProtectionFunctionIntervalNode = function (_Node_1$Node) {
    _inherits(DebugProtectionFunctionIntervalNode, _Node_1$Node);

    function DebugProtectionFunctionIntervalNode(debugProtectionFunctionName, options) {
        _classCallCheck(this, DebugProtectionFunctionIntervalNode);

        var _this = _possibleConstructorReturn(this, (DebugProtectionFunctionIntervalNode.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionIntervalNode)).call(this, options));

        _this.appendState = AppendState_1.AppendState.BeforeObfuscation;
        _this.debugProtectionFunctionName = debugProtectionFunctionName;
        return _this;
    }

    _createClass(DebugProtectionFunctionIntervalNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            NodeUtils_1.NodeUtils.appendNode(blockScopeNode.body, this.getNode());
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(DebugProtectionFunctionIntervalTemplate_1.DebugProtectionFunctionIntervalTemplate().formatUnicorn({
                debugProtectionFunctionName: this.debugProtectionFunctionName
            }));
        }
    }]);

    return DebugProtectionFunctionIntervalNode;
}(Node_1.Node);

exports.DebugProtectionFunctionIntervalNode = DebugProtectionFunctionIntervalNode;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var DebugProtectionFunctionTemplate_1 = __webpack_require__(53);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(0);

var DebugProtectionFunctionNode = function (_Node_1$Node) {
    _inherits(DebugProtectionFunctionNode, _Node_1$Node);

    function DebugProtectionFunctionNode(debugProtectionFunctionName, options) {
        _classCallCheck(this, DebugProtectionFunctionNode);

        var _this = _possibleConstructorReturn(this, (DebugProtectionFunctionNode.__proto__ || Object.getPrototypeOf(DebugProtectionFunctionNode)).call(this, options));

        _this.appendState = AppendState_1.AppendState.BeforeObfuscation;
        _this.debugProtectionFunctionName = debugProtectionFunctionName;
        return _this;
    }

    _createClass(DebugProtectionFunctionNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            var programBodyLength = blockScopeNode.body.length,
                randomIndex = Utils_1.Utils.getRandomGenerator().integer({
                min: 0,
                max: programBodyLength
            });
            NodeUtils_1.NodeUtils.insertNodeAtIndex(blockScopeNode.body, this.getNode(), randomIndex);
        }
    }, {
        key: "getNodeIdentifier",
        value: function getNodeIdentifier() {
            return this.debugProtectionFunctionName;
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(DebugProtectionFunctionTemplate_1.DebugProtectionFunctionTemplate().formatUnicorn({
                debugProtectionFunctionName: this.debugProtectionFunctionName
            }));
        }
    }]);

    return DebugProtectionFunctionNode;
}(Node_1.Node);

exports.DebugProtectionFunctionNode = DebugProtectionFunctionNode;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppendState_1 = __webpack_require__(2);
var NoCustomNodesPreset_1 = __webpack_require__(13);
var SelfDefendingTemplate_1 = __webpack_require__(54);
var JavaScriptObfuscator_1 = __webpack_require__(9);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(0);

var SelfDefendingUnicodeNode = function (_Node_1$Node) {
    _inherits(SelfDefendingUnicodeNode, _Node_1$Node);

    function SelfDefendingUnicodeNode() {
        _classCallCheck(this, SelfDefendingUnicodeNode);

        var _this = _possibleConstructorReturn(this, (SelfDefendingUnicodeNode.__proto__ || Object.getPrototypeOf(SelfDefendingUnicodeNode)).apply(this, arguments));

        _this.appendState = AppendState_1.AppendState.AfterObfuscation;
        return _this;
    }

    _createClass(SelfDefendingUnicodeNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            var programBodyLength = blockScopeNode.body.length,
                randomIndex = 0;
            if (programBodyLength > 2) {
                randomIndex = Utils_1.Utils.getRandomGenerator().integer({
                    min: programBodyLength / 2,
                    max: programBodyLength - 1
                });
            }
            NodeUtils_1.NodeUtils.insertNodeAtIndex(blockScopeNode.body, this.getNode(), randomIndex);
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(SelfDefendingTemplate_1.SelfDefendingTemplate(), NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET).getObfuscatedCode());
        }
    }]);

    return SelfDefendingUnicodeNode;
}(Node_1.Node);

exports.SelfDefendingUnicodeNode = SelfDefendingUnicodeNode;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var UnicodeArrayCallsWrapperTemplate_1 = __webpack_require__(55);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(0);

var UnicodeArrayCallsWrapper = function (_Node_1$Node) {
    _inherits(UnicodeArrayCallsWrapper, _Node_1$Node);

    function UnicodeArrayCallsWrapper(unicodeArrayCallsWrapperName, unicodeArrayName, unicodeArray, options) {
        _classCallCheck(this, UnicodeArrayCallsWrapper);

        var _this = _possibleConstructorReturn(this, (UnicodeArrayCallsWrapper.__proto__ || Object.getPrototypeOf(UnicodeArrayCallsWrapper)).call(this, options));

        _this.appendState = AppendState_1.AppendState.AfterObfuscation;
        _this.unicodeArrayCallsWrapperName = unicodeArrayCallsWrapperName;
        _this.unicodeArrayName = unicodeArrayName;
        _this.unicodeArray = unicodeArray;
        return _this;
    }

    _createClass(UnicodeArrayCallsWrapper, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            if (!this.unicodeArray.length) {
                return;
            }
            NodeUtils_1.NodeUtils.insertNodeAtIndex(blockScopeNode.body, this.getNode(), 1);
        }
    }, {
        key: "getNodeIdentifier",
        value: function getNodeIdentifier() {
            return this.unicodeArrayCallsWrapperName;
        }
    }, {
        key: "getNode",
        value: function getNode() {
            return _get(UnicodeArrayCallsWrapper.prototype.__proto__ || Object.getPrototypeOf(UnicodeArrayCallsWrapper.prototype), "getNode", this).call(this);
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            var keyName = Utils_1.Utils.getRandomVariableName();
            return NodeUtils_1.NodeUtils.convertCodeToStructure(UnicodeArrayCallsWrapperTemplate_1.UnicodeArrayCallsWrapperTemplate().formatUnicorn({
                keyName: keyName,
                unicodeArrayCallsWrapperName: this.unicodeArrayCallsWrapperName,
                unicodeArrayName: this.unicodeArrayName
            }));
        }
    }]);

    return UnicodeArrayCallsWrapper;
}(Node_1.Node);

exports.UnicodeArrayCallsWrapper = UnicodeArrayCallsWrapper;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var NoCustomNodesPreset_1 = __webpack_require__(13);
var AtobTemplate_1 = __webpack_require__(49);
var SelfDefendingTemplate_1 = __webpack_require__(56);
var UnicodeArrayDecodeTemplate_1 = __webpack_require__(57);
var JavaScriptObfuscator_1 = __webpack_require__(9);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);

var UnicodeArrayDecodeNode = function (_Node_1$Node) {
    _inherits(UnicodeArrayDecodeNode, _Node_1$Node);

    function UnicodeArrayDecodeNode(unicodeArrayName, unicodeArray, options) {
        _classCallCheck(this, UnicodeArrayDecodeNode);

        var _this = _possibleConstructorReturn(this, (UnicodeArrayDecodeNode.__proto__ || Object.getPrototypeOf(UnicodeArrayDecodeNode)).call(this, options));

        _this.appendState = AppendState_1.AppendState.AfterObfuscation;
        _this.unicodeArrayName = unicodeArrayName;
        _this.unicodeArray = unicodeArray;
        return _this;
    }

    _createClass(UnicodeArrayDecodeNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            if (!this.unicodeArray.length) {
                return;
            }
            NodeUtils_1.NodeUtils.insertNodeAtIndex(blockScopeNode.body, this.getNode(), 1);
        }
    }, {
        key: "getNode",
        value: function getNode() {
            return _get(UnicodeArrayDecodeNode.prototype.__proto__ || Object.getPrototypeOf(UnicodeArrayDecodeNode.prototype), "getNode", this).call(this);
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            var forLoopFunctionName = 'forLoopFunc';
            var code = void 0;
            if (this.options.selfDefending) {
                code = SelfDefendingTemplate_1.SelfDefendingTemplate().formatUnicorn({
                    forLoopFunctionName: forLoopFunctionName,
                    unicodeArrayName: this.unicodeArrayName
                });
            } else {
                code = forLoopFunctionName + "();";
            }
            return NodeUtils_1.NodeUtils.convertCodeToStructure(JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(UnicodeArrayDecodeTemplate_1.UnicodeArrayDecodeTemplate().formatUnicorn({
                atobPolyfill: AtobTemplate_1.AtobTemplate(),
                code: code,
                forLoopFunctionName: forLoopFunctionName,
                unicodeArrayName: this.unicodeArrayName
            }), NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET).getObfuscatedCode());
        }
    }]);

    return UnicodeArrayDecodeNode;
}(Node_1.Node);

exports.UnicodeArrayDecodeNode = UnicodeArrayDecodeNode;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var UnicodeArrayTemplate_1 = __webpack_require__(58);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(0);

var UnicodeArrayNode = function (_Node_1$Node) {
    _inherits(UnicodeArrayNode, _Node_1$Node);

    function UnicodeArrayNode(unicodeArrayName) {
        var unicodeArrayRotateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var options = arguments[2];

        _classCallCheck(this, UnicodeArrayNode);

        var _this = _possibleConstructorReturn(this, (UnicodeArrayNode.__proto__ || Object.getPrototypeOf(UnicodeArrayNode)).call(this, options));

        _this.appendState = AppendState_1.AppendState.AfterObfuscation;
        _this.unicodeArray = [];
        _this.unicodeArrayName = unicodeArrayName;
        _this.unicodeArrayRotateValue = unicodeArrayRotateValue;
        return _this;
    }

    _createClass(UnicodeArrayNode, [{
        key: 'appendNode',
        value: function appendNode(blockScopeNode) {
            if (!this.unicodeArray.length) {
                return;
            }
            NodeUtils_1.NodeUtils.prependNode(blockScopeNode.body, this.getNode());
        }
    }, {
        key: 'getNodeIdentifier',
        value: function getNodeIdentifier() {
            return this.unicodeArrayName;
        }
    }, {
        key: 'getNodeData',
        value: function getNodeData() {
            return this.unicodeArray;
        }
    }, {
        key: 'getNode',
        value: function getNode() {
            Utils_1.Utils.arrayRotate(this.unicodeArray, this.unicodeArrayRotateValue);
            return _get(UnicodeArrayNode.prototype.__proto__ || Object.getPrototypeOf(UnicodeArrayNode.prototype), 'getNode', this).call(this);
        }
    }, {
        key: 'updateNodeData',
        value: function updateNodeData(data) {
            this.unicodeArray.push(data);
        }
    }, {
        key: 'getNodeStructure',
        value: function getNodeStructure() {
            return NodeUtils_1.NodeUtils.convertCodeToStructure(UnicodeArrayTemplate_1.UnicodeArrayTemplate().formatUnicorn({
                unicodeArrayName: this.unicodeArrayName,
                unicodeArray: this.unicodeArray.join(',')
            }));
        }
    }]);

    return UnicodeArrayNode;
}(Node_1.Node);

UnicodeArrayNode.UNICODE_ARRAY_RANDOM_LENGTH = 4;
exports.UnicodeArrayNode = UnicodeArrayNode;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);
var AppendState_1 = __webpack_require__(2);
var NoCustomNodesPreset_1 = __webpack_require__(13);
var SelfDefendingTemplate_1 = __webpack_require__(59);
var UnicodeArrayRotateFunctionTemplate_1 = __webpack_require__(60);
var JavaScriptObfuscator_1 = __webpack_require__(9);
var Node_1 = __webpack_require__(3);
var NodeUtils_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(0);

var UnicodeArrayRotateFunctionNode = function (_Node_1$Node) {
    _inherits(UnicodeArrayRotateFunctionNode, _Node_1$Node);

    function UnicodeArrayRotateFunctionNode(unicodeArrayName, unicodeArray, unicodeArrayRotateValue, options) {
        _classCallCheck(this, UnicodeArrayRotateFunctionNode);

        var _this = _possibleConstructorReturn(this, (UnicodeArrayRotateFunctionNode.__proto__ || Object.getPrototypeOf(UnicodeArrayRotateFunctionNode)).call(this, options));

        _this.appendState = AppendState_1.AppendState.AfterObfuscation;
        _this.unicodeArrayName = unicodeArrayName;
        _this.unicodeArray = unicodeArray;
        _this.unicodeArrayRotateValue = unicodeArrayRotateValue;
        return _this;
    }

    _createClass(UnicodeArrayRotateFunctionNode, [{
        key: "appendNode",
        value: function appendNode(blockScopeNode) {
            if (!this.unicodeArray.length) {
                return;
            }
            NodeUtils_1.NodeUtils.insertNodeAtIndex(blockScopeNode.body, this.getNode(), 1);
        }
    }, {
        key: "getNode",
        value: function getNode() {
            return _get(UnicodeArrayRotateFunctionNode.prototype.__proto__ || Object.getPrototypeOf(UnicodeArrayRotateFunctionNode.prototype), "getNode", this).call(this);
        }
    }, {
        key: "getNodeStructure",
        value: function getNodeStructure() {
            var code = '',
                timesName = Utils_1.Utils.getRandomVariableName(),
                whileFunctionName = Utils_1.Utils.getRandomVariableName();
            if (this.options.selfDefending) {
                code = SelfDefendingTemplate_1.SelfDefendingTemplate().formatUnicorn({
                    timesName: timesName,
                    whileFunctionName: whileFunctionName
                });
            } else {
                code = whileFunctionName + "(++" + timesName + ")";
            }
            return NodeUtils_1.NodeUtils.convertCodeToStructure(JavaScriptObfuscator_1.JavaScriptObfuscator.obfuscate(UnicodeArrayRotateFunctionTemplate_1.UnicodeArrayRotateFunctionTemplate().formatUnicorn({
                code: code,
                timesName: timesName,
                unicodeArrayName: this.unicodeArrayName,
                unicodeArrayRotateValue: Utils_1.Utils.decToHex(this.unicodeArrayRotateValue),
                whileFunctionName: whileFunctionName
            }), NoCustomNodesPreset_1.NO_CUSTOM_NODES_PRESET).getObfuscatedCode());
        }
    }]);

    return UnicodeArrayRotateFunctionNode;
}(Node_1.Node);

exports.UnicodeArrayRotateFunctionNode = UnicodeArrayRotateFunctionNode;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConsoleOutputDisableExpressionNode_1 = __webpack_require__(25);
var NodesGroup_1 = __webpack_require__(12);

var ConsoleOutputNodesGroup = function (_NodesGroup_1$NodesGr) {
    _inherits(ConsoleOutputNodesGroup, _NodesGroup_1$NodesGr);

    function ConsoleOutputNodesGroup(options) {
        _classCallCheck(this, ConsoleOutputNodesGroup);

        var _this = _possibleConstructorReturn(this, (ConsoleOutputNodesGroup.__proto__ || Object.getPrototypeOf(ConsoleOutputNodesGroup)).call(this, options));

        if (!_this.options.disableConsoleOutput) {
            return _possibleConstructorReturn(_this);
        }
        _this.nodes.set('consoleOutputDisableExpressionNode', new ConsoleOutputDisableExpressionNode_1.ConsoleOutputDisableExpressionNode(_this.options));
        return _this;
    }

    return ConsoleOutputNodesGroup;
}(NodesGroup_1.NodesGroup);

exports.ConsoleOutputNodesGroup = ConsoleOutputNodesGroup;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugProtectionFunctionCallNode_1 = __webpack_require__(26);
var DebugProtectionFunctionIntervalNode_1 = __webpack_require__(27);
var DebugProtectionFunctionNode_1 = __webpack_require__(28);
var NodesGroup_1 = __webpack_require__(12);
var Utils_1 = __webpack_require__(0);

var DebugProtectionNodesGroup = function (_NodesGroup_1$NodesGr) {
    _inherits(DebugProtectionNodesGroup, _NodesGroup_1$NodesGr);

    function DebugProtectionNodesGroup(options) {
        _classCallCheck(this, DebugProtectionNodesGroup);

        var _this = _possibleConstructorReturn(this, (DebugProtectionNodesGroup.__proto__ || Object.getPrototypeOf(DebugProtectionNodesGroup)).call(this, options));

        _this.debugProtectionFunctionIdentifier = Utils_1.Utils.getRandomVariableName();
        if (!_this.options.debugProtection) {
            return _possibleConstructorReturn(_this);
        }
        _this.nodes.set('debugProtectionFunctionNode', new DebugProtectionFunctionNode_1.DebugProtectionFunctionNode(_this.debugProtectionFunctionIdentifier, _this.options));
        _this.nodes.set('debugProtectionFunctionCallNode', new DebugProtectionFunctionCallNode_1.DebugProtectionFunctionCallNode(_this.debugProtectionFunctionIdentifier, _this.options));
        if (_this.options.debugProtectionInterval) {
            _this.nodes.set('debugProtectionFunctionIntervalNode', new DebugProtectionFunctionIntervalNode_1.DebugProtectionFunctionIntervalNode(_this.debugProtectionFunctionIdentifier, _this.options));
        }
        return _this;
    }

    return DebugProtectionNodesGroup;
}(NodesGroup_1.NodesGroup);

exports.DebugProtectionNodesGroup = DebugProtectionNodesGroup;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodesGroup_1 = __webpack_require__(12);
var SelfDefendingUnicodeNode_1 = __webpack_require__(29);

var SelfDefendingNodesGroup = function (_NodesGroup_1$NodesGr) {
    _inherits(SelfDefendingNodesGroup, _NodesGroup_1$NodesGr);

    function SelfDefendingNodesGroup(options) {
        _classCallCheck(this, SelfDefendingNodesGroup);

        var _this = _possibleConstructorReturn(this, (SelfDefendingNodesGroup.__proto__ || Object.getPrototypeOf(SelfDefendingNodesGroup)).call(this, options));

        if (!_this.options.selfDefending) {
            return _possibleConstructorReturn(_this);
        }
        _this.nodes.set('selfDefendingUnicodeNode', new SelfDefendingUnicodeNode_1.SelfDefendingUnicodeNode(_this.options));
        return _this;
    }

    return SelfDefendingNodesGroup;
}(NodesGroup_1.NodesGroup);

exports.SelfDefendingNodesGroup = SelfDefendingNodesGroup;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodesGroup_1 = __webpack_require__(12);
var UnicodeArrayCallsWrapper_1 = __webpack_require__(30);
var UnicodeArrayDecodeNode_1 = __webpack_require__(31);
var UnicodeArrayNode_1 = __webpack_require__(32);
var UnicodeArrayRotateFunctionNode_1 = __webpack_require__(33);
var Utils_1 = __webpack_require__(0);

var UnicodeArrayNodesGroup = function (_NodesGroup_1$NodesGr) {
    _inherits(UnicodeArrayNodesGroup, _NodesGroup_1$NodesGr);

    function UnicodeArrayNodesGroup(options) {
        _classCallCheck(this, UnicodeArrayNodesGroup);

        var _this = _possibleConstructorReturn(this, (UnicodeArrayNodesGroup.__proto__ || Object.getPrototypeOf(UnicodeArrayNodesGroup)).call(this, options));

        _this.unicodeArrayName = Utils_1.Utils.getRandomVariableName(UnicodeArrayNode_1.UnicodeArrayNode.UNICODE_ARRAY_RANDOM_LENGTH);
        _this.unicodeArrayTranslatorName = Utils_1.Utils.getRandomVariableName(UnicodeArrayNode_1.UnicodeArrayNode.UNICODE_ARRAY_RANDOM_LENGTH);
        if (!_this.options.unicodeArray) {
            return _possibleConstructorReturn(_this);
        }
        if (_this.options.rotateUnicodeArray) {
            _this.unicodeArrayRotateValue = Utils_1.Utils.getRandomGenerator().integer({
                min: 100,
                max: 500
            });
        } else {
            _this.unicodeArrayRotateValue = 0;
        }
        var unicodeArrayNode = new UnicodeArrayNode_1.UnicodeArrayNode(_this.unicodeArrayName, _this.unicodeArrayRotateValue, _this.options),
            unicodeArray = unicodeArrayNode.getNodeData();
        _this.nodes.set('unicodeArrayNode', unicodeArrayNode);
        if (_this.options.wrapUnicodeArrayCalls) {
            _this.nodes.set('unicodeArrayCallsWrapper', new UnicodeArrayCallsWrapper_1.UnicodeArrayCallsWrapper(_this.unicodeArrayTranslatorName, _this.unicodeArrayName, unicodeArray, _this.options));
        }
        if (_this.options.encodeUnicodeLiterals) {
            _this.nodes.set('unicodeArrayDecodeNode', new UnicodeArrayDecodeNode_1.UnicodeArrayDecodeNode(_this.unicodeArrayName, unicodeArray, _this.options));
        }
        if (_this.options.rotateUnicodeArray) {
            _this.nodes.set('unicodeArrayRotateFunctionNode', new UnicodeArrayRotateFunctionNode_1.UnicodeArrayRotateFunctionNode(_this.unicodeArrayName, unicodeArray, _this.unicodeArrayRotateValue, _this.options));
        }
        return _this;
    }

    return UnicodeArrayNodesGroup;
}(NodesGroup_1.NodesGroup);

exports.UnicodeArrayNodesGroup = UnicodeArrayNodesGroup;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var estraverse = __webpack_require__(6);
var NodeObfuscator_1 = __webpack_require__(4);

var CatchClauseObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(CatchClauseObfuscator, _NodeObfuscator_1$Nod);

    function CatchClauseObfuscator() {
        _classCallCheck(this, CatchClauseObfuscator);

        var _this = _possibleConstructorReturn(this, (CatchClauseObfuscator.__proto__ || Object.getPrototypeOf(CatchClauseObfuscator)).apply(this, arguments));

        _this.catchClauseParam = new Map();
        return _this;
    }

    _createClass(CatchClauseObfuscator, [{
        key: 'obfuscateNode',
        value: function obfuscateNode(catchClauseNode) {
            this.storeCatchClauseParam(catchClauseNode);
            this.replaceCatchClauseParam(catchClauseNode);
        }
    }, {
        key: 'storeCatchClauseParam',
        value: function storeCatchClauseParam(catchClauseNode) {
            var _this2 = this;

            estraverse.traverse(catchClauseNode.param, {
                enter: function enter(node) {
                    return _this2.storeIdentifiersNames(node, _this2.catchClauseParam);
                }
            });
        }
    }, {
        key: 'replaceCatchClauseParam',
        value: function replaceCatchClauseParam(catchClauseNode) {
            var _this3 = this;

            estraverse.replace(catchClauseNode, {
                enter: function enter(node, parentNode) {
                    _this3.replaceIdentifiersWithRandomNames(node, parentNode, _this3.catchClauseParam);
                }
            });
        }
    }]);

    return CatchClauseObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.CatchClauseObfuscator = CatchClauseObfuscator;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var estraverse = __webpack_require__(6);
var NodeType_1 = __webpack_require__(5);
var NodeObfuscator_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(1);

var FunctionDeclarationObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(FunctionDeclarationObfuscator, _NodeObfuscator_1$Nod);

    function FunctionDeclarationObfuscator() {
        _classCallCheck(this, FunctionDeclarationObfuscator);

        var _this = _possibleConstructorReturn(this, (FunctionDeclarationObfuscator.__proto__ || Object.getPrototypeOf(FunctionDeclarationObfuscator)).apply(this, arguments));

        _this.functionName = new Map();
        return _this;
    }

    _createClass(FunctionDeclarationObfuscator, [{
        key: "obfuscateNode",
        value: function obfuscateNode(functionDeclarationNode, parentNode) {
            if (parentNode.type === NodeType_1.NodeType.Program) {
                return;
            }
            this.storeFunctionName(functionDeclarationNode);
            this.replaceFunctionName(functionDeclarationNode);
        }
    }, {
        key: "storeFunctionName",
        value: function storeFunctionName(functionDeclarationNode) {
            var _this2 = this;

            estraverse.traverse(functionDeclarationNode.id, {
                enter: function enter(node) {
                    return _this2.storeIdentifiersNames(node, _this2.functionName);
                }
            });
        }
    }, {
        key: "replaceFunctionName",
        value: function replaceFunctionName(functionDeclarationNode) {
            var _this3 = this;

            var scopeNode = NodeUtils_1.NodeUtils.getBlockScopeOfNode(functionDeclarationNode);
            estraverse.replace(scopeNode, {
                enter: function enter(node, parentNode) {
                    _this3.replaceIdentifiersWithRandomNames(node, parentNode, _this3.functionName);
                }
            });
        }
    }]);

    return FunctionDeclarationObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.FunctionDeclarationObfuscator = FunctionDeclarationObfuscator;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var estraverse = __webpack_require__(6);
var NodeObfuscator_1 = __webpack_require__(4);
var Nodes_1 = __webpack_require__(8);

var FunctionObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(FunctionObfuscator, _NodeObfuscator_1$Nod);

    function FunctionObfuscator() {
        _classCallCheck(this, FunctionObfuscator);

        var _this = _possibleConstructorReturn(this, (FunctionObfuscator.__proto__ || Object.getPrototypeOf(FunctionObfuscator)).apply(this, arguments));

        _this.functionParams = new Map();
        return _this;
    }

    _createClass(FunctionObfuscator, [{
        key: 'obfuscateNode',
        value: function obfuscateNode(functionNode) {
            this.storeFunctionParams(functionNode);
            this.replaceFunctionParams(functionNode);
        }
    }, {
        key: 'storeFunctionParams',
        value: function storeFunctionParams(functionNode) {
            var _this2 = this;

            functionNode.params.forEach(function (paramsNode) {
                estraverse.traverse(paramsNode, {
                    enter: function enter(node) {
                        return _this2.storeIdentifiersNames(node, _this2.functionParams);
                    }
                });
            });
        }
    }, {
        key: 'replaceFunctionParams',
        value: function replaceFunctionParams(functionNode) {
            var _this3 = this;

            var replaceVisitor = {
                enter: function enter(node, parentNode) {
                    var newNodeName = '';
                    if (Nodes_1.Nodes.isIdentifierNode(node)) {
                        newNodeName = node.name;
                    }
                    _this3.replaceIdentifiersWithRandomNames(node, parentNode, _this3.functionParams);
                    if (Nodes_1.Nodes.isIdentifierNode(node)) {
                        if (node.name !== newNodeName) {
                            node.obfuscated = true;
                        }
                    }
                }
            };
            functionNode.params.forEach(function (paramsNode) {
                estraverse.replace(paramsNode, replaceVisitor);
            });
            estraverse.replace(functionNode.body, replaceVisitor);
        }
    }]);

    return FunctionObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.FunctionObfuscator = FunctionObfuscator;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escodegen = __webpack_require__(10);
var NodeObfuscator_1 = __webpack_require__(4);
var Nodes_1 = __webpack_require__(8);

var LiteralObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(LiteralObfuscator, _NodeObfuscator_1$Nod);

    function LiteralObfuscator() {
        _classCallCheck(this, LiteralObfuscator);

        return _possibleConstructorReturn(this, (LiteralObfuscator.__proto__ || Object.getPrototypeOf(LiteralObfuscator)).apply(this, arguments));
    }

    _createClass(LiteralObfuscator, [{
        key: 'obfuscateNode',
        value: function obfuscateNode(literalNode, parentNode) {
            if (Nodes_1.Nodes.isPropertyNode(parentNode) && parentNode.key === literalNode) {
                return;
            }
            if (literalNode['x-verbatim-property']) {
                return;
            }
            var content = void 0;
            switch (_typeof(literalNode.value)) {
                case 'boolean':
                    content = this.replaceLiteralBooleanWithJSFuck(literalNode.value);
                    break;
                case 'number':
                    content = this.replaceLiteralNumberWithHexadecimalValue(literalNode.value);
                    break;
                case 'string':
                    content = this.replaceLiteralValueWithUnicodeValue(literalNode.value);
                    break;
                default:
                    return;
            }
            literalNode['x-verbatim-property'] = {
                content: content,
                precedence: escodegen.Precedence.Primary
            };
        }
    }]);

    return LiteralObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.LiteralObfuscator = LiteralObfuscator;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escodegen = __webpack_require__(10);
var NodeType_1 = __webpack_require__(5);
var NodeObfuscator_1 = __webpack_require__(4);

var MemberExpressionObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(MemberExpressionObfuscator, _NodeObfuscator_1$Nod);

    function MemberExpressionObfuscator() {
        _classCallCheck(this, MemberExpressionObfuscator);

        return _possibleConstructorReturn(this, (MemberExpressionObfuscator.__proto__ || Object.getPrototypeOf(MemberExpressionObfuscator)).apply(this, arguments));
    }

    _createClass(MemberExpressionObfuscator, [{
        key: "obfuscateNode",
        value: function obfuscateNode(memberExpressionNode) {}
    }, {
        key: "obfuscateIdentifierProperty",
        value: function obfuscateIdentifierProperty(node) {
            var nodeValue = node.name,
                literalNode = {
                raw: "'" + nodeValue + "'",
                'x-verbatim-property': {
                    content: this.replaceLiteralValueWithUnicodeValue(nodeValue),
                    precedence: escodegen.Precedence.Primary
                },
                type: NodeType_1.NodeType.Literal,
                value: nodeValue
            };
            delete node.name;
            Object.assign(node, literalNode);
        }
    }, {
        key: "obfuscateLiteralProperty",
        value: function obfuscateLiteralProperty(node) {
            if (typeof node.value === 'string' && !node['x-verbatim-property']) {
                node['x-verbatim-property'] = {
                    content: this.replaceLiteralValueWithUnicodeValue(node.value),
                    precedence: escodegen.Precedence.Primary
                };
            }
        }
    }]);

    return MemberExpressionObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.MemberExpressionObfuscator = MemberExpressionObfuscator;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var estraverse = __webpack_require__(6);
var NodeObfuscator_1 = __webpack_require__(4);
var Nodes_1 = __webpack_require__(8);
var Utils_1 = __webpack_require__(0);

var MethodDefinitionObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(MethodDefinitionObfuscator, _NodeObfuscator_1$Nod);

    function MethodDefinitionObfuscator() {
        _classCallCheck(this, MethodDefinitionObfuscator);

        var _this = _possibleConstructorReturn(this, (MethodDefinitionObfuscator.__proto__ || Object.getPrototypeOf(MethodDefinitionObfuscator)).apply(this, arguments));

        _this.ignoredNames = ['constructor'];
        return _this;
    }

    _createClass(MethodDefinitionObfuscator, [{
        key: 'obfuscateNode',
        value: function obfuscateNode(methodDefinitionNode, parentNode) {
            this.replaceMethodName(methodDefinitionNode);
        }
    }, {
        key: 'replaceMethodName',
        value: function replaceMethodName(methodDefinitionNode) {
            var _this2 = this;

            estraverse.replace(methodDefinitionNode.key, {
                leave: function leave(node) {
                    if (Nodes_1.Nodes.isIdentifierNode(node) && !Utils_1.Utils.arrayContains(_this2.ignoredNames, node.name) && methodDefinitionNode.computed === false) {
                        methodDefinitionNode.computed = true;
                        node.name = _this2.replaceLiteralValueWithUnicodeValue(node.name);
                        return;
                    }
                    return estraverse.VisitorOption.Skip;
                }
            });
        }
    }]);

    return MethodDefinitionObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.MethodDefinitionObfuscator = MethodDefinitionObfuscator;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escodegen = __webpack_require__(10);
var NodeType_1 = __webpack_require__(5);
var NodeObfuscator_1 = __webpack_require__(4);
var Utils_1 = __webpack_require__(0);

var ObjectExpressionObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(ObjectExpressionObfuscator, _NodeObfuscator_1$Nod);

    function ObjectExpressionObfuscator() {
        _classCallCheck(this, ObjectExpressionObfuscator);

        return _possibleConstructorReturn(this, (ObjectExpressionObfuscator.__proto__ || Object.getPrototypeOf(ObjectExpressionObfuscator)).apply(this, arguments));
    }

    _createClass(ObjectExpressionObfuscator, [{
        key: "obfuscateNode",
        value: function obfuscateNode(objectExpressionNode) {}
    }, {
        key: "obfuscateLiteralPropertyKey",
        value: function obfuscateLiteralPropertyKey(node) {
            if (typeof node.value === 'string' && !node['x-verbatim-property']) {
                node['x-verbatim-property'] = {
                    content: Utils_1.Utils.stringToUnicode(node.value),
                    precedence: escodegen.Precedence.Primary
                };
            }
        }
    }, {
        key: "obfuscateIdentifierPropertyKey",
        value: function obfuscateIdentifierPropertyKey(node) {
            var nodeValue = node.name,
                literalNode = {
                raw: "'" + nodeValue + "'",
                'x-verbatim-property': {
                    content: Utils_1.Utils.stringToUnicode(nodeValue),
                    precedence: escodegen.Precedence.Primary
                },
                type: NodeType_1.NodeType.Literal,
                value: nodeValue
            };
            delete node.name;
            Object.assign(node, literalNode);
        }
    }]);

    return ObjectExpressionObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.ObjectExpressionObfuscator = ObjectExpressionObfuscator;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var estraverse = __webpack_require__(6);
var NodeType_1 = __webpack_require__(5);
var NodeObfuscator_1 = __webpack_require__(4);
var NodeUtils_1 = __webpack_require__(1);

var VariableDeclarationObfuscator = function (_NodeObfuscator_1$Nod) {
    _inherits(VariableDeclarationObfuscator, _NodeObfuscator_1$Nod);

    function VariableDeclarationObfuscator() {
        _classCallCheck(this, VariableDeclarationObfuscator);

        var _this = _possibleConstructorReturn(this, (VariableDeclarationObfuscator.__proto__ || Object.getPrototypeOf(VariableDeclarationObfuscator)).apply(this, arguments));

        _this.variableNames = new Map();
        return _this;
    }

    _createClass(VariableDeclarationObfuscator, [{
        key: "obfuscateNode",
        value: function obfuscateNode(variableDeclarationNode, parentNode) {
            if (parentNode.type === NodeType_1.NodeType.Program) {
                return;
            }
            this.storeVariableNames(variableDeclarationNode);
            this.replaceVariableNames(variableDeclarationNode, parentNode);
        }
    }, {
        key: "storeVariableNames",
        value: function storeVariableNames(variableDeclarationNode) {
            var _this2 = this;

            variableDeclarationNode.declarations.forEach(function (declarationNode) {
                estraverse.traverse(declarationNode.id, {
                    enter: function enter(node) {
                        return _this2.storeIdentifiersNames(node, _this2.variableNames);
                    }
                });
            });
        }
    }, {
        key: "replaceVariableNames",
        value: function replaceVariableNames(variableDeclarationNode, variableParentNode) {
            var _this3 = this;

            var scopeNode = variableDeclarationNode.kind === 'var' ? NodeUtils_1.NodeUtils.getBlockScopeOfNode(variableDeclarationNode) : variableParentNode;
            estraverse.replace(scopeNode, {
                enter: function enter(node, parentNode) {
                    if (!node.obfuscated) {
                        _this3.replaceIdentifiersWithRandomNames(node, parentNode, _this3.variableNames);
                    }
                }
            });
        }
    }]);

    return VariableDeclarationObfuscator;
}(NodeObfuscator_1.NodeObfuscator);

exports.VariableDeclarationObfuscator = VariableDeclarationObfuscator;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var class_validator_1 = __webpack_require__(62);
var DefaultPreset_1 = __webpack_require__(17);
var OptionsNormalizer_1 = __webpack_require__(47);
var ValidationErrorsFormatter_1 = __webpack_require__(48);

var Options = function Options(obfuscatorOptions) {
    _classCallCheck(this, Options);

    Object.assign(this, DefaultPreset_1.DEFAULT_PRESET, obfuscatorOptions);
    var errors = class_validator_1.validateSync(this, Options.validatorOptions);
    if (errors.length) {
        throw new ReferenceError("Validation failed. errors:\n" + ValidationErrorsFormatter_1.ValidationErrorsFormatter.format(errors));
    }
    Object.assign(this, OptionsNormalizer_1.OptionsNormalizer.normalizeOptions(this));
};

Options.validatorOptions = {
    validationError: {
        target: false
    }
};
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "compact", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "debugProtection", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "debugProtectionInterval", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "disableConsoleOutput", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "encodeUnicodeLiterals", void 0);
__decorate([class_validator_1.IsString({
    each: true
}), __metadata('design:type', Array)], Options.prototype, "reservedNames", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "rotateUnicodeArray", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "selfDefending", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "sourceMap", void 0);
__decorate([class_validator_1.IsIn(['inline', 'separate']), __metadata('design:type', String)], Options.prototype, "sourceMapMode", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "unicodeArray", void 0);
__decorate([class_validator_1.IsNumber(), class_validator_1.Min(0), class_validator_1.Max(1), __metadata('design:type', Number)], Options.prototype, "unicodeArrayThreshold", void 0);
__decorate([class_validator_1.IsBoolean(), __metadata('design:type', Boolean)], Options.prototype, "wrapUnicodeArrayCalls", void 0);
exports.Options = Options;

/***/ },
/* 47 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OptionsNormalizer = function () {
    function OptionsNormalizer() {
        _classCallCheck(this, OptionsNormalizer);
    }

    _createClass(OptionsNormalizer, null, [{
        key: "normalizeOptions",
        value: function normalizeOptions(options) {
            var normalizedOptions = Object.assign({}, options);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = OptionsNormalizer.normalizerRules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var normalizerRule = _step.value;

                    normalizedOptions = normalizerRule(normalizedOptions);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return normalizedOptions;
        }
    }, {
        key: "encodeUnicodeLiteralsRule",
        value: function encodeUnicodeLiteralsRule(options) {
            if (options.unicodeArray && options.encodeUnicodeLiterals) {
                Object.assign(options, OptionsNormalizer.ENCODE_UNICODE_LITERALS_OPTIONS);
            }
            return options;
        }
    }, {
        key: "selfDefendingRule",
        value: function selfDefendingRule(options) {
            if (options.selfDefending) {
                Object.assign(options, OptionsNormalizer.SELF_DEFENDING_OPTIONS);
            }
            return options;
        }
    }, {
        key: "unicodeArrayRule",
        value: function unicodeArrayRule(options) {
            if (!options.unicodeArray) {
                Object.assign(options, OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS);
            }
            return options;
        }
    }, {
        key: "unicodeArrayThresholdRule",
        value: function unicodeArrayThresholdRule(options) {
            if (options.unicodeArrayThreshold === 0) {
                Object.assign(options, OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS);
            }
            return options;
        }
    }]);

    return OptionsNormalizer;
}();

OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS = {
    encodeUnicodeLiterals: false,
    rotateUnicodeArray: false,
    unicodeArray: false,
    unicodeArrayThreshold: 0,
    wrapUnicodeArrayCalls: false
};
OptionsNormalizer.ENCODE_UNICODE_LITERALS_OPTIONS = {
    encodeUnicodeLiterals: true,
    wrapUnicodeArrayCalls: true
};
OptionsNormalizer.SELF_DEFENDING_OPTIONS = {
    compact: true,
    selfDefending: true
};
OptionsNormalizer.normalizerRules = [OptionsNormalizer.unicodeArrayRule, OptionsNormalizer.unicodeArrayThresholdRule, OptionsNormalizer.encodeUnicodeLiteralsRule, OptionsNormalizer.selfDefendingRule];
exports.OptionsNormalizer = OptionsNormalizer;

/***/ },
/* 48 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationErrorsFormatter = function () {
    function ValidationErrorsFormatter() {
        _classCallCheck(this, ValidationErrorsFormatter);
    }

    _createClass(ValidationErrorsFormatter, null, [{
        key: "format",
        value: function format(validationErrors) {
            var errorsArray = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = validationErrors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var error = _step.value;

                    errorsArray.push(ValidationErrorsFormatter.formatError(error));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return errorsArray.join('\n');
        }
    }, {
        key: "formatError",
        value: function formatError(validationError) {
            var errorString = "`" + validationError.property + "` errors:\n",
                constraints = validationError.constraints;
            for (var constraint in constraints) {
                if (!constraints.hasOwnProperty(constraint)) {
                    continue;
                }
                errorString += "    - " + constraints[constraint] + "\n";
            }
            return errorString;
        }
    }]);

    return ValidationErrorsFormatter;
}();

exports.ValidationErrorsFormatter = ValidationErrorsFormatter;

/***/ },
/* 49 */
/***/ function(module, exports) {

"use strict";
"use strict";

function AtobTemplate() {
    return "\n        (function () {\n            var object = []['filter']['constructor']('return this')();\n            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n            object.atob || (\n                object.atob = function(input) {\n                    var str = String(input).replace(/=+$/, '');\n                    for (\n                        var bc = 0, bs, buffer, idx = 0, output = '';\n                        buffer = str.charAt(idx++);\n                        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n                            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n                    ) {\n                        buffer = chars.indexOf(buffer);\n                    }\n                return output;\n            });\n        })();\n    ";
}
exports.AtobTemplate = AtobTemplate;

/***/ },
/* 50 */
/***/ function(module, exports) {

"use strict";
"use strict";

function ConsoleOutputDisableExpressionTemplate() {
    return "\n        (function () {\n            var _ = '(\x04\x06\x03\x05[]' + '[\"filter\"][\"\x07tructor\"]' + '(\"return this\")()' + '.' + '\x03;\x06\x02\x05\x04};' + '_\x03.log\x01.in' + 'fo\x01.' + 'war' + 'n\x01.er' + 'r' + 'or\x01})();' + '\x01\x05_\x02;' + '_\x03\x02function' + '\x03\x07ole\x04\x02 ()' + '{\x05 = \x06var ' + '_\x07cons', \n                Y, \n                $;\n            \n            for (Y in $ = \"\x07\x06\x05\x04\x03\x02\x01\") {\n              var arr = _.split($[Y]);\n              _ = arr.join(arr.pop());\n            }\n            \n            [][\"filter\"][\"constructor\"](_)();\n        })()\n    ";
}
exports.ConsoleOutputDisableExpressionTemplate = ConsoleOutputDisableExpressionTemplate;

/***/ },
/* 51 */
/***/ function(module, exports) {

"use strict";
"use strict";

function DebugProtectionFunctionCallTemplate() {
    return "{debugProtectionFunctionName}();";
}
exports.DebugProtectionFunctionCallTemplate = DebugProtectionFunctionCallTemplate;

/***/ },
/* 52 */
/***/ function(module, exports) {

"use strict";
"use strict";

function DebugProtectionFunctionIntervalTemplate() {
    return "\n        setInterval(function () {\n            {debugProtectionFunctionName}();\n        }, 4000);\n    ";
}
exports.DebugProtectionFunctionIntervalTemplate = DebugProtectionFunctionIntervalTemplate;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(0);
function DebugProtectionFunctionTemplate() {
    return "\n        var {debugProtectionFunctionName} = function () {\n            function debuggerProtection (counter) {\n                if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {\n                    (function () {}.constructor('debugger')());\n                } else {\n                    [].filter.constructor(" + Utils_1.Utils.stringToJSFuck('debugger') + ")();\n                }\n                \n                debuggerProtection(++counter);\n            }\n            \n            try {\n                debuggerProtection(0);\n            } catch (y) {}\n        };\n    ";
}
exports.DebugProtectionFunctionTemplate = DebugProtectionFunctionTemplate;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(0);
function SelfDefendingTemplate() {
    return "\n        (function () {                                \n            var func = function(){return 'dev';},\n                func2 = function () {\n                    return 'window';\n                };\n        \n            !Function(" + Utils_1.Utils.stringToUnicode("return/\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}/") + ")().test(func.toString()) ? Function(" + Utils_1.Utils.stringToUnicode("return/(\\\\[x|u](\\w){2,4})+/") + ")().test(func2.toString()) ? []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(false){}')() : []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(true){}')() : []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(false){}')();\n        })();\n    ";
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;

/***/ },
/* 55 */
/***/ function(module, exports) {

"use strict";
"use strict";

function UnicodeArrayCallsWrapperTemplate() {
    return "\n        var {unicodeArrayCallsWrapperName} = function ({keyName}) {\n            return {unicodeArrayName}[parseInt({keyName}, 0x010)];\n        };\n    ";
}
exports.UnicodeArrayCallsWrapperTemplate = UnicodeArrayCallsWrapperTemplate;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(0);
function SelfDefendingTemplate() {
    return "\n        var func = function(){return 'dev';};\n           \n        Function(" + Utils_1.Utils.stringToUnicode("return/\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}/") + ")()['test'](func['toString']()) !== true && !{unicodeArrayName}++ ? []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(true){}')() : Function('a', atob(" + Utils_1.Utils.stringToUnicode(Utils_1.Utils.btoa('a.call()')) + "))({forLoopFunctionName}) ? []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(false){}')() : []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(false){}')();\n    ";
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;

/***/ },
/* 57 */
/***/ function(module, exports) {

"use strict";
"use strict";

function UnicodeArrayDecodeTemplate() {
    return "\n        (function () {\n           {atobPolyfill}\n          \n            var {forLoopFunctionName} = function () {\n                var array = [];\n                \n                for (var i in {unicodeArrayName}) {\n                    array['push'](decodeURI(atob({unicodeArrayName}[i])));\n                }\n                \n                {unicodeArrayName} = array;\n            };\n            \n            {code}\n        })();\n    ";
}
exports.UnicodeArrayDecodeTemplate = UnicodeArrayDecodeTemplate;

/***/ },
/* 58 */
/***/ function(module, exports) {

"use strict";
"use strict";

function UnicodeArrayTemplate() {
    return "\n        var {unicodeArrayName} = [{unicodeArray}];\n    ";
}
exports.UnicodeArrayTemplate = UnicodeArrayTemplate;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var Utils_1 = __webpack_require__(0);
function SelfDefendingTemplate() {
    return "(function () {\n        var func = function(){return 'dev';};\n                            \n        !Function(" + Utils_1.Utils.stringToUnicode("return/\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}/") + ")().test(func.toString()) ? []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(true){}')() : Function('a', 'b', 'a(++b)')({whileFunctionName}, {timesName}) ? []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(false){}')() : []['filter']['constructor'](" + Utils_1.Utils.stringToJSFuck('while') + " + '(false){}')();\n    })();";
}
exports.SelfDefendingTemplate = SelfDefendingTemplate;

/***/ },
/* 60 */
/***/ function(module, exports) {

"use strict";
"use strict";

function UnicodeArrayRotateFunctionTemplate() {
    return "\n        (function (array, {timesName}) {\n            var {whileFunctionName} = function (times) {\n                while (--times) {\n                    array['push'](array['shift']());\n                }\n            };\n            \n            {code}\n        })({unicodeArrayName}, 0x{unicodeArrayRotateValue});\n    ";
}
exports.UnicodeArrayRotateFunctionTemplate = UnicodeArrayRotateFunctionTemplate;

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("chance");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("class-validator");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("commander");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("mkdirp");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var JavaScriptObfuscator_1 = __webpack_require__(9);
if (!global._babelPolyfill) {
    __webpack_require__(20);
}
module.exports = JavaScriptObfuscator_1.JavaScriptObfuscator;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map