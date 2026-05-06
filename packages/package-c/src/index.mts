import { type Hello, hello } from "@gafe/package-a";

export function helloUniverse(): Hello {
  return `${hello()} Universe`;
}
