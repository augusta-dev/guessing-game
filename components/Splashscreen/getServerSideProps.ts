const getServerSideProps = async () => {
   try{ const getData = async () =>{
        let list = await fetch("/api/list")
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