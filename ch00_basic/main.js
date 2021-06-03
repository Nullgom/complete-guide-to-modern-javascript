// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
if (true) {
  const ulEl = document.querySelector('ul')
  for(let i = 0; i < 10; i += 1) {
    const li = document.createElement('li');
    li.textContent = `list-${i + 1}`
    if ((i + 1) % 2 === 0) {
      li.addEventListener('click', function() {
        console.log(li.textContent)
      })
    }
    ulEl.appendChild(li)
    
  }
}

// 변수 유효범위(Varialble Scope)
// var, let, const
if(true) {
  function scope() {
    if (ture) {
      var a = 123
    }
    console.log
  }

}

// 형변환(Type conversion)
const a = 1
const b = '1' 

console.log(a == b)

// Truthy 참 같은 값
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('false') {
  console.log(123)
}
if (0) {
  console.log(123)
}

// 함수 복습
{
  function sum(x, y) {
      console.log(x + y)
  }

  function sum2(x, y) {
    return  x + y
  }
  sum(1, 3)
  sum(4, 12)

  const a = sum2(1, 3)
  const b = sum2(4, 12)

  console.log(a)
  console.log(b)
}