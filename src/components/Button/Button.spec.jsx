import { fireEvent, render, screen } from "@testing-library/react"
import Button from "."

describe('<Button/>', () => {
    it('should render the button with the text', () =>{
        render(<Button text="Carregar mais"/>)
        const button = screen.getByRole('button', {name: /carregar mais/i})
        expect(button).toBeInTheDocument()

    } )

    it('should call function on button click', ()=>{
        const fn = jest.fn();
        render(<Button text="Load more" clicar={fn}/>)

        const button = screen.getByRole('button', {name: /load more/i})
        fireEvent.click(button)
        expect(fn).toHaveBeenCalled()
    })
})