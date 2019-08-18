import * as wasm from './fibonacci_rust_bg.wasm';

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory;
}

const u32CvtShim = new Uint32Array(2);

const int64CvtShim = new BigInt64Array(u32CvtShim.buffer);
/**
* @param {number} index
* @returns {BigInt}
*/
export function fibonacci(index) {
    const retptr = 8;
    const ret = wasm.fibonacci(retptr, index);
    const memi32 = getInt32Memory();
    u32CvtShim[0] = memi32[retptr / 4 + 0];
    u32CvtShim[1] = memi32[retptr / 4 + 1];
    const n0 = int64CvtShim[0];
    return n0;
}

