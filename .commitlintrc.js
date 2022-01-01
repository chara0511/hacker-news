module.exports = {
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "header-max-length": [2, "always", 125],
    "subject-case": [2, "always", "sentence-case"]
  }
}
