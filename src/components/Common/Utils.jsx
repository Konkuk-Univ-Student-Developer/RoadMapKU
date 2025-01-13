import pako from 'pako';

// Base64 인코딩 함수
const toBase64 = (uint8Array) => btoa(String.fromCharCode(...uint8Array));

// Base64 디코딩 함수
const fromBase64 = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

// 데이터를 Base64로 인코딩하는 함수
const encodeData = (data) => {
	const compressed = pako.deflate(data, { to: 'string' });
	const base64Compressed = toBase64(compressed);
	const utf8Encoded = encodeURIComponent(base64Compressed);

	return utf8Encoded;
};

// 데이터를 Base64로 디코딩하는 함수
const decodeData = (data) => {
	const utf8Decoded = decodeURIComponent(data);
	const compressedData = fromBase64(utf8Decoded);
	const decompressed = pako.inflate(compressedData, { to: 'string' });
	const loadedTableData = JSON.parse(decompressed);

	return loadedTableData;
};

// 함수들을 export
export { toBase64, fromBase64, encodeData, decodeData };
