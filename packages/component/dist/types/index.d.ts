import type { App } from 'vue';
declare const VueTinymce: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            updateEvent: string;
            url: string;
            baseUrl: string;
            config: import("tinymce").RawEditorOptions;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
                required: true;
            };
            updateEvent: {
                type: StringConstructor;
                default: string;
            };
            url: {
                type: StringConstructor;
                default: string;
            };
            baseUrl: {
                type: StringConstructor;
                default: string;
            };
            config: {
                type: import("vue").PropType<import("tinymce").RawEditorOptions>;
                default(): {};
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onContent-change"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "updateEvent" | "url" | "baseUrl" | "config">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue" | "content-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
                required: true;
            };
            updateEvent: {
                type: StringConstructor;
                default: string;
            };
            url: {
                type: StringConstructor;
                default: string;
            };
            baseUrl: {
                type: StringConstructor;
                default: string;
            };
            config: {
                type: import("vue").PropType<import("tinymce").RawEditorOptions>;
                default(): {};
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onContent-change"?: ((...args: any[]) => any) | undefined;
        }, {
            editorElement: import("vue").Ref<HTMLElement | null>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "content-change")[], string, {
            updateEvent: string;
            url: string;
            baseUrl: string;
            config: import("tinymce").RawEditorOptions;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            required: true;
        };
        updateEvent: {
            type: StringConstructor;
            default: string;
        };
        url: {
            type: StringConstructor;
            default: string;
        };
        baseUrl: {
            type: StringConstructor;
            default: string;
        };
        config: {
            type: import("vue").PropType<import("tinymce").RawEditorOptions>;
            default(): {};
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onContent-change"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        editorElement: import("vue").Ref<HTMLElement | null>;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    updateEvent: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    baseUrl: {
        type: StringConstructor;
        default: string;
    };
    config: {
        type: import("vue").PropType<import("tinymce").RawEditorOptions>;
        default(): {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onContent-change"?: ((...args: any[]) => any) | undefined;
}, {
    editorElement: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "content-change")[], "update:modelValue" | "content-change", {
    updateEvent: string;
    url: string;
    baseUrl: string;
    config: import("tinymce").RawEditorOptions;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export default VueTinymce;