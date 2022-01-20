type VirtualOkamiMark = string | number;
enum VirtualOkamiTypes {
    Element = 0,
    Text = 1
}
type VirtualOkamiProperties = {
    [key: string]: string | number | boolean | Function;
};
interface VirtualOkamiElement {
    type: VirtualOkamiTypes.Element;
    htmlTag: string;
    childElements?: OkamiNode[];
    properties?: VirtualOkamiProperties;
    mark: VirtualOkamiMark;
}
interface VirtualOkamiText {
    type: VirtualOkamiTypes.Text;
    value: string;
    mark: VirtualOkamiMark;
}
type OkamiNode = VirtualOkamiText | VirtualOkamiElement;
export const createElement: (htmlTag: string, properties: VirtualOkamiProperties & {
    mark: string;
}, ...childElements: OkamiNode[]) => OkamiNode;
export const createText: (value: string, mark: string) => VirtualOkamiText;

//# sourceMappingURL=types.d.ts.map
