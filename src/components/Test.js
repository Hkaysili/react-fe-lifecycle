import {useEffect, useState} from 'react';

export default function Test () {
    // amacımız component'in render olduğunu görmek...
    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)

    useEffect(()=>{
        console.log('Component ilk yüklendiğinde çalışır..')
        // fetch işlemlerini genelde sayfa ilk yükleme anında fetch işlemi yapılır.
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => console.log(data))

        // component destroy anı - unmount
        // Örneğin bir interval'imiz olsun ve componentle işimiz bitince sonlandıralım...
        let interval = setInterval(()=>console.log(`- Set Interval çalıştı..`), 1000)
        return () => {
            console.log('Component destroyed')
            clearInterval(interval)
        }
    },[])

    /*
    useEffect(() => {
        {postId === 0  ? console.log("İlk post ataması") : console.log(`postId değeri değişti : ${postId}`) } 
    }, [postId])
    */

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data)) 
    }, [postId])


    /*
    useEffect(()=>{
     console.log('Component render oldu!');   
    })
    */

    return(
        <div style={{background:"#ddd", padding:"5px 10px 20px 10px", marginTop:"10px", borderRadius:"5px"}}>
            <p>Test Component İçerikleri</p>
            <hr/>
            <h3>Post ID : {postId}</h3>
            <p>{post && JSON.stringify(post)}</p>
            <button onClick={() => setPostId(postId => postId + 1)}>Sonraki Konu</button>
        </div>
    )
}