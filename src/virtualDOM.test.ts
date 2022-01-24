import { createElement, createText } from ".";
import { OkamiNode, VirtualOkamiElement, VirtualOkamiText } from "../dist/types";

describe(createElement, () => {
    it('should return a VirtualOkamiElement', () => {
        const expectedOkamiElement: VirtualOkamiElement =  {
            childElements: [],
            htmlTag: "div",
            mark: "okami-container",
            properties: {
              id: "okami",
              mark: "okami-container",
            },
            type: 0,
        }
        
        return expect(createElement('div', { id: 'okami', mark: 'okami-container' })).toStrictEqual(expectedOkamiElement);
    });

    it('should be able to have nested VirtualOkamiElements as child elements', () => {
        const childNode1innerChild: OkamiNode = createElement('div', { id: 'okami-child-1-inner', mark: 'okami-child-1-inner' })
        const childNode1: OkamiNode = createElement('div', { id: 'okami-child-1', mark: 'okami-child-1' }, childNode1innerChild)
        const childNode2: OkamiNode = createElement('div', { id: 'okami-child-2', mark: 'okami-child-2' })
        
        const containerNode: OkamiNode = 
            createElement('div', { id: 'okami-container', mark: 'okami-container' }, childNode1, childNode2)

        const expectedOkamiElement: VirtualOkamiElement =  {
            childElements: [childNode1, childNode2],
            htmlTag: "div",
            mark: "okami-container",
            properties: {
                id: "okami-container",
                mark: "okami-container",
            },
            type: 0,
        }
        
        return expect(containerNode).toStrictEqual(expectedOkamiElement);
    })
})

describe(createText, () => {
    it('should be able to create a text element', () => {
        const expectedOkamiElement: VirtualOkamiText =  {
            value: "i am a small wolf",
            mark: "text-1",
            type: 1,
        }
        
        return expect(createText("i am a small wolf", "text-1")).toStrictEqual(expectedOkamiElement)
    })
})

describe("Okami Virtual DOM", () => {
    it('should be able to nest a VirtualOkamiText inside a VirtualOkamiElement', () => {
        const childTextNode: OkamiNode = createText('hesitation is death', 'okami-text-1')
        const containerNode: OkamiNode = 
            createElement('div', { id: 'okami-container', mark: 'okami-container' }, childTextNode)

        const expectedOkamiElement: VirtualOkamiElement =  {
            childElements: [childTextNode],
            htmlTag: "div",
            mark: "okami-container",
            properties: {
                id: "okami-container",
                mark: "okami-container",
            },
            type: 0,
        }
        
        return expect(containerNode).toStrictEqual(expectedOkamiElement);
    })
})