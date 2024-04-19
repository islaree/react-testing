import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe("Greet", () => {

    test('renders corectly', () => {
        render(<Greet />)
        const textElement = screen.getByText("hello")
        expect(textElement).toBeInTheDocument()
    })
    
})

describe("Nested", () => {
    test('renders a name', () => {
        render(<Greet name="bob" />)
        const textElement = screen.getByText("hello bob")
        expect(textElement).toBeInTheDocument()
    })
})
