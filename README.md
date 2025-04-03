# tailwindcss v3
@tailwind base;
@tailwind components;
@tailwind utilities;


# tailwindcss v4   nextjs15 默认安装的tailwindcss 版本是v4
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

## 原因
v4版本里tailwindcss.config.js已经被移除  所以darkMode:'class' 也不存在  
@custom-variant dark (&:where(.dark, .dark *));  只需要global.css里加这一句就好了
