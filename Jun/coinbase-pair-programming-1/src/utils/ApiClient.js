// TODO Q2
// TODO Q3
const fetchSidebarData = async () => {
  const headers = new Headers();
  headers.append('Authorization', 'test');
  try {
    const res = await fetch('/sidebar', {
      headers,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export { fetchSidebarData };
