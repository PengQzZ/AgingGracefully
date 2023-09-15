import { ComponentPublicInstance } from 'vue';
import { VueWrapper, DOMWrapper } from '@vue/test-utils';
export declare function trigger(wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window, eventName: string, x?: number, y?: number, options?: any): Promise<void>;
export declare function mockScrollTop(value: number): Promise<void>;
export declare function sleep(delay?: number): Promise<void>;
export declare function triggerDrag(el: any, relativeX?: number, relativeY?: number): void;
