import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function Inputnode({ data, isConnectable }) {

    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <div style={{
                height: '28px',
                border: '1px solid black',
                padding: '5px',
                borderRadius: '10px',
                background: 'whitesmoke',

            }}>
                <input id="text" placeholder='Enter Company Name' name="text" onChange={onChange} style={{ textAlign: 'center', color: 'black', background: 'transparent', border: 'transparent' }} />
            </div>

            {/* <Handle type="target" position={Position.Top} isConnectable={isConnectable} style={{ width: '30px', height: '5px', background: 'red', border: '1px solid black', borderRadius: '20px' }} /> */}
            <Handle type="source" position={Position.Bottom} id="a" style={{ left: 35, width: '30px', height: '5px', background: 'red', border: '1px solid black', borderRadius: '20px' }} />
            <Handle type="source" position={Position.Bottom} id="b" style={{ left: 140, width: '30px', height: '5px', background: 'red', border: '1px solid black', borderRadius: '20px' }} />
        </>
    );
}
export default Inputnode