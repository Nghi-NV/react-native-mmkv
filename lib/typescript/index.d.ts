/**
 * MMKV is an efficient, small mobile key-value storage framework developed by WeChat.
 */
export declare const MMKV: {
    /**
     * Set a value for the given `key`.
     */
    set: (key: string, value: boolean | string | number) => void;
    /**
     * Get a boolean value for the given `key`.
     *
     * @default false
     */
    getBoolean: (key: string) => boolean;
    /**
     * Get a string value for the given `key`.
     *
     * @default undefined
     */
    getString: (key: string) => string | undefined;
    /**
     * Get a number value for the given `key`.
     *
     * @default 0
     */
    getNumber: (key: string) => number;
    /**
     * Delete the given `key`.
     */
    delete: (key: string) => void;
    /**
     * Get all keys.
     *
     * @default []
     */
    getAllKeys: () => string[];
};
