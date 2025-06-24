async function getActivity(){
    const baseURL="https://bored-api.appbrewery.com/random/";
    try{
        const response=await fetch(baseURL);
        const data=await response.json();
        console.log(data);
        console.log(`Having fun: ${data.activity}`);
    }catch(error){
        console.log(`Some error:${error}`);
    }finally{
        console.log(`Fetching completed.`);
    }
}
getActivity();