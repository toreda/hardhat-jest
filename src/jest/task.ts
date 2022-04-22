import {Fate} from '@toreda/fate';

export interface JestTask {
	(): Promise<Fate<never>>;
	done: () => boolean;
	success: () => boolean;
}
