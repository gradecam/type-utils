/**
 * Converts a value to a boolean.
 * @param val value to be converted
 */
export function toBool(val: any): boolean {
    switch (typeof val) {
        case 'boolean':
            return val;
        case 'number':
            // NaN and 0 should both be false, anything else true
            return !!val;
        case 'object':
            return val ? Object.keys(val).length > 0 : false;
        case 'string':
            return /^(t|true|y|yes|on|1)$/i.test(val.trim());
        default:
            return false;
    }
}
