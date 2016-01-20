function count(string) {
    if (!string) return {}
    const result = {}
    string.split('').forEach(char => {
        if (result[char]) {
            result[char] += 1
        } else result[char] = 1
    })
    return result
}