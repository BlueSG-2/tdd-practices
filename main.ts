const PWD_INVALID = "Password is invalid";
const PWD_MUST_BE_AT_LEAST_8 = "Password must be at least 8 characters";

interface Result {
    isValid: boolean,
    errors: string[]
}

export function validatePassword(input: string): Result {
    if (input === null) throw new Error(PWD_INVALID);
    if (input.length < 8) return returnValidError(PWD_MUST_BE_AT_LEAST_8)
    const numberCount = (input.match('^\d+$') || []).length
    if (numberCount < 2) return returnValidError(PWD_MUST_BE_AT_LEAST_8);
    return { isValid: false, errors: [] };
}

function returnValidError(err: string): Result {
    return { isValid: false, errors: [err] }
}
