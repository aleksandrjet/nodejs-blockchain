import { Block, IBlock } from '../block';
export declare const mineBlock: ({ lastBlock, data, }: {
    lastBlock: IBlock;
    data: IBlock['data'];
}) => Block;
