/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',  // สำหรับ Vue 3
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',  // ปิดการเตือนเกี่ยวกับชื่อ component แบบ single word
    // other rules...
  }
}
