declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.scss' {}

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any;
}