export const fetchData = async () => {
  const res = await fetch('https://dull-red-chick-wrap.cyclic.app/card' ,{
    header: {
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true,
      "Access-Control-Expose-Headers": "*",
      "Access-Control-Allow-Methods": "*" 
    }
  })
  const data = await res.json()
  return data
}
