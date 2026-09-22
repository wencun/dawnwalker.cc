# AGENTS.md

## Goal

Work efficiently with minimal context usage.

Always prefer the smallest correct change.

Do not explore, read, modify, test, or explain anything that is not necessary for the current task.

## Repository Exploration

- Do NOT scan the entire repository unless explicitly required.
- Search for relevant symbols, filenames, routes, classes, functions, or configuration first.
- Use targeted search before opening files.
- Read only files directly relevant to the task.
- Avoid reading large generated files, logs, lock files, build output, compiled files, or vendored dependencies unless necessary.
- Do not recursively inspect unrelated directories.
- If an existing implementation can be used as a reference, inspect the closest relevant example instead of searching broadly.

Preferred workflow:

1. Search for the relevant symbol or feature.
2. Identify the smallest set of files involved.
3. Read only those files.
4. Make the smallest necessary change.
5. Run targeted validation.
6. Stop when the requested task is complete.

## Code Changes

- Make the smallest possible change that solves the requested problem.
- Do not refactor unrelated code.
- Do not rename unrelated variables, classes, methods, or files.
- Do not reformat unrelated files.
- Do not reorganize directories unless explicitly requested.
- Do not add abstractions unless they are necessary.
- Do not add dependencies unless explicitly requested or strictly necessary.
- Reuse existing project patterns, utilities, components, and dependencies whenever possible.
- Preserve existing public APIs unless the task explicitly requires changing them.
- Avoid speculative improvements.

If you notice unrelated issues, mention them briefly at the end instead of fixing them.

## Context Usage

Minimize context consumption.

- Do not read a full file when a relevant section is sufficient.
- Do not repeatedly reopen files unless necessary.
- Avoid dumping large command outputs into context.
- Prefer filtered output.
- Prefer exact searches over broad searches.
- Avoid reading documentation that is unrelated to the requested task.
- Do not inspect git history unless required.
- Do not inspect every implementation of a pattern if one or two representative examples are sufficient.

For large logs, inspect only relevant errors or a small tail.

For search results, narrow the query if the result set is large.

## Commands

Prefer commands with concise output.

Examples:

Prefer:

```bash
rg "UserService" src
```

over:

```bash
grep -R "UserService" .
```

Prefer:

```bash
rg "ERROR|Exception" application.log
```

over:

```bash
cat application.log
```

Prefer:

```bash
tail -n 100 application.log
```

over reading the entire log.

Avoid commands that generate very large output unless required.

## Testing

Run the smallest relevant validation first.

- Prefer tests directly related to changed files or modules.
- Do not run the entire test suite by default.
- Do not run a full clean build unless necessary.
- Expand testing only when targeted tests are insufficient or when the change affects shared/core infrastructure.
- Keep test output concise where possible.

Examples:

For Maven, prefer:

```bash
mvn -Dtest=RelevantTest test
```

instead of:

```bash
mvn clean test
```

when a targeted test is sufficient.

For Gradle, prefer:

```bash
./gradlew test --tests RelevantTest
```

when appropriate.

For frontend projects, prefer testing or linting the changed package/component instead of the entire monorepo when supported.

## Debugging

When debugging:

1. Start from the reported error or failing behavior.
2. Inspect the nearest relevant code path.
3. Reproduce with the smallest possible command or test.
4. Inspect only the relevant stack trace and logs.
5. Fix the root cause with the smallest change.
6. Re-run only the relevant validation.

Do not broadly audit the repository unless requested.

## Planning

For small tasks, start working immediately.

Do not produce a long plan for straightforward changes.

For complex tasks, keep planning concise and focus only on files and steps required to complete the task.

Do not spend context on speculative alternatives unless there is a meaningful architectural decision.

## Output

Keep the final response concise.

Report only:

1. Files changed
2. What changed
3. Tests or validation performed
4. Any unresolved issue or important caveat

Do not provide a long explanation unless explicitly requested.

Do not repeat the user's request.

Do not include large code excerpts when the code has already been changed in the repository.

## Stop Conditions

Stop once:

- the requested behavior is implemented,
- relevant validation passes,
- and there are no blockers directly related to the task.

Do not continue searching for additional improvements after the requested task is complete.

## Task Scope

Treat each task as narrowly scoped.

If the user asks for feature A, do not also implement feature B simply because it appears related.

If another issue is discovered, mention it without changing it unless it blocks feature A.

## Priority

When instructions conflict, use this priority:

1. Correctness
2. User's explicit requirements
3. Existing project conventions
4. Minimal changes
5. Minimal context/token usage
