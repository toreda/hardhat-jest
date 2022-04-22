import type {ActionType, HardhatRuntimeEnvironment, RunSuperFunction} from 'hardhat/types';

import {HardhatPluginError} from 'hardhat/plugins';
import type {JestFlags} from '../flags';
import type {JestTask} from '../task';
import {JestTaskNames} from '../task/names';
import {jestTaskMk} from '../task/mk';

export async function jestMainTask(flags?: JestFlags): Promise<JestTask> {
	const action: ActionType<JestFlags> = async (
		args: JestFlags,
		env: HardhatRuntimeEnvironment,
		runSuper: RunSuperFunction<JestFlags>
	) => {
		return null;
	};

	return jestTaskMk<JestFlags>({
		name: JestTaskNames.MainTask,
		action: action,
		flags: flags
	});
}
