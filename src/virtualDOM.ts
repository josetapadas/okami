export type VirtualOkamiMark = string | number
export enum VirtualOkamiTypes {
    Element,
    Text,
}

export type VirtualOkamiProperties = { [key: string]: string | number | boolean | Function }

export interface VirtualOkamiElement {
    type: VirtualOkamiTypes.Element,
    htmlTag: string,
    childElements?: OkamiNode[]
    properties?: VirtualOkamiProperties,
    mark: VirtualOkamiMark
}

export interface VirtualOkamiText {
    type: VirtualOkamiTypes.Text,
    value: string,
    mark: VirtualOkamiMark
}

export type OkamiNode = VirtualOkamiText | VirtualOkamiElement

export const createElement = 
    (htmlTag: string, properties: VirtualOkamiProperties & { mark: string }, ...childElements: OkamiNode[]): OkamiNode => ({
        type: VirtualOkamiTypes.Element,
        htmlTag,
        properties,
        childElements,
        mark: properties.mark,
    })

export const createText = 
    (value: string, mark: string): VirtualOkamiText => ({
        type: VirtualOkamiTypes.Text,
        value,
        mark,
    })

