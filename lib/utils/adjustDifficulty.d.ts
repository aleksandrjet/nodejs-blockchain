import { IBlock } from '../block';
export declare const MINE_RATE = 1000;
interface IParams {
    originalBlock: IBlock;
    timestamp: number;
}
interface IResult {
    difficulty: number;
    timeDifference: number;
}
export declare const adjustDifficulty: (params: IParams) => IResult;
export {};
