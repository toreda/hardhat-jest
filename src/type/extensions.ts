import 'hardhat/types/config';

import type {JestTaskArgs} from '../jest/task/args';

declare module 'hardhat/types/config' {
	export interface HardhatUserConfig {
		jest?: JestTaskArgs;
	}

	export interface HardhatConfig {
		jest?: JestTaskArgs;
	}
}
