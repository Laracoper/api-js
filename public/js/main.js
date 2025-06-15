function plus() {
    let btn = document.querySelector('.btn')
    let count = 1
    btn.addEventListener('click', function (e) {
        btn.textContent = count++

    })

}
plus()


function count() {
    let btn1 = document.querySelector('.btn1')
    let btn2 = document.querySelector('.btn2')
    let num = document.querySelector('.num')
    let count = 1

    function increment() {
        num.textContent = count++
    }

    function decriment() {
        num.textContent = count--
    }

    btn1.addEventListener('click', increment)

    btn2.addEventListener('click', decriment)
}

count()

// =======================================

// let like = document.querySelector('.like')
// like.addEventListener('click', function (e) {
//     let post = document.querySelector('.post3')

//     const datas = {
//         lik: like.textContent,
//         number:778
//     }

//    fetch('add.php', {
//         method: 'post',
//         body: JSON.stringify(datas),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => {
//             res.json
//             console.log(res.json);

//         })
//         .then(data => {
//             console.log(data)
//             post.insertAdjacentHTML('beforeend', `
//                   <p>${data.mess}</p>  
//                     `)
//         })
// })


// =============================

let like = document.querySelector('.like')
let p = document.querySelector('.post p')
like.addEventListener('click', function (e) {
    like.style.backgroundColor = 'red'
    like.textContent = 'ответ'
    like.style.width = '50%'
    like.disabled = true
    const mydata = {
        dat1: 'my like code',
        dat2: like.textContent,
        dat3: p.textContent
    }
    myfunc(mydata)

})

async function myfunc(params) {
    const res = await fetch('./add.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    // console.log(res);
    const result = await res.json()
    console.log(result)

    let aray = result.aray
    console.log(aray);

    let post = document.querySelector('.post3')
    post.insertAdjacentHTML('beforeend', `
        <h3>ошибка: ${result.error}</h3>
        <p>сообщение: ${result.mess}</p>
        <p>время на сервере: ${result.server_time}</p>
        <p>юзер агент: ${result.user_agent}</p>
        <p>s: ${result.s}</p>
        <p>v: ${result.v}</p>
        <p>данные: ${get(aray)}</p>
         
        `)

    //     post.innerHTML = `
    //    <h3>ошибка: ${result.error}</h3>
    //         <p>сообщение: ${result.mess}</p>
    //         <p>время на сервере: ${result.server_time}</p>
    //         <p>юзер агент: ${result.user_agent}</p>
    //         <p>s: ${result.s}</p>
    //         <p>v: ${result.v}</p>
    //         <p>данные: ${result.aray}</p>        
    //    
    // 
    // 
    // `

}

function get(aray) {
    let get = document.querySelector('.get')
    aray.forEach(el => {
        get.innerHTML = `
<p>${el.name}</p>
<p>${el.age}</p>
`
    });
}



