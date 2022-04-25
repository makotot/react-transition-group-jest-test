import { useState } from 'react';
import Transition from 'react-transition-group/Transition'

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  'entering': { opacity: 0 },
  'entered':  { opacity: 1 },
  'exiting':  { opacity: 0 },
  'exited':  { opacity: 0 },
};

export const FadeInOut = () => {
  const [inProp, setInProp] = useState(false)

  return (
    <div>
      <Transition in={inProp} timeout={duration} mountOnEnter={true} unmountOnExit={true}>
        {state => (
          <div data-testid='content' style={{
            ...defaultStyle,
            ...transitionStyles[state as keyof typeof transitionStyles]
          }}>
            I'm a fade Transition!
          </div>
        )}
      </Transition>

      <button type='button' onClick={() => setInProp(v => !v)} data-testid='button'>Toggle</button>
    </div>
  )
}
