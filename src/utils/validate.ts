export interface IValidate {
  isExternal(path: string): boolean;
}

class Validate implements IValidate {
  /**
   * @param {string} path
   * @returns {boolean}
   */
  public isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path);
  }
}

const validateService = new Validate();
export default validateService;