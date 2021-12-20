export interface IBlock {
    timestamp: number;
    lastHash: string;
    data: string;
    hash: string;
    nonce: number;
    difficulty: number;
}
export declare class Block implements IBlock {
    timestamp: number;
    lastHash: string;
    data: string;
    hash: string;
    nonce: number;
    difficulty: number;
    constructor(block: IBlock);
}
export declare const INITIAL_DIFFICULTY = 3;
export declare const GENESIS_DATA: IBlock;
export declare const GENESIS_BLOCK: Block;
