module.exports = {
  extends: [
    "xavdid",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // prettier should go last, since it turns off rules others may have turned on
    // the root "prettier" has all rules for its various plugins (standard, react, etc)
    "prettier",
  ],
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        // don't need return types on function components
        // might tighten this to "allowTypedFunctionExpressions" per
        // https://stackoverflow.com/a/56714344/1825390
        // (though that's untested)
        "@typescript-eslint/explicit-function-return-type": 0,
        // adds self-closing tags; it's an error so eslint can self-fix
        // see: https://github.com/prettier/prettier/issues/6452#issuecomment-635722489
        "react/self-closing-comp": "error",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
