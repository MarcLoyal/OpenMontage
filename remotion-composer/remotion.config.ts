import {Config} from '@remotion/cli/config';

// Session-local: use a pre-installed Chromium when the Remotion browser download host is unreachable.
if (process.env.REMOTION_BROWSER_EXECUTABLE) {
  Config.setBrowserExecutable(process.env.REMOTION_BROWSER_EXECUTABLE);
}
