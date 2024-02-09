const getServerSideProps = async () => {
   try{ const getData = async () =>{
        let list = await fetch("https://tv-shows-guessing-game.vercel.app/api/list")
        console.log(list)
        return list.json()
    }
    const data = await getData()    
    console.log(data)}
    catch(err){
        console.log(err)
    }
}
export default getServerSideProps