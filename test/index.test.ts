import { describe, expect, it } from 'vitest'
import { add } from '../src/index'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

describe('test function', () => {
  it.concurrent('add', () => {
    expect(add(1, 2, 3)).toEqual(6)
  })
})
