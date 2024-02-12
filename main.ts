const prefixBorderArray = (S, bp) => {
    const N = S.length;
    bp[0] = 0;
    let bpRight;

    for (let i = 1; i < N; i++) {
        bpRight = bp[i - 1];
        while (bpRight && (S[i] != S[bpRight]) ) {
            bpRight = bp[bpRight - 1];
        }

        if (S[i] == S[bpRight]) {
            bp[i] = bpRight + 1;
        } else {
            bp[i] = 0;
        }
    }

    return bp;
};

const suffixBorderArray = (S, bs) => {
    const N = S.length;
    bs[N - 1] = 0;

    let bsLeft;
    for (let i = N - 2; i >= 0; --i) {
        bsLeft = bs[i + 1];

        while (bsLeft && (S[i] != S[N - bsLeft - 1]) ) {
            bsLeft = bs[N - bsLeft];
        }

        if (S[i] == S[N - bsLeft - 1]) {
            bs[i] = bsLeft + 1;
        } else {
            bs[i] = 0;
        }
    }

    return bs;
};

const printRes = (result) => {
    let res = '[';
    const N = result.length;
    for (let i = 0; i < N - 1; ++i) {
        res += `${result[i]}, `
    }
    res += `${result[N - 1]}]`;

    return res;
}

const main = () => {
    console.log(`prefixBorderArray: ${printRes(prefixBorderArray('abaabab', []))}`);
    console.log(`suffixBorderArray: ${printRes(suffixBorderArray('abaabab', []))}`);
};

main();