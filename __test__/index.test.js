import React from 'react'
import renderer from 'react-test-renderer'

const TestComponent = ({ text }) => {
  const someFunction = function() {
    // do something
  }
  return (
    <div
      ariaRequired="true"
      className="someClass"
      someAttribute="text"
      aria-label={text}
      myFunction={someFunction}
    />
  )
}

test('it should transform ariaRequired to aria-required and leave the rest as is', () => {
  const rendered = renderer.create(<TestComponent text="camelCase" />)
  let tree = rendered.toJSON()
  expect(tree).toMatchSnapshot()
})
