import type { ScrollDirectionType } from '../types';

export const getScrollDirectionBooleans = (
  scrollDirection: ScrollDirectionType
) => ({
  isScrolling: scrollDirection !== 'NONE',
  isScrollingUp: scrollDirection === 'UP',
  isScrollingDown: scrollDirection === 'DOWN',
  isScrollingLeft: scrollDirection === 'LEFT',
  isScrollingRight: scrollDirection === 'RIGHT',
  scrollDirection,
});
