import 'hardhat/types/config';
import './type/extensions';

import {HardhatConfig, HardhatRuntimeEnvironment, HardhatUserConfig, RunSuperFunction} from 'hardhat/types';
import {Levels, Log} from '@toreda/log';
import {extendConfig, extendEnvironment, subtask, task} from 'hardhat/config';

import type {JestFlags} from './jest/flags';
import {JestTaskArgs} from './jest/task/args';
import {JestTaskNames} from './jest/task/names';

const log = new Log({
	globalLevel: Levels.ALL,
	consoleEnabled: true
});

extendConfig((config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
	if (userConfig.jest) {
		config.jest = userConfig.jest;
	}
});

extendEnvironment((_env: HardhatRuntimeEnvironment) => {
	_env;
});

task(JestTaskNames.MainTask).setAction(
	async (
		args: JestTaskArgs,
		_env: HardhatRuntimeEnvironment,
		_run: RunSuperFunction<JestTaskArgs>
	): Promise<any> => {
		log.info('[jest] main task start');
		const _flags: JestFlags = args?.flags ? args?.flags : {};

		return null;
	}
);

subtask(JestTaskNames.RunTests).setAction(
	async (
		args: JestTaskArgs,
		_env: HardhatRuntimeEnvironment,
		_run: RunSuperFunction<JestTaskArgs>
	): Promise<any> => {
		log.info('[jest] subtask start');
		const _flags: JestFlags = args?.flags ? args?.flags : {};
		return null;
	}
);
