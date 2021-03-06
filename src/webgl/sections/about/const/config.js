import * as THREE from 'three';

const BGUniformsConfig = {
	baseColor: new THREE.Color('#000000'),
	area1Color: new THREE.Color('#FFFFFF'),
	area2Color: new THREE.Color('#FFFFFF'),
	area1Position: new THREE.Vector2(0.2, 0.2),
	area2Position: new THREE.Vector2(0.9, 0.9)
};

const TextUniformConfig = {
	topColor: new THREE.Color('rgb(245,230,255)'),
	bottomColor: new THREE.Color('rgb(255,255,255)')
};

const TextConfig = {};
// const AnimeName = '[ One-Punch Man ]';
const AnimeName = '';

const AnimeTitleUniforms = {
	topColor: new THREE.Color('rgb(245,230,255)'),
	bottomColor: new THREE.Color('rgb(255,255,255)')
};

export { BGUniformsConfig, TextUniformConfig, TextConfig, AnimeName, AnimeTitleUniforms };
