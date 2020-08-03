import help from '../../images/help.gif';
import cut from '../../images/cut.gif';
import copy from '../../images/copy.gif';
import paste from '../../images/paste.gif';
import del from '../../images/delete.gif';
import up from '../../images/up.gif';
import down from '../../images/down.gif';
import group from '../../images/group.gif';
import ungroup from '../../images/ungroup.gif';
import collapse from '../../images/collapse.gif';
import expand from '../../images/expand.gif'; 
import tofront from '../../images/tofront.gif';
import toback from '../../images/toback.gif';
import fillcolor from '../../images/fillcolor.gif';
import linecolor from '../../images/linecolor.gif';
import fontcolor from '../../images/fontcolor.gif'
import bold from '../../images/bold.gif';
import italic from '../../images/italic.gif';
import properties from '../../images/properties.gif';
import link from '../../images/link.gif';
import event from '../../images/symbols/event.png';
import task from '../../images/tasks.gif';
import save from '../../images/save.gif';
import preview from '../../images/preview.gif';
import print from '../../images/print.gif';
import image from '../../images/image.gif';
import select from '../../images/select.gif';
import pan from '../../images/pan.gif';
import connect from '../../images/connect.gif';
import straight from '../../images/straight.gif';
import swimlane from '../../images/swimlane.gif';
import undo from '../../images/undo.gif';
import redo from '../../images/redo.gif';
import rectangle from '../../images/rectangle.gif';
import rounded from '../../images/rounded.gif';
import ellipse from '../../images/ellipse.gif';
import rhombus from '../../images/rhombus.gif';
import actor from '../../images/actor.gif';
import small_event from '../../images/symbols/small_event.gif';
import event_intermediate from '../../images/symbols/event_intermediate.png';
import small_event_intermediate from '../../images/symbols/small_event_intermediate.gif';
import event_end from '../../images/symbols/event_end.png';
import small_event_end from '../../images/symbols/small_event_end.gif';
import timer from '../../images/symbols/timer.png';
import small_timer from '../../images/symbols/small_timer.gif';
import message from '../../images/symbols/message.png';
import small_message from '../../images/symbols/small_message.gif';
import msg_intermediate from '../../images/symbols/message_intermediate.png';
import small_msg_intermediate from '../../images/symbols/small_message_intermediate.gif';
import msg_end from '../../images/symbols/message_end.png';
import small_msg_end from '../../images/symbols/small_message_end.gif';
import terminate from '../../images/symbols/terminate.png';
import small_terminate from '../../images/symbols/small_terminate.gif';
import slink from '../../images/symbols/link.png';
import small_link from '../../images/symbols/small_link.gif';
import rule from '../../images/symbols/rule.png';
import small_rule from '../../images/symbols/small_rule.gif';
import multiple from '../../images/symbols/multiple.png';
import small_multiple from '../../images/symbols/small_multiple.gif';
import error from '../../images/symbols/error.png';
import small_error from '../../images/symbols/small_error.gif';
import cancel_end from '../../images/symbols/cancel_end.png';
import small_cancel_end from '../../images/symbols/small_cancel_end.gif';
import cancel_intermediate from '../../images/symbols/cancel_intermediate.png';
import small_cancel_intermediate from '../../images/symbols/small_cancel_intermediate.gif';
import fork from '../../images/symbols/fork.png';
import small_fork from '../../images/symbols/small_fork.gif';
import merge from '../../images/symbols/merge.png';
import small_merge from '../../images/symbols/small_merge.gif';
import inclusive from '../../images/symbols/inclusive.png';
import small_inclusive from '../../images/symbols/small_inclusive.gif';
import zoom from '../../images/zoom.gif';
import zoomin from '../../images/zoomin.gif';
import zoomout from '../../images/zoomout.gif';
import zoomactual from '../../images/zoomactual.gif';
import outline from '../../images/outline.gif';
import console_image from '../../images/console.gif';

export default function wfeditorConfig() {
	return `<mxEditor defaultGroup="group" defaultEdge="edge" helpWindowImage="` + help + `" tasksWindowImage="`+ task +`" forcedInserting="0" swimlaneRequired="0">
	<ui>
		<resource basename="resources/app"/>
	</ui>
	<ui>
		<add as="graph" element="graph"/>
		<add as="toolbar" element="toolbar"/>
	</ui>

	<mxDefaultPopupMenu as="popupHandler">
		<add as="cut" action="cut" icon="` + cut+ `"/>
		<add as="copy" action="copy" icon="` + copy + `"/>
		<add as="paste" action="paste" icon="` + paste + `"/>
		<separator/>
		<add as="delete" action="delete" icon="` + del + `" if="cell"/>
		<separator/>
		<add as="exitGroup" action="exitGroup" icon="`+ up +`" if="notRoot"/>
		<add as="enterGroup" action="enterGroup" icon="`+ down +`" if="validRoot"/>
		<separator/>
		<add as="shape" if="cell">
			<add as="group" action="group" icon="`+ group +`" if="ncells"/>
			<add as="ungroup" action="ungroup" icon="`+ ungroup +`" if="cell"/>
			<separator/>
			<add as="removeFromParent" action="removeFromParent" if="cell"/>
			<separator/>
			<add as="collapse" action="collapse" icon="`+ collapse +`" if="expandable"/>
			<add as="expand" action="expand" icon="`+ expand +`" if="collapsable"/>
			<separator/>
			<add as="toFront" action="toFront" icon="`+ tofront  +`" if="cell"/>
			<add as="toBack" action="toBack" icon="`+ toback +`" if="cell"/>
			<separator/>
			<add as="editStyle" action="editStyle" if="cell"/>
		</add>
		<add as="format" if="cell">
			<add as="fillColor" action="fillColor" icon="`+ fillcolor +`" if="cell"/>
			<add as="gradientColor" action="gradientColor" if="cell"/>
			<add as="strokeColor" action="strokeColor" icon="`+ linecolor +`" if="cell"/>
			<separator/>
			<add as="toggleRounded" action="toggleRounded" if="cell"/>
			<add as="toggleShadow" action="toggleShadow" if="cell"/>
		</add>
		<add as="font" if="cell">
			<add as="fontColor" action="fontColor" icon="`+ fontcolor +`" if="cell"/>
			<add as="fontFamily" action="fontFamily" if="cell"/>
			<add as="fontSize" action="fontSize" if="cell"/>
			<separator/>
			<add as="bold" action="bold" icon="`+ bold +`" if="cell"/>
			<add as="italic" action="italic" icon="`+ italic +`" if="cell"/>
		</add>
		<separator/>
		<add as="properties" action="showProperties" icon="`+ properties +`"/>
		<separator/>
		<add as="openHref" action="openHref" icon="`+ link +`"/>
	</mxDefaultPopupMenu>
	<mxDefaultKeyHandler as="keyHandler">
		<add as="8" action="collapse"/>
		<add as="13" action="expand"/>
		<add as="33" action="exitGroup"/>
		<add as="34" action="enterGroup"/>
		<add as="35" action="refresh"/>
		<add as="36" action="home"/>
		<add as="37" action="selectPrevious"/>
		<add as="38" action="selectParent"/>
		<add as="40" action="selectChild"/>
		<add as="39" action="selectNext"/>
		<add as="46" action="delete"/>
		<add as="65" control="1" action="selectAll"/>
		<add as="90" control="1" action="undo"/>
		<add as="89" control="1" action="redo"/>
		<add as="88" control="1" action="cut"/>
		<add as="67" control="1" action="copy"/>
		<add as="86" control="1" action="paste"/>
		<add as="71" control="1" action="group"/>
		<add as="85" control="1" action="ungroup"/>
		<add as="113" action="edit"/>
		<add as="123" action="showProperties"/>
		<add as="107" action="zoomIn"/>
		<add as="109" action="zoomOut"/>
	</mxDefaultKeyHandler>
	<Array as="actions">
		<add as="open"><![CDATA[
			function (editor)
			{
				editor.open(mxUtils.prompt('Enter filename', 'workflow.xml'));
			}
		]]>		</add>
		<add as="openHref"><![CDATA[
			function (editor, cell)
			{
				cell = cell || editor.graph.getSelectionCell();
				
				if (cell == null)
				{
					cell = editor.graph.getCurrentRoot();

					if (cell == null)
					{
						cell = editor.graph.getModel().getRoot();
					}
				}

				if (cell != null)
				{
					var href = cell.getAttribute('href');
					
					if (href != null && href.length > 0)
					{
						window.open(href);
					}
					else
					{
						mxUtils.alert('No URL defined. Showing properties...');
						editor.execute('showProperties', cell);
					}
				}
			}
		]]>		</add>
		<add as="editStyle"><![CDATA[
			function (editor)
			{
				var cell = editor.graph.getSelectionCell();
				
				if (cell != null)
				{
					var model = editor.graph.getModel();
					var style = mxUtils.prompt(mxResources.get('enterStyle'), model.getStyle(cell) || '');

					if (style != null)
					{
						model.setStyle(cell, style);
					}
				}
			}
		]]>		</add>
		<add as="fillColor"><![CDATA[
			function (editor)
			{
				var color = mxUtils.prompt(mxResources.get('enterColorname'), 'red');
				
				if (color != null)
				{
					editor.graph.model.beginUpdate();
					try
					{
						editor.graph.setCellStyles("strokeColor", color);
						editor.graph.setCellStyles("fillColor", color);
					}
					finally
					{
						editor.graph.model.endUpdate();
					}
				}
			}
		]]>		</add>
		<add as="gradientColor"><![CDATA[
			function (editor)
			{
				var color = mxUtils.prompt(mxResources.get('enterColorname'), 'white');
				
				if (color != null)
				{
					editor.graph.setCellStyles("gradientColor", color);
				}
			}
		]]>		</add>
		<add as="strokeColor"><![CDATA[
			function (editor)
			{
				var color = mxUtils.prompt(mxResources.get('enterColorname'), 'red');
				
				if (color != null)
				{
					editor.graph.setCellStyles("strokeColor", color);
				}
			}
		]]>		</add>
		<add as="fontColor"><![CDATA[
			function (editor)
			{
				var color = mxUtils.prompt(mxResources.get('enterColorname'), 'red');
				
				if (color != null)
				{
					editor.graph.setCellStyles("fontColor", color);
				}
			}
		]]>		</add>
		<add as="fontFamily"><![CDATA[
			function (editor)
			{
				var family = mxUtils.prompt(mxResources.get('enterFontfamily'), 'Arial');
				
				if (family != null && family.length > 0)
				{
					editor.graph.setCellStyles("fontFamily", family);
				}
			}
		]]>		</add>
		<add as="fontSize"><![CDATA[
			function (editor)
			{
				var size = mxUtils.prompt(mxResources.get('enterFontsize'), '10');
				
				if (size != null && size > 0 && size < 999)
				{
					editor.graph.setCellStyles("fontSize", size);
				}
			}
		]]>		</add>
		<add as="image"><![CDATA[
			function (editor)
			{
				var image = mxUtils.prompt(mxResources.get('enterImageUrl'),
					'examples/`+ image+`');
				
				if (image != null)
				{
					editor.graph.setCellStyles("image", image);
				}
			}
		]]>		</add>
		<add as="opacity"><![CDATA[
			function (editor)
			{
				var opacity = mxUtils.prompt(mxResources.get('enterOpacity'), '100');
				
				if (opacity != null && opacity >= 0 && opacity <= 100)
				{
					editor.graph.setCellStyles("opacity", opacity);
				}
			}
		]]>		</add>
		<add as="straightConnector"><![CDATA[
			function (editor)
			{
				editor.graph.setCellStyle("straightEdge");
			}
		]]>		</add>
		<add as="elbowConnector"><![CDATA[
			function (editor)
			{
				editor.graph.setCellStyle("");
			}
		]]>		</add>
		<add as="arrowConnector"><![CDATA[
			function (editor)
			{
				editor.graph.setCellStyle("arrowEdge");
			}
		]]>		</add>
		<add as="toggleOrientation"><![CDATA[
			function (editor, cell)
			{
				editor.graph.toggleCellStyles(mxConstants.STYLE_HORIZONTAL, true);
			}
		]]>		</add>
		<add as="toggleRounded"><![CDATA[
			function (editor)
			{
				editor.graph.toggleCellStyles(mxConstants.STYLE_ROUNDED);
			}
		]]>		</add>
		<add as="toggleShadow"><![CDATA[
			function (editor)
			{
				editor.graph.toggleCellStyles(mxConstants.STYLE_SHADOW);
			}
		]]>		</add>
		<add as="horizontalTree"><![CDATA[
			function (editor, cell)
			{
				cell = cell || editor.graph.getSelectionCell();
				
				if (cell == null)
				{
					cell = editor.graph.getDefaultParent();
				}
				
				editor.treeLayout(cell, true);
			}
		]]>		</add>
		<add as="verticalTree"><![CDATA[
			function (editor, cell)
			{
				cell = cell || editor.graph.getSelectionCell();
				
				if (cell == null)
				{
					cell = editor.graph.getDefaultParent();
				}
				
				editor.treeLayout(cell, false);
			}
		]]>		</add>
	</Array>
	<add as="onInit">
		function ()
		{
			this.showTasks();
		}
	</add>
	<Array as="cycleAttributeValues">
		<add value="#83027F"/>
		<add value="#66B922"/>
		<add value="#808913"/>
		<add value="#CF0056"/>
		<add value="#4679B6"/>
	</Array>
	<Array as="templates">
		<add as="group">
			<Group label="" description="" href="">
				<mxCell vertex="1" style="group" connectable="0"/>
			</Group>
		</add>
		<add as="edge">
			<Edge label="" description="">
				<mxCell edge="1">
					<mxGeometry as="geometry" relative="1"/>
				</mxCell>
			</Edge>
		</add>
		<add as="swimlane">
			<Swimlane label="Swimlane" description="" href="">
				<mxCell vertex="1" style="swimlane" connectable="0">
					<mxGeometry as="geometry" width="300" height="160"/>
				</mxCell>
			</Swimlane>
		</add>
		<add as="task">
			<Task label="Task" description="" href="">
				<mxCell vertex="1">
					<mxGeometry as="geometry" width="72" height="32"/>
				</mxCell>
			</Task>
		</add>
		<add as="subprocess">
			<Subprocess label="Subprocess" description="" href="">
				<mxCell vertex="1" style="rounded">
					<mxGeometry as="geometry" width="72" height="32"/>
				</mxCell>
			</Subprocess>
		</add>
		<add as="shape">
			<Shape label="" description="" href="">
				<mxCell vertex="1" style="ellipse">
					<mxGeometry as="geometry" width="32" height="32"/>
				</mxCell>
			</Shape>
		</add>
		<add as="symbol">
			<Symbol label="Symbol" description="" href="">
				<mxCell vertex="1" style="symbol;image=`+ event +`">
					<mxGeometry as="geometry" width="32" height="32"/>
				</mxCell>
			</Symbol>
		</add>
	</Array>
	<add as="createTasks2"><![CDATA[
		function(div){
			alert('danh');
		}
	]]></add>
	<add as="createTasks"><![CDATA[
		function (div)
		{
			var off = 30;
			
			if (this.graph != null)
			{
				var layer = this.graph.model.root.getChildAt(0);
				mxUtils.para(div,  mxResources.get('examples'));
				mxUtils.linkInvoke(div, mxResources.get('newDiagram'), this,
					'open', 'diagrams/empty.xml', off);
				mxUtils.br(div);
				mxUtils.linkInvoke(div, mxResources.get('swimlanes'), this,
					'open', 'diagrams/swimlanes.xml', off);
				mxUtils.br(div);
				mxUtils.linkInvoke(div, mxResources.get('travelBooking'), this,
					'open', 'diagrams/travel-booking.xml', off);
				mxUtils.br(div);
				
				if (!this.graph.isSelectionEmpty())
				{
					var cell = this.graph.getSelectionCell();
					if (this.graph.getSelectionCount() == 1 &&
						(this.graph.model.isVertex(cell) &&
						cell.getEdgeCount() > 0) || this.graph.isSwimlane(cell))
					{
						mxUtils.para(div, 'Layout');
						mxUtils.linkAction(div, mxResources.get('verticalTree'),
							this, 'verticalTree', off);
						mxUtils.br(div);
						mxUtils.linkAction(div, mxResources.get('horizontalTree'),
							this, 'horizontalTree', off);
						mxUtils.br(div);
					}
					
					mxUtils.para(div, 'Format');
					
					if (mxUtils.isNode(cell.value, 'Symbol'))
					{
						mxUtils.linkAction(div, mxResources.get('image'),
							this, 'image', off);
						mxUtils.br(div);
					}
					else
					{
						mxUtils.linkAction(div, mxResources.get('opacity'),
							this, 'opacity', off);
						mxUtils.br(div);
						if (this.graph.model.isVertex(cell) ||
							(cell.style != null && 
							cell.style.indexOf("arrowEdge") >= 0))
						{
							mxUtils.linkAction(div, mxResources.get('gradientColor'),
								this, 'gradientColor', off);
							mxUtils.br(div);
						}
						if (this.graph.model.isEdge(cell))
						{
							mxUtils.linkAction(div, 'Straight Connector', this, 'straightConnector', off);
							mxUtils.br(div);
							mxUtils.linkAction(div, 'Elbow Connector', this, 'elbowConnector', off);
							mxUtils.br(div);
							mxUtils.linkAction(div, 'Arrow Connector', this, 'arrowConnector', off);
							mxUtils.br(div);
						}
					}
					
					mxUtils.linkAction(div, 'Rounded', this, 'toggleRounded', off);
					mxUtils.br(div);
					if (this.graph.isSwimlane(cell) || this.graph.model.isEdge(cell))
					{
						mxUtils.linkAction(div, 'Orientation', this, 'toggleOrientation', off);
						mxUtils.br(div);
					}
					
					if (this.graph.getSelectionCount() > 1)
					{
						mxUtils.para(div, mxResources.get('align'));
						mxUtils.linkAction(div, mxResources.get('left'),
							this, 'alignCellsLeft', off);
						mxUtils.br(div);
						mxUtils.linkAction(div, mxResources.get('center'),
							this, 'alignCellsCenter', off);
						mxUtils.br(div);
						mxUtils.linkAction(div, mxResources.get('right'),
							this, 'alignCellsRight', off);
						mxUtils.br(div);
						mxUtils.linkAction(div, mxResources.get('top'),
							this, 'alignCellsTop', off);
						mxUtils.br(div);
						mxUtils.linkAction(div, mxResources.get('middle'),
							this, 'alignCellsMiddle', off);
						mxUtils.br(div);
						mxUtils.linkAction(div, mxResources.get('bottom'),
							this, 'alignCellsBottom', off);
						mxUtils.br(div);
					}
					
					mxUtils.para(div, mxResources.get('selection'));
					mxUtils.linkAction(div, mxResources.get('clearSelection'),
						this, 'selectNone', off);
					mxUtils.br(div);
				}
				else if (layer.getChildCount() > 0)
				{
					mxUtils.para(div, mxResources.get('selection'));
					mxUtils.linkAction(div, mxResources.get('selectAll'),
						this, 'selectAll', off);
					mxUtils.br(div);
				}
				
				mxUtils.br(div);
			}
		}
	]]>	</add>


	
	<mxDefaultToolbar as="toolbar">
		<add as="save" action="save" icon="`+ save +`"/>
		<add as="show" action="show" icon="`+ preview +`"/>
		<add as="print" action="print" icon="`+ print +`"/>
		<add as="exportImage" action="exportImage" icon="`+ image+`"/>
		<br/>
		<hr/>
		<add as="select" mode="select" icon="`+ select +`"/>
		<add as="pan" mode="pan" icon="`+ pan +`"/>
		<add as="connect" mode="connect" icon="`+ connect +`"><![CDATA[
		function (editor)
		{
			if (editor.defaultEdge != null)
			{
				editor.defaultEdge.style = null;
			}
		}
	]]>		</add>
		<add as="connect" mode="connect" icon="`+ straight +`"><![CDATA[
		function (editor)
		{
			if (editor.defaultEdge != null)
			{
				editor.defaultEdge.style = 'straightEdge';
			}
		}
	]]>		</add>
		<br/>
		<hr/>
		<add as="undo" action="undo" icon="`+ undo +`"/>
		<add as="redo" action="redo" icon="`+ redo +`"/>
		<br/>
		<hr/>
		<add as="cut" action="cut" icon="` + cut+ `"/>
		<add as="copy" action="copy" icon="` + copy + `"/>
		<add as="paste" action="paste" icon="` + paste + `"/>
		<add as="delete" action="delete" icon="` + del + `"/>
		<br/>
		<hr/>
		<add as="group" action="group" icon="`+ group +`"/>
		<add as="ungroup" action="ungroup" icon="`+ ungroup +`"/>
		<br/>
		<hr/>
		<add as="Swimlane" template="swimlane" icon="`+ swimlane +`"/>
		<add as="Task" template="task" icon="`+ rectangle +`"/>
		<add as="Subprocess" template="subprocess" icon="`+ rounded +`"/>
		<add as="Ellipse" template="shape" style="ellipse" icon="`+ ellipse +`"/>
		<add as="Rhombus" template="shape" style="rhombus" icon="`+ rhombus +`"/>
		<add as="Actor" template="shape" style="actor" icon="`+ actor +`"/>
		<br/>
		<hr/>
		<add as="Event" template="symbol" style="symbol;image=`+ event +`" icon="`+ small_event +`"/>
		<add as="Event (Intermediate)" template="symbol" style="symbol;image=`+ event_intermediate +`" icon="`+ small_event_intermediate +`"/>
		<add as="Event (End)" template="symbol" style="symbol;image=`+ event_end +`" icon="`+ small_event_end +`"/>
		<add as="Timer" template="symbol" style="symbol;image=`+ timer +`" icon="`+ small_timer +`"/>
		<add as="Message" template="symbol" style="symbol;image=`+ message +`" icon="`+ small_message +`"/>
		<add as="Message (Intermediate)" template="symbol" style="symbol;image=`+ msg_intermediate +`" icon="`+ small_msg_intermediate +`"/>
		<add as="Message (End)" template="symbol" style="symbol;image=`+ msg_end +`" icon="`+ small_msg_end +`"/>
		<add as="Terminate" template="symbol" style="symbol;image=`+ terminate +`" icon="`+ small_terminate +`"/>
		<add as="Link" template="symbol" style="symbol;image=`+ slink +`" icon="`+ small_link +`"/>
		<add as="Rule" template="symbol" style="symbol;image=`+ rule +`" icon="`+ small_rule +`"/>
		<add as="Multiple" template="symbol" style="symbol;image=`+ multiple +`" icon="`+ small_multiple +`"/>
		<add as="Error" template="symbol" style="symbol;image=`+ error  +`" icon="`+ small_error  +`"/>
		<add as="Cancel (End)" template="symbol" style="symbol;image=`+ cancel_end +`" icon="`+ small_cancel_end +`"/>
		<add as="Cancel (Intermediate)" template="symbol" style="symbol;image=`+ cancel_intermediate +`" icon="`+ small_cancel_intermediate +`"/>
		<add as="Fork" template="symbol" style="symbol;image=`+ fork +`" icon="`+ small_fork +`"/>
		<add as="Merge" template="symbol" style="symbol;image=`+ merge +`" icon="`+ small_merge +`"/>
		<add as="Inclusive" template="symbol" style="symbol;image=`+ inclusive +`" icon="`+ small_inclusive +`"/>
		<br/>
		<hr/>
		<add as="fit" action="fit" icon="`+ zoom +`"/>
		<add as="zoomIn" action="zoomIn" icon="`+ zoomin +`"/>
		<add as="zoomOut" action="zoomOut" icon="`+ zoomout +`"/>
		<add as="actualSize" action="actualSize" icon="`+ zoomactual +`"/>
		<add as="zoom" action="zoom" icon="`+ zoom +`"/>
		<br/>
		<hr/>
		<add as="outline" action="toggleOutline" icon="`+ outline +`"/>
		<add as="tasks" action="toggleTasks" icon="`+ task +`"/>
		<add as="help" action="toggleHelp" icon="` + help + `"/>
		<add as="console" action="toggleConsole" icon="`+ console_image +`"/>
	</mxDefaultToolbar>

	<mxGraph as="graph" alternateEdgeStyle="verticalEdge" dropEnabled="1">
		<add as="isAutoSizeCell"><![CDATA[
		function(cell)
		{
			return this.isSwimlane(cell);
		}
	]]>		</add>
		<add as="isSwimlane"><![CDATA[
		function (cell)
		{
			return mxUtils.isNode(this.model.getValue(cell), 'swimlane');
		}
	]]>		</add>
		<add as="isAllowOverlapParent"><![CDATA[
		function(cell)
		{
			return !this.isSwimlane(cell.parent);
		}
	]]>		</add>
		<add as="getTooltipForCell"><![CDATA[
		function(cell)
		{
			var href = cell.getAttribute('href');
			href = (href != null && href.length > 0) ?
				'<br>'+href : '';
			var maxlen = 30;
			var desc = cell.getAttribute('description');
			if (desc == null || desc.length == 0)
			{
				desc = '';
			}
			else if (desc.length < maxlen)
			{
				desc = '<br>'+desc;
			}
			else
			{
				desc = '<br>'+desc.substring(0, maxlen)+'...';
			}
			return '<b>'+cell.getAttribute('label')+
					'</b> ('+cell.getId()+')'+href+desc+
					'<br>Edges: '+cell.getEdgeCount()+
					'<br>Children: '+cell.getChildCount();
		}
	]]>		</add>
		<add as="convertValueToString">
		function(cell)
		{
			return cell.getAttribute('label');
		}
		</add>
		<mxGraphModel as="model">
			<add as="valueForCellChanged"><![CDATA[
			function(cell, value)
			{
				var previous = null;
				
				if (isNaN(value.nodeType))
				{
					previous = cell.getAttribute('label');
					cell.setAttribute('label', value);
				}
				else
				{
					previous = cell.value;
					cell.value = value;
				}
				
				return previous;
			}
		]]>			</add>
			<root>
				<Workflow label="MyWorkflow" description="" href="" id="0"/>
				<Layer label="Default Layer">
					<mxCell parent="0"/>
				</Layer>
			</root>
		</mxGraphModel>
		<mxStylesheet as="stylesheet">
			<add as="defaultVertex">
				<add as="shape" value="label"/>
				<add as="perimeter" value="rectanglePerimeter"/>
				<add as="labelBackgroundColor" value="white"/>
				<add as="fontSize" value="10"/>
				<add as="align" value="center"/>
				<add as="verticalAlign" value="middle"/>
				<add as="strokeColor" value="black"/>
			</add>
			<add as="defaultEdge">
				<add as="shape" value="connector"/>
				<add as="labelBackgroundColor" value="white"/>
				<add as="rounded" value="1"/>
				<add as="edgeStyle" value="elbowEdgeStyle"/>
				<add as="endArrow" value="classic"/>
				<add as="fontSize" value="10"/>
				<add as="align" value="center"/>
				<add as="verticalAlign" value="middle"/>
				<add as="strokeColor" value="black"/>
			</add>
			<add as="verticalEdge">
				<add as="elbow" value="vertical"/>
			</add>
			<add as="straightEdge">
				<add as="shape" value="connector"/>
				<add as="endArrow" value="classic"/>
			</add>
			<add as="arrowEdge">
				<add as="shape" value="arrow"/>
				<add as="fillColor" value="red"/>
			</add>
			<add as="swimlane">
				<add as="shape" value="swimlane"/>
				<add as="fontSize" value="12"/>
				<add as="startSize" value="23"/>
				<add as="horizontal" value="0"/>
				<add as="verticalAlign" value="top"/>
				<add as="fontColor" value="white"/>
				<add as="labelBackgroundColor" value="none"/>
			</add>
			<add as="group">
				<add as="shape" value="rectangle"/>
				<add as="rounded" value="1"/>
				<add as="verticalAlign" value="top"/>
				<add as="strokeColor" value="black"/>
				<add as="dashed" value="1"/>
				<add as="opacity" value="50"/>
			</add>
			<add as="rounded">
				<add as="rounded" value="1"/>
			</add>
			<add as="ellipse">
				<add as="shape" value="ellipse"/>
				<add as="perimeter" value="ellipsePerimeter"/>
			</add>
			<add as="rhombus">
				<add as="shape" value="rhombus"/>
				<add as="perimeter" value="rhombusPerimeter"/>
			</add>
			<add as="actor">
				<add as="shape" value="actor"/>
			</add>
			<add as="symbol">
				<add as="shape" value="image"/>
				<add as="perimeter" value="rectanglePerimeter"/>
				<add as="labelBackgroundColor" value="white"/>
				<add as="fontSize" value="10"/>
				<add as="align" value="center"/>
				<add as="verticalAlign" value="top"/>
				<add as="verticalLabelPosition" value="bottom"/>
			</add>
		</mxStylesheet>
	</mxGraph>

</mxEditor>
`;
}
