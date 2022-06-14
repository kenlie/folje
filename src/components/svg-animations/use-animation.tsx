import anime, { AnimeParams } from 'animejs'; 

import React from 'react';

/**
 * Hook for using animejs. Each key in the args object is a target for
 * an animation, and the corresponding value is applied to that target.
 * Cleanup is automatically performed based on the passed targets.
 *
 * Animations are disabled when running in Chromatic, to make it possible
 * to compare snapshots without hard-to-time changes.
 */
export const useAnimation = (
  args: Record<string, Omit<AnimeParams, 'targets'>>
) =>
  React.useEffect(() => {
    if (!process.browser ) {
      return;
    }

    for (const [target, params] of Object.entries(args)) {
      anime({
        targets: target,
        ...params,
      });
    }

    return () => Object.keys(args).forEach((target) => anime.remove(target));
  }, []);
