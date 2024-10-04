import { validatePassword } from "./main";

describe("Validate Password function", () => {
    it("password input is null should return error", () => {

        expect(() => validatePassword(null as unknown as string)).toThrow(new Error("Password is invalid"));
    })

    it("password input is string should return boolean", () => {
        const result = validatePassword("somestring");
        expect(typeof result.isValid).toBe("boolean");
    });

    it("password input is string and lessen then 8 characters should return error", () => {
        const result = validatePassword("1234567");
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Password must be at least 8 characters");
    });

    it("password is string and do not have at least 2 number should return error", () => {
        const result = validatePassword("somepassword");
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Password must be at least 8 characters, Password must contain at least 2 numbers");
    });
})


