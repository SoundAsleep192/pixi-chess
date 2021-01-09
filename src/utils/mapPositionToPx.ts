import { PositionsXOrdered, PositionX, PositionY, SQUARE_SIZE_PX } from "../constants";

/** @returns X and Y coordinates in pixels */
export function mapPositionToPx(x: PositionX, y: PositionY): [number, number] {

  const positionXInPx = PositionsXOrdered.indexOf(x) * SQUARE_SIZE_PX;
  const positionYInPx = (y - 1) * SQUARE_SIZE_PX;
  return [positionXInPx, positionYInPx];
}
