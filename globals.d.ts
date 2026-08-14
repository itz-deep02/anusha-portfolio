/// <reference types="next/types/global" />

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

// Plain stylesheet imports (e.g. `import "./globals.css"`) are side-effect
// only; this declaration satisfies noUncheckedSideEffectImports (TS2882).
declare module "*.css";
