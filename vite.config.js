import { resolve } from 'path'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist')

export default {
  root: root,
  build: {
    outDir: outDir,
    emptyOutDir:true,
    rollupOptions:{
      input: {
        main: resolve(root, 'index.html'),
        products: resolve(root, 'products.html'),
        about: resolve(root, 'about.html'),
        contact: resolve(root, 'contact.html'),
        validation_form: resolve(root, 'validation_form.html'),
      }
    }
  },
  server: {
    port: 8080
  }
}