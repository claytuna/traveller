/** credit: https://github.com/Swizec/useDimensions */
import { useState, useCallback, useLayoutEffect } from "react";
export interface DimensionObject {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
}

export type UseDimensionsHook = [
  (node: HTMLElement) => void,
  {} | DimensionObject,
  HTMLElement | undefined
];

export interface UseDimensionsArgs {
  liveMeasure?: boolean;
}

function getDimensionObject(
  node: HTMLElement | undefined
): Partial<DimensionObject> {
  if (node === undefined) {
    return {};
  }
  const rect: DOMRectReadOnly = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: rect.x !== undefined ? rect.x : rect.top,
    left: rect.y !== undefined ? rect.y : rect.left,
    x: rect.x !== undefined ? rect.x : rect.left,
    y: rect.y !== undefined ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom,
  };
}

function useDimensions({
  liveMeasure = true,
}: UseDimensionsArgs = {}): UseDimensionsHook {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState<HTMLElement>();

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);

        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node]);

  return [ref, dimensions, node];
}

export default useDimensions;
