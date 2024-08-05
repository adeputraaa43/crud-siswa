//mengetahui waktu eksekusi kode
console.time()
let arr = []
const N = 1_000_000

for (let i = 0; i < N; i++) {
    arr.push(Math.random() * N )
}
arr.sort()

console.timeEnd()