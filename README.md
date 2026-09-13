# Soccer Trainer

A simple progressive soccer-training PWA for short at-home youth practices.

## Version 1.1.0

- Three guided practices per level
- Approximately 10 minutes per practice
- Eight beginner levels
- Drill-by-drill timer and coaching cue
- Persistent progress using local storage
- Repeat-practice option
- Offline support via service worker
- Installable PWA manifest
- GitHub Pages deployment workflow
- Age-appropriate defending added without creating a separate defender-only plan

## Beginner progression

1. Ball Comfort
2. Dribbling
3. Turning & Stopping
4. Passing
5. First Touch
6. Shooting
7. 1-on-1 Attacking & Defending
8. Put It Together

Defensive concepts are introduced gradually through 1-on-1 activities before the dedicated Level 7 work. The focus is on staying goal-side, slowing the attacker, recovering toward goal, choosing when to challenge, and keeping possession after winning the ball.

Progress is intentionally skill-based rather than tied to calendar weeks. Completing three sessions advances to the next level.

## Hosting

The repository includes `.github/workflows/pages.yml` for GitHub Pages deployment. In the repository Settings → Pages, set **Source** to **GitHub Actions** if it is not already selected.
