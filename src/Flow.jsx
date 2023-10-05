import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    addEdge,
    Panel,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';

import 'reactflow/dist/style.css'
import defaultNodes from './nodes.js'
import defaultEdges from './edges.js'
import Inputnode from './Inputnode.jsx';
import ColorfulEdge from './ColorfulEdge.jsx';

const nodeColor = (node) => {
    switch (node.type) {
        case 'input':
            return '#6ede87';
        case 'output':
            return '#6865A5';
        default:
            return '#ff0072';
    }
};

const edgeOptions = {
    // animated: true,
    style: {
        stroke: 'red',
    },
};

const connectionLineStyle = { stroke: 'grey' };

let nodeId = 0;

const Flow = () => {
    const [label, setLabel] = useState('');
    const [type, setType] = useState('default');

    const [nodes, setNodes] = useState(defaultNodes);
    const [edges, setEdges] = useState(defaultEdges);

    const onConnect = useCallback((params) => {
        const source = nodes.find((ele) => ele.id === params.source)

        params.type = 'ColorfulEdge'
        params.data = {}

        if(source.type === 'input') {
            params.data.color = 'teal'
        } else {
            params.data.color = 'lightgreen'
        }

        setEdges((eds) => addEdge(params, eds))
    }, [nodes, setEdges]);

    const onNodesChange = useCallback( (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),[] );
    const onEdgesChange = useCallback( (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),[] );
        
    const nodeTypes = useMemo(() => ({ Inputnode }), []);

    const edgeTypes = useMemo(() => ({ ColorfulEdge }), []);

    // ------------------------------
    const handleRadioChange = (event) => {
        setType(event.target.value)
    };

    const onClick = useCallback((e) => {
        e.preventDefault()
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: -370,
                y: 290,
            },
            data: {
                label: label,
            },
            type: type,
        };
        setNodes([...nodes, newNode])
        setLabel('')
    }, [type, label]);

    return (
        <div style={{ width: '80vw', height: '80vh', margin: 'auto', border: '20px solid whitesmoke', boxShadow: 'rgba(0, 0, 0, 0.23) 0px 0px 10px 0px' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={edgeOptions}
                connectionLineStyle={connectionLineStyle}
                fitView
            >
                <Controls />
                <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
                <Background variant="dots" gap={12} size={1} />

                <Panel style={{ background: 'whitesmoke', padding: '10px', boxShadow: 'black 0px 0px 2px 0px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <form onSubmit={onClick} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                            <div style={{ display: 'flex', flexDirection: 'column',fontSize:'x-small', boxShadow: 'black 0px 0px 2px 0px', padding: '5px' }}>
                                Label:
                                <input placeholder='Type Here' type='text' value={label} onChange={(e) => {setLabel(e.target.value)}} required style={{ background: 'white', color: 'black',fontSize:'x-small' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column',fontSize:'x-small' ,boxShadow: 'black 0px 0px 2px 0px', padding: '5px' }}>
                                Type:
                                <label>
                                    <input type="radio" name="myRadio" value="default" defaultChecked={true} onChange={handleRadioChange} />
                                    Default
                                </label>
                                <label>
                                    <input type="radio" name="myRadio" value="input" onChange={handleRadioChange} />
                                    Input
                                </label>
                                <label>
                                    <input type="radio" name="myRadio" value="output" onChange={handleRadioChange} />
                                    Output
                                </label>
                            </div>

                            <button type='submit'>Add Node</button>

                        </form>
                    </div>
                </Panel>

            </ReactFlow>

        </div>
    );
}
export default Flow