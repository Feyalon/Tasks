// Задание 5. 12:30 - 13:50

m1 = [7, 17, 1, 9, 1, 17, 56, 56, 23 ]
m2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]

function find(mm1, mm2){
    let res = [];
    let cm = mm1.slice(0); 
    for(let i = 0; i < cm.length; i++){
      if(res.includes(cm[i])) continue; 
      delete cm[i] 
      if (cm.includes(mm1[i]) && mm2.includes(mm1[i])) { 
          let cm2 = mm2.slice(0); 
          delete cm2[cm2.indexOf(mm1[i])] 
          if(cm2.includes(mm1[i])) res.push(mm1[i])
      }
    }
    return res
  }

  
  function _find (m1, m2, n = 0) {
    let o = m1.reduce(
        (a,b)=>{
        a[b] ? a[b]++ : a[b] = 1;
        return a },{}
    );
    let o2 =m2.reduce(
        (a,b)=>{ 
            a[b] ? a[b]++ : a[b] = 1; 
            return a 
        },{}
    );
    for(let k in o) if(o[k] < n || o2[k] < n || !o2[k]) delete o[k];
    return Object.keys(o).map(Number)
  }
  console.log( _find(m1, m2, 1), _find(m1, m2, 2), _find(m1, m2, 3))
  
  function __find (m1, m2, n=0) {
    let obj = [...m1,...m2].reduce((o,k)=>{ o[k] ? o[k]++ : o[k] = 1; return o },{});
    return Object.keys(obj).filter( k => obj[k] / 2 >= n ).map(Number)
  }
  console.log( __find(m1, m2, 2))
