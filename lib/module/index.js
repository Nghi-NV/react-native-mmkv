const g = global;
/**
 * MMKV is an efficient, small mobile key-value storage framework developed by WeChat.
 */

export const MMKV = {
  /**
   * Set a value for the given `key`.
   */
  set: g.mmkvSet,

  /**
   * Get a boolean value for the given `key`.
   *
   * @default false
   */
  getBoolean: g.mmkvGetBoolean,

  /**
   * Get a string value for the given `key`.
   *
   * @default undefined
   */
  getString: g.mmkvGetString,

  /**
   * Get a number value for the given `key`.
   *
   * @default 0
   */
  getNumber: g.mmkvGetNumber,

  /**
   * Delete the given `key`.
   */
  delete: g.mmkvDelete,

  /**
   * Get all keys.
   *
   * @default []
   */
  getAllKeys: g.mmkvGetAllKeys
};
//# sourceMappingURL=index.js.map