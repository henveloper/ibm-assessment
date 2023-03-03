let buffer = ''

/**
 * count array
 * @param {string} str 
 */
function shirtStringToArray(str) {
    const sol = Array.of({ length: 2003 }).fill(0);
    const shirts = str.split(" ");
    /**
     * 0-999 XS
     * 1000 S
     * 1001 M 
     * 1002 L
     * 1003-2002 XL
     */
    for (const shirt of shirts) {
        if (shirt === "S") {
            sol[1000]++;
        } else if (shirt === "M") {
            sol[1001]++;
        } else if (shirt === "L") {
            sol[1002]++;
        } else if (shirt.endsWith("L")) {
            // XL: 1003
            // 1000XL: 1001+1001 = 2002
            sol[1001 + shirt.length]++;
        } else {
            // ends with "S"
            // XS: 999
            // 1000XS: 1001-1001 = 0
            sol[1001 - shirt.length]++;
        }
    }

    return sol;
}

/**
 * main handler
 * @param {string} str 
 * @returns 
 */
function handle(str) {
    const [numShirtInShop, shirtsInShop, numShirtInRequest, shirtsInRequest] = str;=

    // edge
    if (numShirtInShop < numShirtInRequest) {
        return "No";
    }

    const shopShirtArray = shirtStringToArray(shirtsInShop);
    const requestShirtArray = shirtStringToArray(shirtsInRequest);

    // eval
    let reqPtr = 0;
    let shopPtr = 0;
    let satisfiedRequest = 0;

    // two pointer
    while (reqPtr < 2003) {
        if (requestShirtArray[reqPtr] <= 0) {
            reqPtr++;
            continue;
        }

        // have a request of that size, see if shop have
        while (shopPtr < 2003) {
            if (shopPtr < reqPtr) {
                shopPtr++;
                continue;
            }

            if (shopShirtArray[shopPtr] <= 0) {
                shopPtr++;
                continue;
            }

            // have stock, consume that
            shopShirtArray[shopPtr]--;
            requestShirtArray[reqPtr]--;
            satisfiedRequest++;
            break;
        }

        if (shopPtr >= 2003) {
            break;
        }
    }

    return satisfiedRequest === numShirtInRequest ? "Yes" : "No";
}

process.stdin.on("data", data => {
    buffer += data.toString();
    const result = handle(buffer);
    process.stdout.write(result + "\n")
    process.exit()
});
