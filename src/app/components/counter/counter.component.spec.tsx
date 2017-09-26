
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Counter } from './counter.component'
import * as sinon from 'sinon'
/*
mount() needed for passed prop testing,
use shallow() for only internal testing - mock the props with mutation
 */

describe('Counter', () => {
  it('Counter renders Counter world', () => {
    const counter = shallow(<Counter initialValue={0} />)
    expect(counter.state().value).to.equal(0)
  })
  it('Counter increments on call', () => {
    let counter = shallow(<Counter initialValue={0}/>)
    let instance: any = counter.instance()
    instance.increment()
    expect(counter.state().value).to.equal(1)
  })
  it('Counter increments to 2 after 2 seconds', function (): void {

    const counter = mount(<Counter initialValue={0}/>)
    let instance: any = counter.instance()
    this.clock = sinon.useFakeTimers()
    instance.startTimer()

    this.clock.tick(2001)
    expect(counter.state().value).to.equal(2)
  })
})
