export default [
  {
    id: 'a',
    type: 'Inputnode',
    data: { label: 'Fast Motors' },
    position: { x: 85, y: 25 },
  },
  // ---------------------------
  {
    id: 'c',
    type: 'default',
    data: { label: 'Products' },
    position: { x: 250, y: 140 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 80,
      background: 'whitesmoke'
    },
  },
  {
    id: 'd',
    type: 'output',
    data: { label: 'Category-1' },
    position: { x: 390, y: 90 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  {
    id: 'e',
    type: 'output',
    data: { label: 'Category-2' },
    position: { x: 390, y: 140 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  {
    id: 'f',
    type: 'output',
    data: { label: 'Category-3' },
    position: { x: 390, y: 190 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
// --------------------
  {
    id: 'g',
    type: 'default',
    data: { label: 'Services' },
    position: { x: 250, y: 320 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 80,
      background: 'whitesmoke'
    },
  },
  {
    id: 'h',
    type: 'output',
    data: { label: 'Option-1' },
    position: { x: 390, y: 270 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  {
    id: 'i',
    type: 'output',
    data: { label: 'Option-2' },
    position: { x: 390, y: 320 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  {
    id: 'j',
    type: 'output',
    data: { label: 'Option-3' },
    position: { x: 390, y: 370 },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  // -----------------------------
  {
    id: 'ch',
    type: 'default',
    position: { x: 0, y: 100 },
    data: { label: 'Chain of Command' },
    style: {
      width: 130,
      background: 'whitesmoke'
    },
  },
  {
    id: 'b',
    type: 'default',
    position: { x: -15, y: 190 },
    data: null,
    style: {
      width: 160,
      height: 120,
      backgroundColor: 'rgba(240,240,240,0.25)',
    },
  },
  {
    id: 'b-1',
    data: { label: 'Mr. X' },
    position: { x: 10, y: 10 },
    parentNode: 'b',
    extent: 'parent',
    draggable: false,
    type: 'default',
    style: {
      width: 60,
    },
    sourcePosition: 'bottom',
    targetPosition: 'right',
  },
  {
    id: 'b-2',
    data: { label: 'Mr. Z' },
    position: { x: 10, y: 70 },
    parentNode: 'b',
    extent: 'parent',
    draggable: false,
    type: 'default',
    style: {
      width: 60,
    },
    sourcePosition: 'right',
    targetPosition: 'top',
  },
  {
    id: 'b-3',
    data: { label: 'Mr. A' },
    position: { x: 90, y: 70 },
    parentNode: 'b',
    extent: 'parent',
    draggable: false,
    type: 'default',
    style: {
      width: 60,
    },
    sourcePosition: 'top',
    targetPosition: 'left',
  },
  {
    id: 'b-4',
    data: { label: 'Mr. Y' },
    position: { x: 90, y: 10 },
    parentNode: 'b',
    extent: 'parent',
    draggable: false,
    type: 'default',
    style: {
      width: 60,
    },
    sourcePosition: 'left',
    targetPosition: 'bottom',
  },
  {
    id: 'ceo',
    type: 'default',
    data: { label: 'CEO' },
    position: { x: 25, y: 340 },
    style: {
      width: 80,
    },
  },
  {
    id: 'sales',
    type: 'default',
    data: { label: 'Sales Manager' },
    position: { x: -65, y: 430 },
    style: {
      width: 80,
    },
  },
  {
    id: 'ca',
    type: 'default',
    data: { label: 'Chief Accountant' },
    position: { x: -65, y: 510 },
    style: {
      width: 80,
    },
  },
  {
    id: 'ja',
    type: 'default',
    data: { label: 'Junior Accountant' },
    position: { x: -65, y: 590 },
    style: {
      width: 80,
    },
  },
  {
    id: 't1',
    type: 'output',
    data: { label: 'Trainee' },
    position: { x: -170, y: 650 },
    targetPosition: 'right',
    style: {
      width: 90,
    },
  },
  {
    id: 't2',
    type: 'output',
    data: { label: 'Trainee' },
    position: { x: -170, y: 700 },
    targetPosition: 'right',
    style: {
      width: 90,
    },
  },

  {
    id: 'hr',
    type: 'default',
    data: { label: 'HR Manager' },
    position: { x: 25, y: 510 },
    style: {
      width: 80,
    },
  },
  {
    id: 'er',
    type: 'output',
    data: { label: 'Employee Relations' },
    position: { x: 25, y: 610 },
    style: {
      width: 80,
    },
    targetPosition: 'right',

  },
  {
    id: 'rt',
    type: 'output',
    data: { label: 'Recruiting Team' },
    position: { x: 25, y: 680 },
    style: {
      width: 80,
    },
    targetPosition: 'right',
  },
  {
    id: 'prod',
    type: 'default',
    data: { label: 'Production Manager' },
    position: { x: 115, y: 430 },
    style: {
      width: 80,
    },
  },
  {
    id: 'tl',
    type: 'default',
    data: { label: 'Team Leader' },
    position: { x: 115, y: 510 },
    style: {
      width: 80,
    },
  },
  {
    id: 'sp',
    type: 'output',
    data: { label: 'Senior Programmer' },
    position: { x: 200, y: 580 },
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  {
    id: 'p1',
    type: 'output',
    data: { label: 'Programmer' },
    position: { x: 200, y: 650 },
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
  {
    id: 'p2',
    type: 'output',
    data: { label: 'Programmer' },
    position: { x: 200, y: 700 },
    targetPosition: 'left',
    style: {
      width: 90,
    },
  },
];