//this is way simpler than jasmine/junit
import {timesTwo, returnDiv} from "./functions"

test("Multiplies by 2", () => {
    expect(timesTwo(4)).toBe(8); //expect(realResult).toBe(expectedResult)
})

test("Returns a <div>" , () => {
    expect(returnDiv()).toBe("<div>")
})