export function throwIfNgModuleLoaded(parentModule: any, ngModuleName: string) {
  if (parentModule) {
    throw new Error(`${ngModuleName} has already been loaded.`);
  }
}
