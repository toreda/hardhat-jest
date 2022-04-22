import {Fate} from '@toreda/fate';
import {HardhatTaskArgs} from '../../hardhat/task/args';
import {JestTask} from '../task';
import {task} from 'hardhat/config';

/**
 *
 * @param id
 * @returns
 *
 * @category Jest Tasks
 */
export async function jestTaskMk<ArgsT>(args: HardhatTaskArgs<ArgsT>): Promise<JestTask> {
	const fate = new Fate<never>();

	return Object.assign(
		async (): Promise<Fate<never>> => {
			task(args.name).setAction(args.action);

			return fate;
		},
		{
			done: (): boolean => {
				return fate.done();
			},
			success: (): boolean => {
				return fate.success();
			}
		}
	);
}
