import React, { useEffect, useState } from "react";
import mxGraphFactory from "mxgraph";
import "./GraphEditor.css";


const {
	mxClient,
	mxGraphModel,
	mxGraph,
	mxEditor,
	mxUtils,
	mxConstants,	
	mxEvent,
	mxObjectCodec,
	mxPanningManager,
	mxGraphHandler,
	mxDefaultToolbar,
	mxDefaultKeyHandler,
	mxDefaultPopupMenu,
	mxCell,
	mxGeometry,
	mxStylesheet,
} = new mxGraphFactory();

import wfeditorConfig from './wfeditorTemplate';

// var mxLoadResources = true;

export default function GraphEditor() {
	
	const [editor, setEditor] = useState(null);
		
	const createEditor = () => {
		let editor = null;
		try {
			if (!mxClient.isBrowserSupported()) {
				mxUtils.error("Browser is not supported!", 200, false);
			} else {
				//let container = ReactDOM.findDOMNode(this.refs.divGraph);
				mxGraph.prototype.htmlLabels = true;

				mxGraph.prototype.isWrapping = function () {
					return true;
				};

				mxConstants.DEFAULT_HOTSPOT = 1;

				// Enables guides
				mxGraphHandler.prototype.guidesEnabled = true;

				mxObjectCodec.allowEval = true;
				
				const xml = mxUtils.parseXml(wfeditorConfig()) ;
				var node = xml.documentElement;

				window["mxEditor"] = mxEditor;
				window["mxDefaultToolbar"] = mxDefaultToolbar;
				window["mxGraph"] = mxGraph;
				window["mxDefaultKeyHandler"] = mxDefaultKeyHandler;
				window["mxDefaultPopupMenu"] = mxDefaultPopupMenu;
				window["mxGeometry"] = mxGeometry;
				window["mxCell"] = mxCell;
				window["mxGraphModel"] = mxGraphModel;
				window["mxStylesheet"] = mxStylesheet;

				editor = new mxEditor(node);

				mxObjectCodec.allowEval = false;

				// Adds active border for panning inside the container
				editor.graph.createPanningManager = function () {
					var pm = new mxPanningManager(this);
					pm.border = 30;

					return pm;
				};

				editor.graph.allowAutoPanning = true;
				editor.graph.timerAutoScroll = true;
				editor.graph.setConnectable(true);

				// Updates the window title after opening new files
				var title = document.title;
				var funct = function (sender) {
					document.title = title + " - " + sender.getTitle();
				};

				editor.addListener(mxEvent.OPEN, funct);

				// Prints the current root in the window title if the
				// current root of the graph changes (drilling).
				editor.addListener(mxEvent.ROOT, funct);
				funct(editor);

				editor.graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt){
					//alert(evt);
					console.log(event.toString());
				});
        
				// Displays version in statusbar
				editor.setStatus("mxGraph " + mxClient.VERSION);
			}
		} catch (e) {
			// Shows an error message if the editor cannot start
			mxUtils.alert("Cannot start application: " + e.message);
			throw e; // for debugging
		}

		return editor;
	};

	useEffect(() => {
		if (editor == null) {
			let temp = createEditor();
			setEditor(temp);
		}

	});
	
	
	return (
		<div id="graph" className="base" />
	);
}



