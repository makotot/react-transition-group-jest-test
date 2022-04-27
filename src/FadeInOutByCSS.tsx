import { useState } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

const duration = 1000

export const FadeInOutByCSS = () => {
  const [inProp, setInProp] = useState(false)

  return (
    <div>
      <CSSTransition
        in={inProp}
        timeout={duration}
        classNames="fade"
        mountOnEnter={true}
        unmountOnExit={true}>
        <div data-testid="content">I'm a fade Transition!</div>
      </CSSTransition>

      <button
        type="button"
        onClick={() => setInProp((v) => !v)}
        data-testid="button">
        Toggle
      </button>
    </div>
  )
}
