(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Development/LEVSYS/bac/bac/src/components/ScrambleText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrambleText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getRandomLetter() {
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}
function shuffleArray(items) {
    const arr = items.slice();
    for(let i = arr.length - 1; i > 0; i -= 1){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function ScrambleText(param) {
    let { text, durationMs = 1200, className, onComplete } = param;
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrambleText.useEffect": ()=>{
            const original = text;
            const indices = Array.from(original).map({
                "ScrambleText.useEffect.indices": (char, index)=>({
                        index,
                        char,
                        isLetter: /[A-Za-z]/.test(char)
                    })
            }["ScrambleText.useEffect.indices"]);
            const letterPositions = indices.filter({
                "ScrambleText.useEffect.letterPositions": (i)=>i.isLetter
            }["ScrambleText.useEffect.letterPositions"]).map({
                "ScrambleText.useEffect.letterPositions": (i)=>i.index
            }["ScrambleText.useEffect.letterPositions"]);
            const revealOrder = shuffleArray(letterPositions);
            const totalLetters = revealOrder.length;
            const start = performance.now();
            const step = {
                "ScrambleText.useEffect.step": (now)=>{
                    const elapsed = now - start;
                    const progress = Math.min(1, elapsed / durationMs);
                    const revealCount = Math.floor(progress * totalLetters);
                    const revealedSet = new Set(revealOrder.slice(0, revealCount));
                    const next = indices.map({
                        "ScrambleText.useEffect.step.next": (info)=>{
                            if (!info.isLetter) return info.char;
                            if (revealedSet.has(info.index)) return original[info.index];
                            return getRandomLetter();
                        }
                    }["ScrambleText.useEffect.step.next"]).join("");
                    setDisplayText(next);
                    if (progress < 1) {
                        rafRef.current = requestAnimationFrame(step);
                    } else if (!completedRef.current) {
                        completedRef.current = true;
                        setDisplayText(original);
                        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                    }
                }
            }["ScrambleText.useEffect.step"];
            rafRef.current = requestAnimationFrame(step);
            return ({
                "ScrambleText.useEffect": ()=>{
                    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
                }
            })["ScrambleText.useEffect"];
        }
    }["ScrambleText.useEffect"], [
        text,
        durationMs,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        "aria-label": text,
        style: {
            display: "inline-block"
        },
        children: displayText
    }, void 0, false, {
        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/ScrambleText.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(ScrambleText, "fD5W53j9bAfqPyW6DqWEYMjdYCo=");
_c = ScrambleText;
var _c;
__turbopack_context__.k.register(_c, "ScrambleText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f40$developer$2d$hub$2f$liquid$2d$glass$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/@developer-hub/liquid-glass/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function JoinModal(param) {
    let { isOpen, onClose } = param;
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Fake API call
        try {
            await fetch('/api/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    reason,
                    timestamp: new Date().toISOString()
                })
            });
            // Simulate success regardless of actual response
            console.log('Join request submitted:', {
                email,
                reason
            });
            // Reset form and close modal
            setEmail("");
            setReason("");
            onClose();
        } catch (error) {
            console.error('Error submitting join request:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center p-4 z-50",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f40$developer$2d$hub$2f$liquid$2d$glass$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
            cornerRadius: 16,
            displacementScale: 80,
            blurAmount: 0.05,
            className: "w-full max-w-lg",
            padding: "32px",
            style: {
                backgroundColor: 'rgba(0, 38, 118, 0.8)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "join-form",
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-white mb-2",
                                children: "Berkeley Email"
                            }, void 0, false, {
                                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                id: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "your-email@berkeley.edu",
                                required: true,
                                disabled: isSubmitting,
                                className: "w-1/2 h-12 px-3 py-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 disabled:opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "reason",
                                className: "block text-sm font-medium text-white mb-2",
                                children: "Why do you want to join?"
                            }, void 0, false, {
                                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "reason",
                                value: reason,
                                onChange: (e)=>setReason(e.target.value),
                                placeholder: "Build the future. Ship your dreams. Change the world. Create impact. Turn ideas into reality. Code with purpose. Innovate fearlessly. Make it happen.",
                                rows: 3,
                                required: true,
                                disabled: isSubmitting,
                                className: "w-1/2 h-12 px-3 py-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 disabled:opacity-50 resize-none"
                            }, void 0, false, {
                                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f40$developer$2d$hub$2f$liquid$2d$glass$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                            cornerRadius: 8,
                            padding: "12px 16px",
                            onClick: !isSubmitting ? ()=>{
                                const form = document.getElementById('join-form');
                                if (form) form.requestSubmit();
                            } : undefined,
                            className: "w-full cursor-pointer hover:scale-105 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-white font-medium",
                                children: isSubmitting ? "Submitting..." : "Submit"
                            }, void 0, false, {
                                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                                lineNumber: 108,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
            lineNumber: 57,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(JoinModal, "b1wzgC/+WNR23luS8OhaoofEcPs=");
_c = JoinModal;
var _c;
__turbopack_context__.k.register(_c, "JoinModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Development/LEVSYS/bac/bac/src/components/HeroHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$src$2f$components$2f$ScrambleText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/src/components/ScrambleText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$src$2f$components$2f$JoinModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/LEVSYS/bac/bac/src/components/JoinModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroHeading(param) {
    let { text = "BUILDERS AT", scrambleDurationMs = 100, logoDelayAfterTextMs = 0 } = param;
    _s();
    const [logoVisible, setLogoVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroHeading.useCallback[handleComplete]": ()=>{
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
            if (logoDelayAfterTextMs > 0) {
                timeoutRef.current = window.setTimeout({
                    "HeroHeading.useCallback[handleComplete]": ()=>setLogoVisible(true)
                }["HeroHeading.useCallback[handleComplete]"], logoDelayAfterTextMs);
            } else {
                setLogoVisible(true);
            }
        }
    }["HeroHeading.useCallback[handleComplete]"], [
        logoDelayAfterTextMs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroHeading.useEffect": ()=>{
            return ({
                "HeroHeading.useEffect": ()=>{
                    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
                }
            })["HeroHeading.useEffect"];
        }
    }["HeroHeading.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-sans text-4xl sm:text-6xl tracking-tight leading-none whitespace-nowrap flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$src$2f$components$2f$ScrambleText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: text,
                        durationMs: scrambleDurationMs,
                        onComplete: handleComplete,
                        className: "font-bold"
                    }, void 0, false, {
                        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/HeroHeading.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center justify-center align-middle relative",
                        style: {
                            width: "1em",
                            height: "1.1em"
                        },
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/bac_logo.svg",
                            alt: "",
                            fill: true,
                            sizes: "1em",
                            onClick: ()=>setModalOpen(true),
                            className: "object-contain transition-all duration-200 ease-out cursor-pointer hover:scale-110 " + (logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"),
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Development/LEVSYS/bac/bac/src/components/HeroHeading.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Development/LEVSYS/bac/bac/src/components/HeroHeading.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/HeroHeading.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$LEVSYS$2f$bac$2f$bac$2f$src$2f$components$2f$JoinModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalOpen,
                onClose: ()=>setModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/Development/LEVSYS/bac/bac/src/components/HeroHeading.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HeroHeading, "qzKGhbRbUDPku46UrNZw/ZYvpww=");
_c = HeroHeading;
var _c;
__turbopack_context__.k.register(_c, "HeroHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Development_LEVSYS_bac_bac_src_components_5cde6ee6._.js.map