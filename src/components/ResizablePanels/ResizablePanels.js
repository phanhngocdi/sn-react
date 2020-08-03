import React, { Component } from "react";
import ReactDOM from "react-dom";
import './ResizablePanels.css'

export default class ResizablePanels extends Component {
	eventHandler = null;

	constructor(props) {
		super(props);

		this.state = {
			isDragging: false,
			panels: ["70%", "30%"],
		};
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this).addEventListener(
			"mousemove",
			this.resizePanel
		);
		ReactDOM.findDOMNode(this).addEventListener("mouseup", this.stopResize);
		ReactDOM.findDOMNode(this).addEventListener(
			"mouseleave",
			this.stopResize
		);
	}

	startResize = (event, index) => {
		this.setState({
			isDragging: true,
			currentPanel: index,
			initialPos: event.clientY,
		});
	};

	stopResize = () => {
		if (this.state.isDragging) {
			console.log(this.state);
			this.setState(({ panels, currentPanel, delta }) => ({
				isDragging: false,
				panels: {
					...panels,
					[currentPanel]: (isNaN(panels[currentPanel])
						? (parseFloat(panels[currentPanel]) *
							window.innerHeight) /
						100
						: panels[currentPanel] || 0) - delta,
					[currentPanel - 1]: (isNaN(panels[currentPanel - 1])
						? (parseFloat(panels[currentPanel - 1]) *
							window.innerHeight) /
						100
						: panels[currentPanel - 1] || 0) + delta,
				},
				delta: 0,
				currentPanel: null,
			}));
		}
	};

	resizePanel = (event) => {
		if (this.state.isDragging) {
			const delta = event.clientY - this.state.initialPos;
			this.setState({
				delta: delta,
			});
		}
	};

	render() {
		const rest = this.props.children.slice(1);
		return (
			<div
				className="panel-container"
				onMouseUp={() => this.stopResize()}
			>
				<div className="panel" style={{ height: this.state.panels[0] }}>
					{this.props.children[0]}
				</div>
				{[].concat(
					...rest.map((child, i) => {
						return [
							<div
								onMouseDown={(e) => this.startResize(e, i + 1)}
								key={"resizer_" + i}
								style={
									this.state.currentPanel === i + 1
										? { top: this.state.delta }
										: {}
								}
								className="resizer"
							></div>,
							<div
								key={"panel_" + i}
								className="panel"
								style={{ height: this.state.panels[i + 1] }}
							>
								{child}
							</div>,
						];
					})
				)}
			</div>
		);
	}
}