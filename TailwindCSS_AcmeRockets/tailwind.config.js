/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

/**
 * node -v
 * npx tailwindcss init
 * npx tailwindcss -i ./src/input.css -o ./build/css/style.css
 * npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
 * -i, input demektir. devamındaki ise inputun nerede olduğunu belirtir
 * -o output demektir. devamındaki ise outputun nerede olduğunu belirtir
 * --watch flag'ı ekleyerek inputtaki değişim output'a yansır.
 * the name of the current directory must be "index"
 * npm init -y creates package.json
 * npm i -D prettier-plugin-tailwindcss creates package-lock.json and it is a dev dependency
 * npm run tailwind
 * Go live on the index
 */