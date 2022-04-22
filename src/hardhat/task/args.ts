import type {ActionType, TaskArguments} from 'hardhat/types';

import type {JestFlags} from '../../jest/flags';

export interface HardhatTaskArgs<ArgsT extends TaskArguments> {
	name: string;
	action: ActionType<ArgsT>;
	description?: string;
	flags?: JestFlags;
}
