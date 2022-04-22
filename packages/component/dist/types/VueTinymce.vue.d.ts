import { PropType } from "vue";
import { RawEditorOptions } from "tinymce";
declare const _default: import("vue").DefineComponent<{
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
    config: {
        type: PropType<RawEditorOptions>;
        default(): {};
    };
}, {
    editorElement: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "content-change")[], "update:modelValue" | "content-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    config: {
        type: PropType<RawEditorOptions>;
        default(): {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onContent-change"?: ((...args: any[]) => any) | undefined;
}, {
    updateEvent: string;
    url: string;
    config: RawEditorOptions;
}>;
export default _default;
