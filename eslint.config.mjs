// eslint-config-next 16 ships its shareable configs as native ESLint flat
// configs, so the old FlatCompat/@eslint/eslintrc bridge is no longer needed
// (and in fact crashes on v16 with "Converting circular structure to JSON").
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  // `next lint` implicitly ignored build output; the bare ESLint CLI does not,
  // so ignore generated/tooling dirs explicitly.
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      ".claude/**",
      "next-env.d.ts",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
