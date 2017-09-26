
import './app/app.component'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

(window as any).React = React

import { Counter } from './app/components/counter/counter.component'

ReactDOM.render(
    <Counter initialValue={0} />,
    document.getElementById('app-root')
)
