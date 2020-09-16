# Free Code Camp Project-based Curriculum Tools

This repo is for tools to help facilitate the creation and maintenance of the Free Code Camp project-based curriculum.

## [create-next-step.js](create-next-step.js)
A one-off script that will automatically add the next step based on the last step numbered as `part-xxx.md` where `xxx` represents the 3-digit step number of the last step. The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [reorder-steps.js](reorder-steps.js).

### How to run script:
1. Change to the directory of the project.
2. Run the following npm command:
  ```bash
  npm run create-next-step
  ```

## [create-next-step.js](create-next-step.js)
A one-off script that will automatically add a specified numbers of steps at a specific starting step number. The challenge seed code will be empty.

**Note:** This script also runs [reorder-steps.js](reorder-steps.js).

### How to run script:
1. Change to the directory of the project.
2. Run the following npm command:
  ```bash
  npm run create-empty-steps start=X num=Y # where X is the starting step number and Y is the number of steps to create.
  ```

## [reorder-steps.js](reorder-steps.js)
A one-off script that automatically reorders the step files in a project's markdown files based on the filename.  It also updates the `challengeOrder` property array in the project's `meta.json` with the new order of the steps.

### Working Example
Let's say you start with the following project structure:

```bash
part-1.md
part-2.md
part-3.md
part-4.md
part-5.md
part-6.md
```
At some point you decide you need to delete `part-2.md`, because that step is no longer needed.  Also, you decide to break down `part-4.md` into three steps instead of just one. 

To accomplish the this restructure, you would need to delete `part-2.md` and then add a `part-4a.md` and a `part=5b.md`.  The new folder structure would look like the following:
```bash
part-001.md
part-003.md
part-004.md
part-004a.md
part-004b.md
part-005.md
part-006.md
```
You now need the file names to be `part-1.md` through `part-7.md`, because you removed one but gained two more for a net difference of one file. Also, the frontmatter of each file below a deleted step or added step will need to be modified by making the `title` key value match the new step number. For example, after renaming `part-3.md` to `part-2.md`, you would need to change `part-2.md`'s title from `Part 03` to `Part 02`.

See below for the actual project folder changes needed:
```bash
part-001.md
part-003.md renamed to part-002.md and title changes to "Part 2"
part-004.md renames to part-003.md and title changes to "Part 3"
part-004a.md renames to part-004.md and title changes to "Part 4"
part-004b.md renames to part-005.md and title changes to "Part 5"
part-005.md renames to part-006.md and title changes to "Part 6"
part-006.md renames to part-007.md and title changes to "Part 7"
```
Along with the above changes, the `challengeOrder` key in the project's `meta.json` file needs to reflect the new step order.  This is needed because each step below a step deletion and/or step addtion changes the `title` assoiciated with each of the affected step's challenge `id`.

### Solution Steps
1. Change to the directory of the project.
2. Run the following npm command:
  ```bash
  npm run reorder-steps
  ```