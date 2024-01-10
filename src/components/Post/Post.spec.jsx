import { render, screen } from "@testing-library/react"
import Post from "."

const mock = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    img: 'img/img.png'
}

describe('<Post/>', () => {
    it('should render PostCard correctly', () => {
        render(<Post {...mock}/>)

        expect(screen.getByRole('img', {name: mock.title})).toHaveAttribute('src', 'img/img.png')
    })
})