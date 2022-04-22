import type {ConfigurableTaskDefinition, TaskArguments} from 'hardhat/types';

import {HardhatTaskArgs} from './task/args';

export type HardhatTask<ArgsT extends TaskArguments> = (
	taskArgs: HardhatTaskArgs<ArgsT>
) => ConfigurableTaskDefinition;
