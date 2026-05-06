import { type Hello, hello } from "@gafe/package-a";

export function helloWorld(): Hello {
  return `${hello()} World`;
}
