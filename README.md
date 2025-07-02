# stat-type

> 🔍 A tiny Node.js utility to determine whether a given path is a **file**, **directory**, or **other**.

Created by **Akhil Philip**.

---

## ✅ Install

```bash
npm install stat-type


## ✨ Usage

### Async (default)

```js
const statType = require('stat-type');

(async () => {
  const type = await statType('README.md');
  console.log(type); // 'file'
})();

