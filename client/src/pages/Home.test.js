import React from 'react'
import Home from './Home'

const numItems = Home.state.items.length

console.log(numItems)

test('Number of items = 12', () => {
    expect(numItems).toBe(12)
})

test('Number of items to be greater than 1', () => {
    expect(numItems).toBeGreaterThan(1)
})