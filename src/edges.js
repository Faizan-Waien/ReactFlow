export default [
    { id: 'a-c', source: 'a', sourceHandle: 'b', target: 'c', type: 'step' },
    { id: 'c/f', source: 'c', target: 'f', animated: true, type: 'ColorfulEdge', data: { color: 'blue' } },
    { id: 'c/d', source: 'c', target: 'd', animated: true, type: 'ColorfulEdge', data: { color: 'blue' } },
    { id: 'c/e', source: 'c', target: 'e', animated: true, type: 'ColorfulEdge', data: { color: 'blue' } },

    { id: 'a-g', source: 'a', sourceHandle: 'b', target: 'g', type: 'step' },
    { id: 'g/h', source: 'g', target: 'h', animated: true, type: 'ColorfulEdge', data: { color: 'orange' } },
    { id: 'g/i', source: 'g', target: 'i', animated: true, type: 'ColorfulEdge', data: { color: 'orange' } },
    { id: 'g/j', source: 'g', target: 'j', animated: true, type: 'ColorfulEdge', data: { color: 'orange' } },

    { id: 'a-ch', source: 'a', sourceHandle: 'a', target: 'ch' },

    { id: 'ch-b', source: 'ch', target: 'b', label: 'Board Of Directors', animated: true, type: 'ColorfulEdge', data: { color: 'darkblue' } },

    { id: 'b1-b2', source: 'b-1', target: 'b-2', animated: true, type: 'ColorfulEdge', data: { color: 'darkblue' } },
    { id: 'b1-b3', source: 'b-2', target: 'b-3', animated: true, type: 'ColorfulEdge', data: { color: 'darkblue' } },
    { id: 'b3-b4', source: 'b-3', target: 'b-4', animated: true, type: 'ColorfulEdge', data: { color: 'darkblue' } },
    { id: 'b4-b1', source: 'b-4', target: 'b-1', animated: true, type: 'ColorfulEdge', data: { color: 'darkblue' } },

    { id: 'b-ceo', source: 'b', target: 'ceo', animated: true, type: 'ColorfulEdge', data: { color: 'darkblue' }  },

    { id: 'ceo-sales', source: 'ceo', target: 'sales', animated: true, type: 'ColorfulEdge', data: { color: 'green' } },
    { id: 'sales-ca', source: 'sales', target: 'ca', animated: true, type: 'ColorfulEdge', data: { color: 'green' } },
    { id: 'ca-ja', source: 'ca', target: 'ja', animated: true, type: 'ColorfulEdge', data: { color: 'green' } },
    { id: 'sales-t1', source: 'ja', target: 't1', animated: true, type: 'ColorfulEdge', data: { color: 'green' } },
    { id: 'sales-t2', source: 'ja', target: 't2', animated: true, type: 'ColorfulEdge', data: { color: 'green' } },

    { id: 'ceo-hr', source: 'ceo', target: 'hr', animated: true, type: 'ColorfulEdge', data: { color: 'purple' } },
    { id: 'hr-er', source: 'hr', target: 'er', animated: true, type: 'ColorfulEdge', data: { color: 'purple' } },
    { id: 'hr-rt', source: 'hr', target: 'rt', animated: true, type: 'ColorfulEdge', data: { color: 'purple' } },

    { id: 'ceo-prod', source: 'ceo', target: 'prod', animated: true, type: 'ColorfulEdge', data: { color: 'brown' } },
    { id: 'prod-tl', source: 'prod', target: 'tl', animated: true, type: 'ColorfulEdge', data: { color: 'brown' } },
    { id: 'tl-sp', source: 'tl', target: 'sp', animated: true, type: 'ColorfulEdge', data: { color: 'brown' } },
    { id: 'tl-p1', source: 'tl', target: 'p1', animated: true, type: 'ColorfulEdge', data: { color: 'brown' } },
    { id: 'tl-p2', source: 'tl', target: 'p2', animated: true, type: 'ColorfulEdge', data: { color: 'brown' } },

]
