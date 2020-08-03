import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { ConfigurationPanel } from "./components/ConfigurationPanel";
import ResizablePanels from "./components/ResizablePanels/ResizablePanels";
import 'semantic-ui-css/semantic.css';
import GraphEditor from "./components/GraphEditor/GraphEditor";
import {
	Icon,
	Menu,
	Segment,
	Sidebar,
	Header,
} from "semantic-ui-react";

function App() {
	const [isOpen, setOpen] = useState(false);
	
	const toggleSideBar = () =>{
		setOpen(!isOpen);
	}
	return (
		<>	
			<Header as='h4' block style={{marginBottom: 0}}>
				<Icon color='blue' link name="sidebar" onClick={() => toggleSideBar()}/>Model Process Workflow
			</Header>
			
		
			<Sidebar.Pushable as={Segment} style={{marginTop: 0}}>
				<Sidebar
					as={Menu}
					animation="slide out"
					icon="labeled"
					inverted					
					direction="left"
					vertical={true}
					visible={isOpen}
					width="thin"					
				>
					<Menu.Item as="a">
						<Icon name="home" onClick={() => alert("ok")} />
						Home
					</Menu.Item>
					<Menu.Item as="a">
						<Icon name="gamepad" />
						Games
					</Menu.Item>
					<Menu.Item as="a">
						<div id="toolbar" />
					</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher>
					<Segment basic>
						<ResizablePanels>
							<GraphEditor></GraphEditor>
							<ConfigurationPanel></ConfigurationPanel>
						</ResizablePanels>
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</>
	);
}

export default hot(App);
