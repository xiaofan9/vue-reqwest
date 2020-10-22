/**
 * Augment the typings of Vue.js
 */
import reqwest from "reqwest";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $ajax: typeof reqwest;
  }

  export interface App {
    reqwest: typeof reqwest;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $ajax: typeof reqwest;
  }

  interface VueConstructor {
    reqwest: typeof reqwest;
  }
}
