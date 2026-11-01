# Changelog

## 2.5 — Keyboard-first workspace and flexible drag-and-drop

- Removed the left navigation rail and moved Profiles / Help into the compact top bar.
- The keyboard takes the available width; the abilities/control library remains in two columns on desktop.
- Moved default-binding presets, reach legend, backups and export controls beneath the keyboard. Recommendations and rotation remain in an expandable section beneath the workspace.
- Made filled keyboard and mouse slots draggable. Drop onto an empty slot to move; onto an occupied slot to swap, including original default binds.
- Added a removal strip underneath the keyboard: drag a binding there to unassign it.
- Added an optional **All 4** modifier view to move binds between Normal, Shift, Ctrl and Alt. Normal/Shift remains the default, readable view.
- At narrower desktop sizes, mouse controls move below the keyboard so all key rows fit without horizontal scrolling.
- Kept the previous profile storage key (`keybind-forge-v1`) and versioned backup format for compatibility.

The project is a static website: no build tools are needed to publish it to GitHub Pages.
