/* eslint-disable @typescript-eslint/no-explicit-any */
export default function numberOfArguments(...args: Array<any>): number {
  // // first approach
  return args.length;

  // second approach
  // return arguments.length;
}
