var stratego = {
	name: 'Stratego',
	type: 'board',
	genre: 'strategy',
	playerCount: 2,
	dice: false,
	cards: false,
	spinner: false,
	path: false,
	turnByTurn: true;
	backgroundImg: '/images/los_angeles.png',
	process: [
		setup,
		turns,
		score
	],
	boardCoordinates: {
		xAxis: [
			a,
			b,
			c,
			d,
			e,
			f,
			g,
			h,
			i,
			j
		],
		yAxis: [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		]
	},
	pieceDefinitions: [
		bomb: {
			name: 'Bomb', 
			descriptor: 'B', 
			img: '', 
			count: 6, 
			isMovable: false, 
			maxMove: 0,
			canJump: false,
			moveDirections: [
			],
			losesTo: [
				miner
			], 
			defeats: [
				marshall,
				general,
				colonel,
				major,
				captain,
				lieutenant,
				sergeant,
				scout,
				spy
			]
		},
		marshall: {
			name: 'Marshall', 
			descriptor: '1', 
			img: '', 
			count: 1, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				spy // if spy attacks
			], 
			defeats: [
				general,
				colonel,
				major,
				captain,
				lieutenant,
				sergeant,
				miner,
				scout,
				spy,
				flag
			]
		},
		general: {
			name: 'General', 
			descriptor: '2', 
			img: '', 
			count: 1, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall
			], 
			defeats: [
				colonel,
				major,
				captain,
				lieutenant,
				sergeant,
				miner,
				scout,
				spy,
				flag
			]
		},
		colonel: {
			name: 'Colonel', 
			descriptor: '3', 
			img: '', 
			count: 2, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general
			], 
			defeats: [
				major,
				captain,
				lieutenant,
				sergeant,
				miner,
				scout,
				spy,
				flag
			]
		},
		major: {
			name: 'Major', 
			descriptor: '4', 
			img: '', 
			count: 3, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel
			], 
			defeats: [
				captain,
				lieutenant,
				sergeant,
				miner,
				scout,
				spy,
				flag
			]
		},
		captain: {
			name: 'Captain', 
			descriptor: '5', 
			img: '', 
			count: 4, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major
			], 
			defeats: [
				lieutenant,
				sergeant,
				miner,
				scout,
				spy,
				flag
			]
		},
		lieutenant: {
			name: 'Lieutenant', 
			descriptor: '6', 
			img: '', 
			count: 4, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major,
				captain
			], 
			defeats: [
				sergeant,
				miner,
				scout,
				spy,
				flag
			]
		},
		sergeant: {
			name: 'Sergeant', 
			descriptor: '7', 
			img: '', 
			count: 4, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major,
				captain,
				lieutenant
			], 
			defeats: [
				miner,
				scout,
				spy,
				flag
			]
		},
		miner: {
			name: 'Miner', 
			descriptor: '8', 
			img: '', 
			count: 5, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major,
				captain,
				lieutenant,
				sergeant
			], 
			defeats: [
				bomb,
				scout,
				spy,
				flag
			]
		},
		scout: {
			name: 'Scout', 
			descriptor: '9', 
			img: '', 
			count: 8, 
			isMovable: true, 
			maxMove: 999,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major,
				captain,
				lieutenant,
				sergeant,
				miner
			], 
			defeats: [
				spy,
				flag
			]
		},
		spy: {
			name: 'Spy', 
			descriptor: 'S', 
			img: '', 
			count: 1, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				l,
				f,
				r,
				b
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major,
				captain,
				lieutenant,
				sergeant,
				miner,
				scout
			], 
			defeats: [
				marshall, // if spy attacks
				flag
			]
		},
		flag: {
			name: 'Flag', 
			descriptor: 'F', 
			img: '', 
			count: 1, 
			isMovable: false, 
			maxMove: 0,
			canJump: false,
			moveDirections: [
			],
			losesTo: [
				marshall,
				general,
				colonel,
				major,
				captain,
				lieutenant,
				sergeant,
				miner,
				scout,
				spy
			], 
			defeats: [
			]
		},
	],
};
