// 以半径为2的1/4圆，其面积正好PI
const R = 2;
const R2 = R * R;
const increment = 0.0001; // 增长值，降低增长值，提高精度
const increment2 = increment * increment;
let area = 0;

for (let x = 0; x <= R; x += increment) {
  for (let y = 0; y <= R; y += increment) {
    if (x * x + y * y <= R2) {
      area += increment2;
    }
  }
}
console.log('PI: ', area);