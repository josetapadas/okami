let $924f3c6986965f2b$export$108e0d56407d7687;
(function($924f3c6986965f2b$export$108e0d56407d7687) {
    $924f3c6986965f2b$export$108e0d56407d7687[$924f3c6986965f2b$export$108e0d56407d7687["Element"] = 0] = "Element";
    $924f3c6986965f2b$export$108e0d56407d7687[$924f3c6986965f2b$export$108e0d56407d7687["Text"] = 1] = "Text";
})($924f3c6986965f2b$export$108e0d56407d7687 || ($924f3c6986965f2b$export$108e0d56407d7687 = {
}));
const $924f3c6986965f2b$export$c8a8987d4410bf2d = (htmlTag, properties, ...childElements)=>({
        type: $924f3c6986965f2b$export$108e0d56407d7687.Element,
        htmlTag: htmlTag,
        properties: properties,
        childElements: childElements,
        mark: properties.mark
    })
;
const $924f3c6986965f2b$export$412e0f8c020cec3 = (value, mark)=>({
        type: $924f3c6986965f2b$export$108e0d56407d7687.Text,
        value: value,
        mark: mark
    })
;




export {$924f3c6986965f2b$export$c8a8987d4410bf2d as createElement, $924f3c6986965f2b$export$412e0f8c020cec3 as createText};
//# sourceMappingURL=module.js.map
