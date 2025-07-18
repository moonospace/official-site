import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"

export default combine(
  ignores(["node_modules/**", "build/**", ".react-router/**"]),
  javascript(),
  imports(),
  typescript(),
  react(),
  {
    rules: {
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react/no-array-index-key": "off",
      "react-refresh/only-export-components": "off",
    },
  },
)
