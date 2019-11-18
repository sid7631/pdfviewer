import React, { Component } from 'react'
import { MdSearch, MdSkipPrevious, MdSkipNext, MdRemove, MdAdd} from 'react-icons/md'
import './PdfViewer.css'

export default class PdfViewer extends Component {
    render() {
        return (
            <div id="PdfViewer">
                <div className="d-flex justify-content-around">
                <div id="outerContainer">
                    <div id="mainContainer">
                        <div id="toolbar">
                            <div id="toolbarContainer">
                                <div id="toolbarViewer">
                                <div className="d-flex justify-content-between">
                                    <div id="toolbarViewerLeft">
                                        <div className="d-flex justify-content-around">
                                            <button id="viewFind" className="toolbarButton" title="Find Document" tabIndex="12">
                                                <span><MdSearch color={'white'} size={20}/></span>
                                            </button>
                                            <div className="splitToolbarButton">
                                                <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                    <span><MdSkipPrevious color={'white'} size={20}/></span>
                                                </button>
                                                <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                    <span><MdSkipNext color={'white'} size={20}/></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="toolbarViewerMiddle">
                                    <div className="d-flex justify-content-around">
                                            <div className="splitToolbarButton">
                                                <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                    <span><MdRemove color={'white'} size={20}/></span>
                                                </button>
                                                <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                    <span><MdAdd color={'white'} size={20}/></span>
                                                </button>
                                            </div>
                                        </div>                                       
                                    </div>
                                    <div id="toolbarViewerRight"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="viewContainer">
                        
                            <div id="viewer1" className="pdfViewer">
                                <div className="page" >
                                    <div className="canvasWrapper">
                                        <canvas id="page1" />
                                    </div>
                                </div>
                                <div className="page">
                                    <div className="canvasWrapper">
                                        <canvas id="page2"  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="outerContainer">
                    <div id="mainContainer">
                        <div id="toolbar">
                            <div id="toolbarContainer">
                                <div id="toolbarViewer">
                                <div className="d-flex justify-content-between">
                                    <div id="toolbarViewerLeft">
                                    <div className="d-flex justify-content-around">
                                        <button id="viewFind" className="toolbarButton" title="Find Document" tabIndex="12">
                                            <span><MdSearch color={'white'} size={20}/></span>
                                        </button>
                                        <div className="splitToolbarButton">
                                            <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                <span><MdSkipPrevious color={'white'} size={20}/></span>
                                            </button>
                                            <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                <span><MdSkipNext color={'white'} size={20}/></span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="toolbarViewerMiddle">
                                    <div className="d-flex justify-content-around">
                                            <div className="splitToolbarButton">
                                                <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                    <span><MdRemove color={'white'} size={20}/></span>
                                                </button>
                                                <button className="toolbarButton" title="Previous Page" id="previous" tabIndex="13">
                                                    <span><MdAdd color={'white'} size={20}/></span>
                                                </button>
                                            </div>
                                        </div>                                       
                                    
                                    </div>
                                    <div id="toolbarViewerRight"></div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div id="viewContainer">
                        
                            <div id="viewer" className="pdfViewer">
                                <div className="page" >
                                    <div className="canvasWrapper">
                                        <canvas id="page1" />
                                    </div>
                                </div>
                                <div className="page">
                                    <div className="canvasWrapper">
                                        <canvas id="page2"  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
