export interface JestFlags {
	'no-watchman'?: boolean;
	/**
	 * Alias: -u. Use this flag to re-record every snapshot that fails during this test run. Can be
	 * used together with a test suite pattern or with --testNamePattern to re-record snapshots.
	 */
	'update-snapshot'?: boolean;
	/**
	 * Alias: -b. Exit the test suite immediately upon n number of failing test suite. Defaults
	 * to 1.
	 */
	bail?: number;
	/**
	 * Whether to use the cache. Defaults to true. Disable the cache using --no-cache. Note: the
	 * cache should only be disabled if you are experiencing caching related problems. On
	 * average, disabling the cache makes Jest at least two times slower.
	 */
	cache?: boolean;
	/**
	 * Runs tests related to the current changes and the changes made in the last commit. Behaves
	 * similarly to --onlyChanged.
	 */
	changedFilesWithAncestor?: boolean;
	/**
	 * Runs tests related to the changes since the provided branch or commit hash. If the current
	 * branch has diverged from the given branch, then only changes made locally will be tested.
	 * Behaves similarly to --onlyChanged.
	 */
	changedSince?: boolean;
	/**
	 * Automatically clear mock calls, instances and results before every test. Equivalent to
	 * calling jest.clearAllMocks() before each test. This does not remove any mock
	 * implementation that may have been provided.
	 */
	clearMocks?: boolean;
	/**
	 * Alias: --collectCoverage. Indicates that test coverage information should be collected
	 * and reported in the output. Optionally pass <boolean> to override option set in
	 * configuration.
	 */
	collectCoverage?: boolean;
	/**
	 * A glob pattern relative to rootDir matching the files that coverage info needs to be
	 * collected from.
	 */
	collectCoverageFrom?: string;
	/**
	 * Forces test results output highlighting even if stdout is not a TTY.
	 */
	colors?: boolean;
	/**
	 * Alias: -c. The path to a Jest config file specifying how to find and execute tests. If
	 * no rootDir is set in the config, the directory containing the config file is assumed to
	 * be the rootDir for the project. This can also be a JSON-encoded value which Jest will
	 * use as configuration.
	 */
	config?: string;
	/**
	 * Generate test coverage reports after running tests
	 */
	coverage?: boolean;
	/**
	 * Indicates which provider should be used to instrument code for coverage. Allowed values
	 * are babel (default) or v8. \nNote that using v8 is considered experimental. This uses
	 * V8's builtin code coverage rather than one based on Babel. It is not as well tested,
	 * and it has also improved in the last few releases of Node. Using the latest versions
	 * of node (v14 at the time of this writing) will yield better results.
	 */
	coverageProvider?: string;
	/**
	 * Print debugging info about your Jest config.
	 */
	debug?: boolean;
	/**
	 * Attempt to collect and print open handles preventing Jest from exiting cleanly. Use this
	 * in cases where you need to use --forceExit in order for Jest to exit to potentially
	 * track down the reason. This implies --runInBand, making tests run serially. Implemented
	 * using async_hooks. This option has a significant performance penalty and should only be
	 * used for debugging.
	 */
	detectOpenHandles?: boolean;
	/**
	 * The test environment used for all tests. This can point to any file or node module.
	 * Examples: jsdom, node or path/to/my-environment.js.
	 */
	env?: string;
	/**
	 * Make calling deprecated APIs throw helpful error messages. Useful
	 * for easing the upgrade process.
	 */
	errorOnDeprecated?: boolean;
	/**
	 * Use this flag to show full diffs and errors instead of a patch.
	 */
	expand?: boolean;
	/**
	 * The test environment used for all tests. This can point to any file or node module.
	 * Examples: jsdom, node or path/to/my-environment.js.
	 */
	filter?: string;
	/**
	 * Force Jest to exit after all tests have completed running. This is useful when resources
	 * set up by test code cannot be adequately cleaned up. Note: This feature is an
	 * escape-hatch. If Jest doesn't exit at the end of a test run, it means external resources
	 * are still being held on to or timers are still pending in your code. It is advised to
	 * tear down external resources after each test to make sure Jest can shut down cleanly.
	 * You can use --detectOpenHandles to help track it down.
	 */
	forceExit?: boolean;
	/**
	 * Show the help information, similar to this page.
	 */
	help?: boolean;
	/**
	 * Generate a basic configuration file. Based on your project, Jest will ask you a few
	 * questions that will help to generate a jest.config.js file with a short description for
	 * each option
	 */
	init?: boolean;
	/**
	 * Insert Jest's globals (expect, test, describe, beforeEach etc.)
	 * into the global environment. If you set this to false, you should import from @jest/globals
	 **/
	injectGlobals?: boolean;
	/**
	 * Prints the test results in JSON. This mode will send all other test output and user messages
	 * to stderr.
	 */
	json?: boolean;
	/**
	 * Lists all test files that Jest will run given the arguments, and exits.
	 */
	listTests?: boolean;
	/**
	 * Logs the heap usage after every test. Useful to debug memory leaks. Use together with
	 * --runInBand and --expose-gc in node.
	 */
	logHeapUsage?: boolean;
	/**
	 * Prevents Jest from executing more than the specified amount of tests at the same time. Only
	 * affects tests that use test.concurrent.
	 */
	maxConcurrency?: number;
	/**
	 * Alias: -w. Specifies the maximum number of workers the worker-pool will spawn for running
	 * tests. In single run mode, this defaults to the number of the cores available on your
	 * machine minus one for the main thread. In watch mode, this defaults to half of the available
	 * cores on your machine to ensure Jest is unobtrusive and does not grind your machine to a halt.
	 * It may be useful to adjust this in resource limited environments like CIs but the defaults
	 * should be adequate for most use-cases.
	 */
	maxWorkers?: number;
	/**
	 * Activates notifications for test results. Good for when you don't want your consciousness
	 * to be able to focus on anything except JavaScript testing
	 */
	notify?: boolean;
	/**
	 * Alias: -o. Attempts to identify which tests to run based on which files have changed in the
	 * current repository. Only works if you're running tests in a git/hg repository at the moment
	 * and requires a static dependency graph (ie. no dynamic requires).
	 */
	onlyChanged?: boolean;
	/**
	 * Allows the test suite to pass when no files are found.
	 */
	passWithNoTests?: boolean;
	/**
	 * Automatically reset mock state before every test. Equivalent to calling jest.resetAllMocks()
	 * before each test. This will lead to any mocks having their fake implementations removed but
	 * does not restore their initial implementation
	 */
	resetMocks?: boolean;
	/**
	 * Automatically restore mock state and implementation before every test. Equivalent to calling
	 * jest.restoreAllMocks() before each test. This will lead to any mocks having their fake
	 * implementations removed and restores their initial implementation.
	 */
	restoreMocks?: boolean;
	/**
	 * Alias: -i. Run all tests serially in the current process, rather than creating a worker pool
	 * of child processes that run tests. This can be useful for debugging.
	 */
	runInBand?: boolean;
	/**
	 * Lets you specify a custom test runner.
	 */
	testRunner?: string;
	/**
	 * Print your Jest config and then exits.
	 */
	showConfig?: boolean;
	/**
	 * Prevent tests from printing messages through the console.
	 */
	silent?: boolean;
	/**
	 * Divert all output to stderr.
	 */
	useStderr?: boolean;
	/**
	 * Display individual test results with the test suite hierarchy.
	 */
	verbose?: boolean;
	/**
	 * Alias: -v. Print the version and exit.
	 */
	version?: boolean;
	/**
	 * Watch files for changes and rerun tests related to changed files. If you want to re-run all
	 * tests when a file has changed, use the --watchAll option instead.
	 */
	watch?: boolean;
	/**
	 * Watch files for changes and rerun all tests when something changes. If you want to re-run
	 * only the tests that depend on the changed files, use the --watch option.
	 */
	watchAll?: boolean;
	/**
	 * Whether to use watchman for file crawling. Defaults to true. Disable using --no-watchman.
	 */
	watchman?: boolean;
}
