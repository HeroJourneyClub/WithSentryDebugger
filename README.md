# Next.js Debugger + Sentry Issue Reproduction

This repository demonstrates an issue where breakpoints don't work when Sentry is enabled using `withSentryConfig`.

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```

## Issue Description

When using Sentry's `withSentryConfig` in `next.config.mjs`, breakpoints set in both the middleware (`src/middleware.ts`) and API routes don't work. This can be demonstrated using two different launch configurations.

## How to Test

### Test Case 1: Without Sentry (Breakpoints Work)

1. In VS Code, select the "WITHOUT SENTRY: debug server-side" configuration
2. Start debugging (F5)
3. Set breakpoints in:
   - `src/middleware.ts` at the line with `console.log("Add a breakpoint here")`
   - `src/app/api/test/route.ts` at the lines with `console.log("Add a breakpoint here")`
4. Visit http://localhost:3000 and click either the "Test GET Request" or "Test POST Request" button
5. Observe that all breakpoints are hit and debugging works as expected

### Test Case 2: With Sentry (Breakpoints Do Not Work)

1. In VS Code, select the "WITH SENTRY: debug server-side" configuration
2. Start debugging (F5)
3. Set breakpoints in:
   - `src/middleware.ts` at the line with `console.log("Add a breakpoint here")`
   - `src/app/api/test/route.ts` at the lines with `console.log("Add a breakpoint here")`
4. Visit http://localhost:3000 and click either the "Test GET Request" or "Test POST Request" button
5. Observe that none of the breakpoints are hit (although the console.log outputs appear in the terminal)

## VS Code Launch Configuration

The repository includes the following launch configuration in `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "WITH SENTRY: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "yarn dev",
      "env": {
        "WITH_SENTRY": "true"
      }
    },
    {
      "name": "WITHOUT SENTRY: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "yarn dev",
      "env": {
        "WITH_SENTRY": "false"
      }
    }
  ]
}
```

## Environment Details

- Next.js version: 15.4.1
- @sentry/nextjs version: 9.40.0
- Node.js version: v22.14.0
- Operating System: macOS 15.5

## Additional Notes

- The middleware contains a simple request ID generator and logger
- Console.log statements have been added at the locations where breakpoints should work
- The issue affects both middleware & route debugging when WithSentryConfig is enabled
