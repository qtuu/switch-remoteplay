import { createStyles, withStyles } from '@material-ui/core'
import React from 'react'
import { SendCommand } from '../../key-binding/KeyBinding'
import Diamond from '../Diamond/Diamond'
import VideoStream from '../VideoStream'
import cssClasses from './Controller.module.css'
import ControllerButton from './ControllerButton'
import { ControllerState } from './ControllerState'
import Joystick from './Joystick/Joystick'

const styles = () => createStyles({
	controller: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},

	middle: {
		/* Some of the settings were used before the video was in between the controls. */
		/* display: flex; */
		/* flex-direction: column; */
		/* flex-grow: 1; */
		// TODO Middle should be small or nothing on mobile devices.
		minWidth: '23rem',
	},
})


class Controller extends React.Component<{
	controllerState: ControllerState,
	sendCommand: SendCommand,
	videoStreamProps: any,
	classes: any,
}> {
	render(): React.ReactNode {
		const { classes, sendCommand } = this.props
		const controllerState: ControllerState = this.props.controllerState
		// TODO Pass controllerState to buttons.
		return (
			<div className={classes.controller}>
				<div>
					<div>
						<ControllerButton name='l' sendCommand={sendCommand}
							controllerState={controllerState}
							className={
								cssClasses.LargeButton +
								(controllerState?.l?.isPressed ? " " + cssClasses.Pressed : "")
							}
						>
							<p>L</p>
						</ControllerButton>
						<div className={cssClasses.Row}>
							<ControllerButton name='zl' sendCommand={sendCommand}
								controllerState={controllerState}
								className={
									cssClasses.SmallButton +
									(controllerState?.zl?.isPressed ? " " + cssClasses.Pressed : "")
								}
							>
								<p>ZL</p>
							</ControllerButton>
							<ControllerButton name='minus' sendCommand={sendCommand}
								controllerState={controllerState}
								className={
									cssClasses.Symbol +
									(controllerState?.minus?.isPressed ? " " + cssClasses.PressedAlt : "")
								}
							>
								{/* Slightly wider than a typical minus. */}
								<p>–</p>
							</ControllerButton>
						</div>
					</div>
					<Joystick name='l'
						sendCommand={sendCommand}
						controllerState={controllerState}
						x={controllerState?.leftStick?.horizontalValue || 0}
						y={controllerState?.leftStick?.verticalValue || 0}
						pressed={controllerState?.leftStick?.isPressed}
					/>
					<Diamond
						controllerState={controllerState}
						buttons={[
							{
								symbol: "▶", name: 'right',
								sendCommand,
								controllerState,
								pressed: controllerState?.arrowRight?.isPressed
							},
							{
								symbol: "▼", name: 'down',
								sendCommand,
								controllerState,
								pressed: controllerState?.arrowDown?.isPressed
							},
							{
								symbol: "▲", name: 'up',
								sendCommand,
								controllerState,
								pressed: controllerState?.arrowUp?.isPressed
							},
							{
								symbol: "◀", name: 'left',
								sendCommand,
								controllerState,
								pressed: controllerState?.arrowLeft?.isPressed
							},
						]}
					/>
					<ControllerButton name='capture' sendCommand={sendCommand}
						controllerState={controllerState}
						className={
							cssClasses.Symbol + " " + cssClasses.capture +
							(controllerState?.capture?.isPressed ? " " + cssClasses.PressedAlt : "")
						}
					>
						<p>■</p>
					</ControllerButton>
				</div>
				<div className={classes.middle}>
					<VideoStream {...this.props.videoStreamProps} />
				</div>
				<div>
					<div>
						<ControllerButton name='r' sendCommand={sendCommand}
							controllerState={controllerState}
							className={
								cssClasses.LargeButton +
								(controllerState?.r?.isPressed ? " " + cssClasses.Pressed : "")
							}
						>
							<p>R</p>
						</ControllerButton>
						<div className={cssClasses.Row}>
							<ControllerButton name='plus' sendCommand={sendCommand}
								controllerState={controllerState}
								className={
									cssClasses.Symbol +
									(controllerState?.plus?.isPressed ? " " + cssClasses.PressedAlt : "")
								}
							>
								<p>+</p>
							</ControllerButton>
							<ControllerButton name='zr' sendCommand={sendCommand}
								controllerState={controllerState}
								className={
									cssClasses.SmallButton +
									(controllerState?.zr?.isPressed ? " " + cssClasses.Pressed : "")
								}
							>
								<p>ZR</p>
							</ControllerButton>
						</div>
					</div>
					<Diamond
						buttons={[
							{
								symbol: "a", name: 'a',
								sendCommand,
								controllerState,
								pressed: controllerState?.a?.isPressed
							},
							{
								symbol: "b", name: 'b',
								sendCommand,
								controllerState,
								pressed: controllerState?.b?.isPressed
							},
							{
								symbol: "x", name: 'x',
								sendCommand,
								controllerState,
								pressed: controllerState?.x?.isPressed
							},
							{
								symbol: "y", name: 'y',
								sendCommand,
								controllerState,
								pressed: controllerState?.y?.isPressed
							},
						]}
					/>
					<Joystick name='r'
						sendCommand={sendCommand}
						controllerState={controllerState}
						x={controllerState?.rightStick?.horizontalValue || 0}
						y={controllerState?.rightStick?.verticalValue || 0}
						pressed={controllerState?.rightStick?.isPressed}
					/>
					<ControllerButton name='home' sendCommand={sendCommand}
						controllerState={controllerState}
						className={
							cssClasses.Symbol + " " + cssClasses.home +
							(controllerState?.home?.isPressed ? " " + cssClasses.PressedAlt : "")
						}
					>
						<p>●</p>
					</ControllerButton>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Controller)
