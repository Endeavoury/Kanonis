import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@endeavoury/kanonis';

export const KANONIS_CUSTOM_ELEMENTS_SCHEMA = CUSTOM_ELEMENTS_SCHEMA;
export const DESIGN_SYSTEM_SCHEMAS = [KANONIS_CUSTOM_ELEMENTS_SCHEMA] as const;
export function registerDesignSystem(): void {
  // Importing this package registers the same Web Components used by every consumer.
}
