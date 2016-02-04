db = new Mongo().getDB('games');

var conquerLosAngeles = {
	name: 'Conquer Los Angeles',
	type: 'board',
	genre: 'strategy',
	playerCount: 2,
	dice: false,
	cards: false,
	spinner: false,
	path: false,
	turnByTurn: true,
	backgroundImg: '/images/los_angeles.png',
	process: [
		'setup',
		'turns',
		'score'
	],
	boardCoordinates: {
		xAxis: [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j'
		],
		yAxis: [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9'
		]
	},
	pieceDefinitions: [
		{
			name: 'bomb', 
			descriptor: 'B', 
			img: '', 
			count: 6, 
			isMovable: false, 
			maxMove: 0,
			canJump: false,
			moveDirections: [
			],
			losesTo: [
				'miner'
			], 
			defeats: [
				'marshall',
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'scout',
				'spy'
			]
		},
		{
			name: 'marshall', 
			descriptor: '1', 
			img: '', 
			count: 1, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'spy' // if spy attacks
			], 
			defeats: [
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'general', 
			descriptor: '2', 
			img: '', 
			count: 1, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall'
			], 
			defeats: [
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'colonel', 
			descriptor: '3', 
			img: '', 
			count: 2, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general'
			], 
			defeats: [
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'major', 
			descriptor: '4', 
			img: '', 
			count: 3, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general',
				'colonel'
			], 
			defeats: [
				'captain',
				'lieutenant',
				'sergeant',
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'captain', 
			descriptor: '5', 
			img: '', 
			count: 4, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general',
				'colonel',
				'major'
			], 
			defeats: [
				'lieutenant',
				'sergeant',
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'lieutenant', 
			descriptor: '6', 
			img: '', 
			count: 4, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general',
				'colonel',
				'major',
				'captain'
			], 
			defeats: [
				'sergeant',
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'sergeant', 
			descriptor: '7', 
			img: '', 
			count: 4, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant'
			], 
			defeats: [
				'miner',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'miner', 
			descriptor: '8', 
			img: '', 
			count: 5, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'marshall',
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant'
			], 
			defeats: [
				'bomb',
				'scout',
				'spy',
				'flag'
			]
		},
		{
			name: 'scout', 
			descriptor: '9', 
			img: '', 
			count: 8, 
			isMovable: true, 
			maxMove: 999,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'miner'
			], 
			defeats: [
				'spy',
				'flag'
			]
		},
		{
			name: 'spy', 
			descriptor: 'S', 
			img: '', 
			count: 1, 
			isMovable: true, 
			maxMove: 1,
			canJump: false,
			moveDirections: [
				'l',
				'f',
				'r',
				'b'
			],
			losesTo: [
				'bomb',
				'marshall',
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'miner',
				'scout'
			], 
			defeats: [
				'marshall', // if spy attacks
				'flag'
			]
		},
		{
			name: 'flag', 
			descriptor: 'F', 
			img: '', 
			count: 1, 
			isMovable: false, 
			maxMove: 0,
			canJump: false,
			moveDirections: [
			],
			losesTo: [
				'marshall',
				'general',
				'colonel',
				'major',
				'captain',
				'lieutenant',
				'sergeant',
				'miner',
				'scout',
				'spy'
			], 
			defeats: [
			]
		}
	]
};

function addGame(game) {
	db.games.insert(game);
}

addGame(conquerLosAngeles);




