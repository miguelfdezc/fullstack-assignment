/**
 * Setup Jest for Angular testing.
 * Based on:
 *  https://www.devcurry.com/2020/09/testing-angular-component-using-jest.html
 *  https://stackoverflow.com/questions/65397145/error-need-to-call-testbed-inittestenvironment-first
 *  https://stackoverflow.com/questions/67414283/error-zone-testing-js-is-needed-for-the-fakeasync-test-helper-but-could-not-b
 */
import 'zone.js';
import 'zone.js/testing';
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
