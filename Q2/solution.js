let buffer = ''

/**
 * main handler
 * @param {string} str 
 * @returns 
 */
function handle(str) {
    const [count, ...lines] = str;
    let allValid = true;
    const errCodes = [];

    for (const line of lines) {
        const [, _isValid, reason] = line.split(" ");
        const isValid = _isValid === "true";
        // this is the mistake
        allValid = allValid && isValid;
        if (!isValid) {
            errCodes.push(reason);
        }
    }

    return { allValid, errCodes };
}

process.stdin.on("data", data => {
    buffer += data.toString();
    const { allValid, errCodes } = handle(buffer);
    process.stdout.write(allValid ? "Yes" : "No" + "\n")
    if (!allValid) {
        process.stdout.write(allValid ? errCodes.join(" ") + "\n");
    }
    process.exit()
});
