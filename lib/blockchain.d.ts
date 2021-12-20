import { IBlock } from './block';
export interface IBlockchain {
    chain: IBlock[];
    addBlock: (data: IBlock['data']) => void;
}
export declare class Blockchain implements IBlockchain {
    chain: IBlock[];
    constructor();
    addBlock: (data: IBlock['data']) => void;
    replaceChain: (chain: IBlockchain['chain']) => void;
}
