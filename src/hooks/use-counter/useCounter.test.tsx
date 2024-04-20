import { renderHook, act } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
    test("should render the initial count", () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    test("shoud accept and render the same initial count", () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        expect(result.current.count).toBe(10)
    })

    test("shoud increment the count", () => {
        const {result} = renderHook(useCounter)
        act(() => {
            result.current.increment()
        }) 
        expect(result.current.count).toBe(1)
    })

    test("shoud decrement the count", () => {
        const {result} = renderHook(useCounter)
        act(() => {
            result.current.decrement()
        }) 
        expect(result.current.count).toBe(-1)
    })
})