export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

export const result = 'footer'

export function timeout() {
  return 'this is data'
}

declare const decLiteral: number;
