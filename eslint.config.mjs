import prettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(prettier, {
    rules: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/multi-word-component-names': 'off',
    },
})
