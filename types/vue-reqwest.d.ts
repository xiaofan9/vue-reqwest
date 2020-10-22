import reqwest from "reqwest";
import { App, PluginFunction } from "vue";

export declare class VAxios {
  static install (app: App, req?: typeof reqwest): void;
  static install (app: PluginFunction<never>, req?: typeof reqwest): void;

  static version: string
};