/**
 * 设置值
 * @param key 键
 * @param value 值
 */
export default function put(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}
