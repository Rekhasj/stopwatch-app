import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  getCountDownStarted = () => {
    this.setState(prevState => ({
      timeSeconds: prevState.timeSeconds + 1,
    }))
  }

  onClickToReset = () => {
    this.setState({timeSeconds: 0})
  }

  onClickToStart = () => {
    this.timerId = setInterval(this.getCountDownStarted, 1000)
  }

  onClickToStop = () => {
    clearInterval(this.timerId)
  }

  getTimeInSecondsFormat = () => {
    const {timeSeconds} = this.state
    //  const totalSeconds = countDown * 60 - timeSeconds

    const minutes = Math.floor(timeSeconds / 60)
    const seconds = Math.floor(timeSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="home-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-container">
              <img
                alt="stopwatch"
                className="stopwatch-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <h1 className="timer">Timer</h1>
            </div>
            <h1 className="countdown">{this.getTimeInSecondsFormat()}</h1>
            <div className="button-container">
              <button
                type="button"
                className="button color-green"
                onClick={this.onClickToStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button color-red"
                onClick={this.onClickToStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button color-orange"
                onClick={this.onClickToReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
