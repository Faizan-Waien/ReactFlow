import React from 'react'
import { BaseEdge, EdgeLabelRenderer, getBezierPath, getSmoothStepPath } from 'reactflow'

const ColorfulEdge = (props) => {
    const {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        markerEnd,
        data,
        label
    } = props

    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ stroke: data.color }} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        fontSize: 12,
                        // everything inside EdgeLabelRenderer has no pointer events by default
                        // if you have an interactive element, set pointer-events: all
                        pointerEvents: 'all',
                        backgroundColor: 'white'
                    }}
                    className="nodrag nopan"
                >
                    {label}
                </div>
            </EdgeLabelRenderer>
        </>
    )
}

export default ColorfulEdge