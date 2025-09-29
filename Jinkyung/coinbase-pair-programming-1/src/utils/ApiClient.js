// TODO Q2
// TODO Q3
const fetchSidebarData = async () => {
  const response = await fetch("/sidebar",{
    method:'GET',
    headers:{
        "Content-Type":"application/json",
        "Authorization":'Bearer test-token'
    }
  });
  
  return response.json()
};

export { fetchSidebarData };
