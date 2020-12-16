/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\n|\\r|\\r\\n/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = options.path\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack://my-finance-intern/./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://my-finance-intern/external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://my-finance-intern/external_%22path%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
eval("// const fetch = require('node-fetch');\n// global.fetch = require(\"node-fetch\");\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config(); // require('process');\n// const IEXtoken = process.env.IEX; \n// const SStoken = process.env.SENTI;\n\n\nvar IEXtoken = \"sk_a63b3c4b777b4f21a95bebb96e41c92f\";\nvar SStoken = \"9894333eef0d3acad87d56495d3f07c177763f2e\"; // console.log(\"hello\");\n// console.log(process.env);\n\ndocument.addEventListener('keypress', function (e) {\n  if (e.key === 'Enter') {\n    var symbol = document.getElementById(\"ticker-input\").value;\n\n    if (symbol.length === 0 || symbol.length > 4) {\n      document.getElementById(\"company-name\").innerHTML = \"INVALID TICKER\";\n      document.getElementById(\"ev-to-rev\").innerHTML = \"INVALID\";\n      document.getElementById(\"price-to-sales\").innerHTML = \"INVALID\";\n      document.getElementById(\"peg-ratio\").innerHTML = \"INVALID\";\n      document.getElementById(\"beta\").innerHTML = \"INVALID\";\n      document.getElementById(\"profit-margin\").innerHTML = \"INVALID\";\n      document.getElementById(\"d-to-e\").innerHTML = \"INVALID\";\n      document.getElementById(\"rev-per-employee\").innerHTML = \"INVALID\";\n      document.getElementById(\"avg-10day-vol\").innerHTML = \"INVALID\";\n      document.getElementById(\"avg-30day-vol\").innerHTML = \"INVALID\";\n      document.getElementById(\"high-pt\").innerHTML = \"INVALID\";\n      document.getElementById(\"avg-pt\").innerHTML = \"INVALID\";\n      document.getElementById(\"low-pt\").innerHTML = \"INVALID\";\n    } else {\n      //check if the input is not blank\n      //pass the input into the first API call to get the stock quote data\n      //Social Sentiment Data\n      //grabbing industry id\n      fetch(\"https://cors-anywhere.herokuapp.com/https://socialsentiment.io/api/v1/stocks/\".concat(symbol.toUpperCase(), \"/\"), {\n        headers: {\n          Accept: \"application/json\",\n          Authorization: \"Token \".concat(SStoken)\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        //grabbing industry sentiment data\n        fetch(\"https://cors-anywhere.herokuapp.com/https://socialsentiment.io/api/v1/industries/\".concat(data.industry_id, \"/sentiment/daily/\"), {\n          headers: {\n            Accept: \"application/json\",\n            Authorization: \"Token \".concat(SStoken)\n          }\n        }).then(function (res) {\n          return res.json();\n        }).then(function (industryData) {\n          //grabbing sentiment data and making chart\n          fetch(\"https://cors-anywhere.herokuapp.com/https://socialsentiment.io/api/v1/stocks/\".concat(symbol.toUpperCase(), \"/sentiment/daily/\"), {\n            headers: {\n              Accept: \"application/json\",\n              Authorization: \"Token \".concat(SStoken)\n            }\n          }).then(function (res) {\n            return res.json();\n          }).then(function (data) {\n            var ctx = document.getElementById('myChart').getContext('2d');\n            var chart = new Chart(ctx, {\n              // The type of chart we want to create\n              type: 'line',\n              // The data for our dataset\n              data: {\n                labels: [\"\".concat(data[0].date), \"\".concat(data[1].date), \"\".concat(data[2].date), \"\".concat(data[3].date), \"\".concat(data[4].date), \"\".concat(data[5].date), \"\".concat(data[6].date), \"\".concat(data[7].date)],\n                datasets: [{\n                  label: 'Stock Sentiment Activity',\n                  backgroundColor: 'rgba(0,0,0,0)',\n                  borderColor: 'rgb(106,45,92)',\n                  yAxisID: 'A',\n                  data: [\"\".concat(data[0].activity), \"\".concat(data[1].activity), \"\".concat(data[2].activity), \"\".concat(data[3].activity), \"\".concat(data[4].activity), \"\".concat(data[5].activity), \"\".concat(data[6].activity), \"\".concat(data[7].activity)]\n                }, {\n                  label: 'Stock Sentiment Score',\n                  backgroundColor: 'rgba(0,0,0,0)',\n                  borderColor: 'rgb(255,84,118)',\n                  yAxisID: 'B',\n                  data: [\"\".concat(data[0].score), \"\".concat(data[1].score), \"\".concat(data[2].score), \"\".concat(data[3].score), \"\".concat(data[4].score), \"\".concat(data[5].score), \"\".concat(data[6].score), \"\".concat(data[7].score)]\n                }, {\n                  label: 'Industry Sentiment Activity',\n                  backgroundColor: 'rgba(0,0,0,0)',\n                  borderColor: 'rgb(29,58,20)',\n                  yAxisID: 'A',\n                  data: [\"\".concat(industryData[0].activity), \"\".concat(industryData[1].activity), \"\".concat(industryData[2].activity), \"\".concat(industryData[3].activity), \"\".concat(industryData[4].activity), \"\".concat(industryData[5].activity), \"\".concat(industryData[6].activity), \"\".concat(industryData[7].activity)]\n                }, {\n                  label: 'Industry Sentiment Score',\n                  backgroundColor: 'rgba(0,0,0,0)',\n                  borderColor: 'rgb(130,212,187)',\n                  yAxisID: 'B',\n                  data: [\"\".concat(industryData[0].score), \"\".concat(industryData[1].score), \"\".concat(industryData[2].score), \"\".concat(industryData[3].score), \"\".concat(industryData[4].score), \"\".concat(industryData[5].score), \"\".concat(industryData[6].score), \"\".concat(industryData[7].score)]\n                }]\n              },\n              // Configuration options go here\n              options: {\n                scales: {\n                  xAxes: [{\n                    gridLines: {\n                      display: false\n                    }\n                  }],\n                  yAxes: [{\n                    id: 'A',\n                    type: 'linear',\n                    position: 'left',\n                    scaleLabel: {\n                      display: true,\n                      labelString: 'Activity'\n                    },\n                    gridLines: {\n                      display: false\n                    }\n                  }, {\n                    id: 'B',\n                    type: 'linear',\n                    position: 'right',\n                    scaleLabel: {\n                      display: true,\n                      labelString: 'Score'\n                    },\n                    gridLines: {\n                      display: false\n                    }\n                  }]\n                }\n              }\n            });\n          });\n        });\n      }); //end of sentiment data fetching and charting\n\n      fetch(\"https://cloud.iexapis.com/stable/stock/\".concat(symbol, \"/quote?token=\").concat(IEXtoken)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        document.getElementById(\"current-price-output\").innerHTML = \"$\".concat(data.iexClose);\n      }); //Advanced Stats -- \n\n      fetch(\"https://cloud.iexapis.com/stable/stock/\".concat(symbol, \"/advanced-stats?token=\").concat(IEXtoken)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        // debugger\n        document.getElementById(\"ev-to-rev\").innerHTML = \"\".concat(data.enterpriseValueToRevenue, \"x\");\n        document.getElementById(\"price-to-sales\").innerHTML = \"\".concat(parseFloat(data.priceToSales.toFixed(2)), \"x\");\n        document.getElementById(\"peg-ratio\").innerHTML = \"\".concat(parseFloat(data.pegRatio).toFixed(2), \"x\");\n        document.getElementById(\"beta\").innerHTML = \"\".concat(parseFloat(data.beta).toFixed(2));\n        document.getElementById(\"profit-margin\").innerHTML = \"\".concat((data.profitMargin * 100).toFixed(3), \"%\");\n        document.getElementById(\"d-to-e\").innerHTML = \"\".concat(parseFloat(data.debtToEquity).toFixed(2));\n        document.getElementById(\"rev-per-employee\").innerHTML = \"$\".concat(data.revenuePerEmployee);\n      }); //Key Stats -- \n\n      fetch(\"https://cloud.iexapis.com/stable/stock/\".concat(symbol, \"/stats?token=\").concat(IEXtoken)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        document.getElementById(\"avg-10day-vol\").innerHTML = data.avg10Volume;\n        document.getElementById(\"avg-30day-vol\").innerHTML = data.avg30Volume;\n        document.getElementById(\"company-name\").innerHTML = data.companyName;\n      }); //Analyst Recommendations -- \n\n      fetch(\"https://cloud.iexapis.com/stable/stock/\".concat(symbol, \"/recommendation-trends?token=\").concat(IEXtoken)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        document.getElementById(\"buy-rating-body\").innerHTML = data[data.length - 1].ratingBuy + data[data.length - 1].ratingOverweight;\n        document.getElementById(\"hold-rating-body\").innerHTML = data[data.length - 1].ratingHold;\n        document.getElementById(\"sell-rating-body\").innerHTML = data[data.length - 1].ratingSell + data[data.length - 1].ratingUnderweight;\n        document.getElementById(\"#analysts\").innerHTML = data[data.length - 1].ratingSell + data[data.length - 1].ratingUnderweight + data[data.length - 1].ratingBuy + data[data.length - 1].ratingOverweight + data[data.length - 1].ratingHold;\n      }); //Price Targets\n\n      fetch(\"https://cloud.iexapis.com/stable/stock/\".concat(symbol, \"/price-target?token=\").concat(IEXtoken)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        document.getElementById(\"high-pt\").innerHTML = \"$\".concat(data.priceTargetHigh.toFixed(0));\n        document.getElementById(\"avg-pt\").innerHTML = \"$\".concat(data.priceTargetAverage.toFixed(0));\n        document.getElementById(\"low-pt\").innerHTML = \"$\".concat(data.priceTargetLow.toFixed(0));\n      });\n    }\n  }\n}); // const path = require('path')\n// const PORT = process.env.PORT || 8000; \n// app.get('/', (request, res) => {\n//   res.sendFile(path.join(__dirname, './public/index.html'))\n// })\n// app.listen(PORT, () => {\n//     console.log(__dirname);\n//     console.log(`listening on ${PORT}`)\n// })\n// app.use(express.static('public'))\n\n//# sourceURL=webpack://my-finance-intern/./app.js?");
})();

/******/ })()
;