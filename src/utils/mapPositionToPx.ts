import { PositionX, PositionY, SQUARE_SIZE_PX } from "../constants";

/** @returns X and Y coordinates in pixels */
export function mapPositionToPx(x: PositionX, y: PositionY): [number, number] {
  const positionXToIndexMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7 };
  const positionXInPx = positionXToIndexMap[x] * SQUARE_SIZE_PX;
  const positionYInPx = (y - 1) * SQUARE_SIZE_PX;
  return [positionXInPx, positionYInPx];
}
