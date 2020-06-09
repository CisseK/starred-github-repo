const getLinks = (link) => {
    const links = link.split(",")
    const urls = links.map(a=> {
      return {
        url: a.split(";")[0].replace(">","").replace("<",""),
        title:a.split(";")[1]
      }
    })
    return urls;
  }
  
  export default getLinks
  