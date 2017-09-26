import * as React from 'react'

export interface CounterProps {
  initialValue: number
}
export interface CounterState {
  value: number
  year: number
}
require('./counter.component.scss')

export class Counter extends React.Component<CounterProps, CounterState> {
  public state: CounterState
  timer: any
  constructor(props: CounterProps) {
    super(props)
    let year = (new Date()).getFullYear()
    this.state = {
      value: this.props.initialValue,
      year
    }
    this.startTimer = this.startTimer.bind(this)
  }
  startTimer(): void {
    this.timer = setInterval(this.increment.bind(this), 1000)
  }
  increment = () => {
    this.setState({
      ...this.state, value: this.state.value + 1
    })
  }

  render(): JSX.Element {
    return (
      <div className='counter-component'>
        <h1>End to End React Starter  </h1>
        <button className='startTimer' onClick={this.startTimer}>Start Timer</button>
        <button className='count' onClick={this.increment}>Increment</button>
        <h2>{this.state.value}</h2>

       <footer>
       <h3>© {this.state.year} Velocity</h3>
       </footer>
      </div>
    )
  }
}
