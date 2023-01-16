const { pathsToModuleNameMapper } = require('ts-jest');
// import {pathsToModuleNameMapper} from 'ts-jest';

// load all settings from the TypeScript configuration
const { compilerOptions } = require('./tsconfig.spec.json');
module.exports  =   {  
    // preset:   'jest-preset-angular', // load the adapater
    preset: "jest-preset-angular",
    roots: [
        "<rootDir>",
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$",
    setupFilesAfterEnv:  ['<rootDir>/src/testing/setup-jest.ts', '<rootDir>/src/testing/window-mock.ts'], // setup env file
    collectCoverage:  true, // code coverage
    coverageReporters:  ['html'], // generate the report in HTML
    coverageDirectory:   'coverage/my-ng-app', // folder for coverage
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '/' }),
    moduleDirectories: [
        "node_modules",
        "src",
        "<rootDir>"
    ],
    moduleNameMapper: {
        '.*base-url-util': '<rootDir>/testing/base-url-util.mock',
    },
};