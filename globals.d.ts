/// <reference types="next/types/global" />

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
